import { FetchApiRequests } from "@/packages/server/modules/database/schema/api-keys.schema";
import { initContract } from "@ts-rest/core";

const c = initContract();

export const apiRequestsContract = c.router({
  fetchAll: {
    method: "GET",
    path: "/logs",
    responses: {
      200: FetchApiRequests,
    },
  },
});
