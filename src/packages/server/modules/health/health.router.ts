import { api } from "@/packages/server";
import { createNextRoute } from "@ts-rest/next";

export const healthRouter = createNextRoute(api.health, {
  check: async () => {
    return {
      status: 200,
      body: "",
    };
  },
});
