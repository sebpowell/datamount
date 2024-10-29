import { api } from "@/packages/server";
import { createNextRoute } from "@ts-rest/next";
import { dataService } from "@/packages/server/modules/data/data.service";

export const dataRouter = createNextRoute(api.data, {
  areaProfile: async ({ headers, query }) => {
    return {
      status: 200,
      body: await dataService.getAreaProfile({ headers, id: query.id }),
    };
  },
  areaLookup: async ({ headers, query }) => {
    return {
      status: 200,
      body: await dataService.getAreaLookup({ headers, string: query.string }),
    };
  },
  addressMatch: async ({ headers, query }) => {
    return {
      status: 200,
      body: await dataService.getAddressMatch({
        headers,
        address: query.address,
      }),
    };
  },
  autocomplete: async ({ headers, query }) => {
    return {
      status: 200,
      body: await dataService.getAutocomplete({
        headers,
        string: query.string,
      }),
    };
  },
  addressCleanse: async ({ headers, query }) => {
    return {
      status: 200,
      body: await dataService.getAddressCleanse({
        headers,
        string: query.string,
      }),
    };
  },
  property: async ({ headers, query }) => {
    return {
      status: 200,
      body: await dataService.getProperty({ headers, udprn: query.udprn }),
    };
  },
  postcodeLookup: async ({ headers, query }) => {
    return {
      status: 200,
      body: await dataService.getPostcodeLookup({
        headers,
        postcode: query.postcode,
      }),
    };
  },
  search: async ({ headers, query }) => {
    return {
      status: 200,
      body: await dataService.getSearch({ headers, query: query.query }),
    };
  },
});
