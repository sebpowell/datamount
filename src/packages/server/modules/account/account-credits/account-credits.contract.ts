import { FetchAccountCredits } from "@/packages/server/modules/database/schema/credits.schema";
import { BuyCreditsRequest } from "@/packages/server/modules/account/account-credits/account-credits.schema";
import { initContract } from "@ts-rest/core";
import { any } from "zod";

const c = initContract();

export const accountCreditsContract = c.router({
  fetchAll: {
    method: "GET",
    path: "/credits",
    responses: {
      200: FetchAccountCredits,
    },
  },
  purchase: {
    method: "POST",
    path: "/credits",
    responses: {
      200: any(),
    },
    body: BuyCreditsRequest,
  },
});
