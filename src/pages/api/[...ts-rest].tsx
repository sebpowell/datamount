import { api } from "@/packages/server";
import { httpExceptionFilter } from "@/packages/server/filters/http-exception.filter";
import { accountRouter } from "@/packages/server/modules/account/account.router";
import { authRouter } from "@/packages/server/modules/auth/auth.router";
import { dataRouter } from "@/packages/server/modules/data/data.router";
import { healthRouter } from "@/packages/server/modules/health/health.router";
import { createNextRoute, createNextRouter } from "@ts-rest/next";
import { NextApiRequest, NextApiResponse } from "next";

export const router = createNextRoute(api, {
  auth: authRouter,
  account: accountRouter,
  data: dataRouter,
  health: healthRouter,
});

export default createNextRouter(api, router, {
  throwRequestValidation: true,
  errorHandler: (error: unknown, req: NextApiRequest, res: NextApiResponse) => {
    return httpExceptionFilter.catch(error, req, res);
  },
});
