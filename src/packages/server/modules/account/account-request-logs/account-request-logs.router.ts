import { api } from "@/packages/server";
import { accountGuard } from "@/packages/server/modules/account/account.guard";
import { apiRequestService } from "@/packages/server/modules/api-requests/api-request.service";
import { createNextRoute } from "@ts-rest/next";

export const apiRequestsRouter = createNextRoute(api.account.requests, {
  // @ts-ignore
  fetchAll: async (args) => {
    const { account } = await accountGuard.guard(args);

    const requests = await apiRequestService.getAllByAccount({
      accountId: account.id,
    });

    return {
      status: 200,
      body: requests,
    };
  },
});
