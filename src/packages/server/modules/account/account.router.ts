import { api } from "@/packages/server";
import { accountCreditsRouter } from "@/packages/server/modules/account/account-credits/account-credits.router";
import { accountDashboardRouter } from "@/packages/server/modules/account/account-dashboard/account-dashboard.router";
import { apiKeysRouter } from "@/packages/server/modules/account/account-api-keys/api-keys.router";
import { apiRequestsRouter } from "@/packages/server/modules/account/account-request-logs/account-request-logs.router";
import { createNextRoute } from "@ts-rest/next";

export const accountRouter = createNextRoute(api.account, {
  dashboard: accountDashboardRouter,
  keys: apiKeysRouter,
  requests: apiRequestsRouter,
  credits: accountCreditsRouter,
});
