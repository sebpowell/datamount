import { api } from "@/packages/server";
import { accountDashboardService } from "@/packages/server/modules/account/account-dashboard/account-dashboard.service";
import { accountGuard } from "@/packages/server/modules/account/account.guard";
import { createNextRoute } from "@ts-rest/next";

export const accountDashboardRouter = createNextRoute(api.account.dashboard, {
  fetch: async (args) => {
    const { account } = await accountGuard.guard(args);

    const dashboard = await accountDashboardService.getDashboard({
      accountId: account.id,
    });

    return {
      status: 200,
      body: dashboard,
    };
  },
});
