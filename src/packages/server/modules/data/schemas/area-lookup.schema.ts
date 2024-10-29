import { BaseResponseSchema } from "@/packages/server/modules/data/schemas/base-response.schema";
import { TypeOf, any, number, object, string, z } from "zod";

const areaLookupRequest = object({
  string: z
    .string()
    .optional()
    .refine((value) => value !== undefined && value.length >= 1, {
      message: "The input string must be at least 1 character long",
    }),
});

type AreaLookupRequest = TypeOf<typeof areaLookupRequest>;

const areaLookupResponseItem = object({
  area_id: number(),
  council_id: number(),
  os_code: string(),
  place: string(),
  name1: string(),
  name2: string(),
  county_unitary: string(),
  postcode_district: string(),
  region: string(),
  match: number(),
});

const areaLookupResponse = object({
  string: string(),
  data: object({ areas: areaLookupResponseItem.array() }),
}).merge(BaseResponseSchema);

type AreaLookupResponse = TypeOf<typeof areaLookupResponse>;

export type { AreaLookupRequest, AreaLookupResponse };

export { areaLookupRequest, areaLookupResponse, areaLookupResponseItem };
