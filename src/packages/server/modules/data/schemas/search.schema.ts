import { areaLookupResponseItem } from "@/packages/server/modules/data/schemas/area-lookup.schema";
import { autoCompleteAddress } from "@/packages/server/modules/data/schemas/autocomplete.schema";
import { TypeOf, object, string, z } from "zod";

const searchRequest = object({
  query: z
    .string()
    .optional()
    .refine((value) => value !== undefined && value.length >= 1, {
      message: "The input string must be at least 1 character long",
    }),
});

type SearchRequest = TypeOf<typeof searchRequest>;

const searchResponseItemBase = object({
  id: string(),
});

const autoCompleteAddressWithType = searchResponseItemBase
  .merge(autoCompleteAddress)
  .extend({
    type: z.literal("address"),
  });

const areaLookupItemWithType = searchResponseItemBase
  .merge(areaLookupResponseItem)
  .extend({
    type: z.literal("area"),
  });

const searchResponseItem = z.union([
  autoCompleteAddressWithType,
  areaLookupItemWithType,
]);

type SearchResponseItem = TypeOf<typeof searchResponseItem>;

const searchResponse = object({
  items: searchResponseItem.array(),
});

type SearchResponse = TypeOf<typeof searchResponse>;

export type { SearchResponse, SearchRequest, SearchResponseItem };

export { searchResponse, searchRequest };
