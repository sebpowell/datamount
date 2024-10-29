import { env } from "@/env.mjs";
import { api } from "@/packages/server";
import { QueryClient } from "@tanstack/react-query";
import { ApiFetcherArgs, tsRestFetchApi } from "@ts-rest/core";
import { initQueryClient } from "@ts-rest/react-query";

enum Queries {
  "api_keys" = "api_keys",
  "api_logs" = "api_logs",
  "account_dashboard" = "account_dashboard",
  "account_credits" = "account_credits",
}

const queryClient = new QueryClient({});

const client = initQueryClient(api, {
  baseUrl: "/api",
  api: async (args: ApiFetcherArgs & { myCustomArg?: string }) => {
    const t = await tsRestFetchApi(args);

    // Temp disabled as it runs even if the key used by the site doesn't exist
    // if (t.status === StatusCodes.UNAUTHORIZED)
    //   signOut({ callbackUrl: routes.getRoute("auth_login") });

    return t;
  },
  baseHeaders: {
    "x-api-key": env.NEXT_PUBLIC_DATA_SERVICE_API_KEY,
  },
});

export { Queries, queryClient, client };
