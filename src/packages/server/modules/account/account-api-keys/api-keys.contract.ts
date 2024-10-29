import {
  FetchApiKey,
  FetchApiKeys,
} from "@/packages/server/modules/database/schema/api-keys.schema";
import {
  CreateApiKeySchema,
  UpdateApiKeyNameSchema,
} from "@/packages/server/modules/account/account-api-keys/api-keys.schema";
import { initContract } from "@ts-rest/core";

const c = initContract();

export const apiKeysContract = c.router({
  create: {
    method: "POST",
    path: "/keys",
    responses: {
      200: FetchApiKey,
    },
    body: CreateApiKeySchema,
  },
  findOneByCuid: {
    method: "GET",
    path: "/keys/:cuid",
    responses: {
      200: FetchApiKey,
    },
  },
  updateName: {
    method: "PATCH",
    path: "/keys/:cuid/update-name",
    responses: {},
    body: UpdateApiKeyNameSchema,
  },
  delete: {
    method: "DELETE",
    path: "/keys/:cuid",
    responses: {},
    body: null,
  },
  fetchAll: {
    method: "GET",
    path: "/keys",
    responses: {
      200: FetchApiKeys,
    },
  },
});
