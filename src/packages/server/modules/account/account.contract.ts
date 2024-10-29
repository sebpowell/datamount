import { accountCreditsContract } from "@/packages/server/modules/account/account-credits/account-credits.contract";
import { accountDashboardContract } from "@/packages/server/modules/account/account-dashboard/account-dashboard.contract";
import { apiKeysContract } from "@/packages/server/modules/account/account-api-keys/api-keys.contract";
import { apiRequestsContract } from "@/packages/server/modules/account/account-request-logs/account-request-logs.contract";
import { initContract } from "@ts-rest/core";

const c = initContract();

const accountContract = c.router(
  {
    dashboard: accountDashboardContract,
    keys: apiKeysContract,
    requests: apiRequestsContract,
    credits: accountCreditsContract,
  },
  {
    pathPrefix: "/accounts",
  },
);

export { accountContract };
