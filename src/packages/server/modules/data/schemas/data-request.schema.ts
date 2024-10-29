import { discriminatedUnion, literal, z } from "zod";
import { PostcodeLookupRequestSchema } from "@/packages/server/modules/data/schemas/postcode-lookup.schema";
import { AutoCompleteRequestSchema } from "@/packages/server/modules/data/schemas/autocomplete.schema";
import { DataServiceEndpoints } from "@/packages/server/modules/database/schema/api-keys.schema";

export const typeEnum = z.enum([
  DataServiceEndpoints.autocomplete,
  DataServiceEndpoints.postcodeLookup,
]);

const requestSchemas = discriminatedUnion("type", [
  AutoCompleteRequestSchema.extend({
    type: literal(typeEnum.enum.autocomplete),
  }),
  PostcodeLookupRequestSchema.extend({
    type: literal(typeEnum.enum.postcodeLookup),
  }),
]);

export { requestSchemas };
