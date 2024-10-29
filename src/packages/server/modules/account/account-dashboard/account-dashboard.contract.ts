import { FetchAccountDashboardResponse } from "@/packages/server/modules/account/account-dashboard/account-dashboard.schema";
import { initContract } from "@ts-rest/core";

const c = initContract();

export const accountDashboardContract = c.router({
  fetch: {
    method: "GET",
    path: "/dashboard",
    responses: {
      200: FetchAccountDashboardResponse,
    },
  },
});
