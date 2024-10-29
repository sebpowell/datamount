import { DataServiceEndpoints } from "@/packages/server/modules/database/schema/api-keys.schema";
import { addressCleanseConfig } from "@/packages/config/endpoints/address-cleanse.config";
import { addressMatchConfig } from "@/packages/config/endpoints/address-match.config";
import { areaLookupConfig } from "@/packages/config/endpoints/area-lookup.config";
import { areaProfileConfig } from "@/packages/config/endpoints/area-profile.config";
import { autocompleteConfig } from "@/packages/config/endpoints/autocomplete.config";
import { postcodeLookupConfig } from "@/packages/config/endpoints/postcode-lookup.config";
import { propertyConfig } from "@/packages/config/endpoints/property.config";
import { DataServiceNames } from "@/packages/server/modules/data/data.config";
import { Palettes } from "@/packages/theme";

type EndpointFields<T extends object> = {
  name: keyof T;
  placeholder: string;
  defaultValue: string;
  description: string;
  type: "INPUT";
  label: string;
  required: boolean;
};

export type Endpoint<Request extends object, Resp extends object> = {
  name: string;
  active: boolean;
  service: DataServiceNames;
  color: Palettes;
  url: string;
  slug: string;
  externalUrl: string;
  description: string;
  fields: {
    [key in keyof Request]: EndpointFields<Request>;
  };
  example: Resp;
  contentfulId: string;
  credits: number;
};

type Endpoints = {
  [key in DataServiceEndpoints]: Endpoint<any, any>;
};

const endpoints: Endpoints = {
  [DataServiceEndpoints.property]: propertyConfig,
  [DataServiceEndpoints.addressMatch]: addressMatchConfig,
  [DataServiceEndpoints.areaProfile]: areaProfileConfig,
  [DataServiceEndpoints.areaLookup]: areaLookupConfig,
  [DataServiceEndpoints.autocomplete]: autocompleteConfig,
  [DataServiceEndpoints.addressCleanse]: addressCleanseConfig,
  [DataServiceEndpoints.postcodeLookup]: postcodeLookupConfig,
};

const validateEndpoints = (endpoints: Endpoints) => {
  let slugs: string[] = [];

  Object.keys(endpoints).map((key) => {
    let endpoint = endpoints[key as DataServiceEndpoints];

    slugs.push(endpoint.slug);
  });

  const uniqueSlugs = new Set(slugs);

  if (uniqueSlugs.size !== slugs.length) {
    const duplicates = slugs.filter(
      (slug, index) => slugs.indexOf(slug) !== index,
    );

    console.error("Duplicate slugs are:", duplicates);

    throw new Error(`Duplicate slugs found: ${duplicates}`);
  } else {
    console.log("No duplicate slugs found.");
  }
};

validateEndpoints(endpoints);

export type { Endpoints, EndpointFields };

export { endpoints };
