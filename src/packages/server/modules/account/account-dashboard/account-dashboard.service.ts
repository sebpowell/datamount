import {
  Account,
  accounts,
} from "@/packages/server/modules/database/schema/account.schema";
import { apiRequests } from "@/packages/server/modules/database/schema/api-keys.schema";
import { db } from "@/packages/server/modules/database/drizzle";
import { IFetchAccountDashboardResponse } from "@/packages/server/modules/account/account-dashboard/account-dashboard.schema";
import { startOfMonth } from "date-fns";
import { and, between, count, eq } from "drizzle-orm";

class AccountDashboardService {
  async getDashboard({
    accountId,
  }: {
    accountId: Account["id"];
  }): Promise<IFetchAccountDashboardResponse> {
    const now = new Date();

    const firstDayOfMonth = startOfMonth(now);

    firstDayOfMonth.setHours(0, 0, 0, 0);

    const credits = await db.query.accounts.findFirst({
      where: eq(accounts.id, accountId),
    });

    const numberOfRequests = await db
      .select({ count: count() })
      .from(apiRequests)
      .where(
        and(
          between(apiRequests.createdAt, firstDayOfMonth, now),
          eq(apiRequests.accountId, accountId),
        ),
      );

    return {
      startDate: firstDayOfMonth.toISOString(),
      endDate: now.toISOString(),
      credits: credits?.credits || 0,
      numberOfRequests: numberOfRequests[0].count || 0,
    };
  }
}

const accountDashboardService = new AccountDashboardService();

export { AccountDashboardService, accountDashboardService };
