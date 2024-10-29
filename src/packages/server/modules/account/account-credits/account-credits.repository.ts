import { Account } from "@/packages/server/modules/database/schema/account.schema";
import { credits } from "@/packages/server/modules/database/schema/credits.schema";
import { User } from "@/packages/server/modules/database/schema/user.schema";
import { VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import * as schema from "@/packages/server/modules/database/schema/schema";
import { desc, eq } from "drizzle-orm";
import { db } from "@/packages/server/modules/database/drizzle";

class AccountCreditsRepository {
  private db: VercelPgDatabase<typeof schema>;

  constructor(db: VercelPgDatabase<typeof schema>) {
    this.db = db;
  }

  async getAllByAccountId({ accountId }: { accountId: Account["id"] }) {
    return await this.db.query.credits.findMany({
      orderBy: [desc(credits.createdAt)],
      where: eq(credits.accountId, accountId),
    });
  }

  async fetchAllByAccountId(
    accountId: Account["id"],
    db: VercelPgDatabase<typeof schema>,
  ) {
    return await db.query.credits.findMany({
      orderBy: [desc(credits.createdAt)],
      where: eq(credits.accountId, accountId),
    });
  }

  async addCredits(
    accountId: Account["id"],
    userId: User["id"],
    quantity: number,
  ) {
    return await this.db.insert(credits).values({
      accountId,
      createdBy: userId,
      credits: quantity,
    });
  }
}

export { AccountCreditsRepository };

export const accountCreditsRepository = new AccountCreditsRepository(db);
