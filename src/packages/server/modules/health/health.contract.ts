import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const healthContract = c.router({
  check: {
    method: "GET",
    path: "/health",
    responses: {
      200: z.string(),
    },
  },
});
