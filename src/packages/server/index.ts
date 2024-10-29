import { accountContract } from "@/packages/server/modules/account/account.contract";
import { authContract } from "@/packages/server/modules/auth/auth.contract";
import { dataContract } from "@/packages/server/modules/data/data.contract";
import { healthContract } from "@/packages/server/modules/health/health.contract";
import { initContract } from "@ts-rest/core";

const c = initContract();

export const api = c.router({
  auth: authContract,
  account: accountContract,
  data: dataContract,
  health: healthContract,
});
