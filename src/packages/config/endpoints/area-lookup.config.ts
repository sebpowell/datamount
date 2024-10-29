import { Endpoint } from "@/packages/config/endpoints";
import { DataServiceNames } from "@/packages/server/modules/data/data.config";
import {
  AreaLookupRequest,
  AreaLookupResponse,
} from "@/packages/server/modules/data/schemas/area-lookup.schema";

const areaLookupConfig: Endpoint<AreaLookupRequest, AreaLookupResponse> = {
  name: "Area Lookup",
  active: false,
  service: DataServiceNames.alpha,
  color: "rose",
  url: "/areas",
  slug: "area_lookup",
  externalUrl: "/areas",
  description: "Find and validate addresses within a given postcode.",
  contentfulId: "uFFOUcsu8rgHxbr1P7jP5",
  credits: 5,
  fields: {
    string: {
      name: "string",
      type: "INPUT",
      description: "",
      placeholder: "e.g. BS25GH",
      defaultValue: "E201FJ",
      label: "Postcode",
      required: true,
    },
  },
  example: {
    string: "",
    object: "",
    data: {
      areas: [],
    },
  },
};

export { areaLookupConfig };
