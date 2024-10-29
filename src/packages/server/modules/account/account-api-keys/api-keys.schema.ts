import { FetchApiKeys } from "@/packages/server/modules/database/schema/api-keys.schema";
import { z, TypeOf } from "zod";

export const CreateApiKeySchema = z.object({
  name: z.string().min(1),
});

export type ICreateApiKeySchema = TypeOf<typeof CreateApiKeySchema>;

export const UpdateApiKeyNameSchema = CreateApiKeySchema;

export type IUpdateApiKeySchema = TypeOf<typeof CreateApiKeySchema>;

export const FetchApiKeySchema = FetchApiKeys;
