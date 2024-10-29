import {
  AddressCleanseRequestSchema,
  AddressCleanseResponseSchema,
} from "@/packages/server/modules/data/schemas/address-cleanse.schema";
import {
  addressMatchRequest,
  addressMatchResponse,
} from "@/packages/server/modules/data/schemas/adress-match.schema";
import {
  areaLookupRequest,
  areaLookupResponse,
} from "@/packages/server/modules/data/schemas/area-lookup.schema";
import {
  areaProfileRequest,
  areaProfileResponse,
} from "@/packages/server/modules/data/schemas/area-profile.schema";
import {
  AutoCompleteRequestSchema,
  AutoCompleteResponseSchema,
} from "@/packages/server/modules/data/schemas/autocomplete.schema";
import {
  PostcodeLookupRequestSchema,
  PostcodeLookupResponseSchema,
} from "@/packages/server/modules/data/schemas/postcode-lookup.schema";
import {
  PropertyRequestSchema,
  PropertyResponseSchema,
} from "@/packages/server/modules/data/schemas/property.schema";
import {
  searchRequest,
  searchResponse,
} from "@/packages/server/modules/data/schemas/search.schema";
import { initContract } from "@ts-rest/core";

const c = initContract();

export const dataContract = c.router({
  areaProfile: {
    method: "GET",
    path: "/area_profile",
    responses: {
      200: areaProfileResponse,
    },
    query: areaProfileRequest,
  },
  areaLookup: {
    method: "GET",
    path: "/area_lookup",
    responses: {
      200: areaLookupResponse,
    },
    query: areaLookupRequest,
  },
  addressMatch: {
    method: "GET",
    path: "/address_match",
    responses: {
      200: addressMatchResponse,
    },
    query: addressMatchRequest,
  },
  autocomplete: {
    method: "GET",
    path: "/autocomplete",
    responses: {
      200: AutoCompleteResponseSchema,
    },
    query: AutoCompleteRequestSchema,
  },
  addressCleanse: {
    method: "GET",
    path: "/address_cleanse",
    responses: {
      200: AddressCleanseResponseSchema,
    },
    query: AddressCleanseRequestSchema,
  },
  property: {
    method: "GET",
    path: "/property",
    responses: {
      200: PropertyResponseSchema,
    },
    query: PropertyRequestSchema,
  },
  postcodeLookup: {
    method: "GET",
    path: "/postcode_lookup",
    responses: {
      200: PostcodeLookupResponseSchema,
    },
    query: PostcodeLookupRequestSchema,
  },
  search: {
    method: "GET",
    path: "/search",
    responses: {
      200: searchResponse,
    },
    query: searchRequest,
  },
});
