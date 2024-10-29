import { Endpoint } from "@/packages/config/endpoints";
import { DataServiceNames } from "@/packages/server/modules/data/data.config";
import {
  IPostcodeLookupRequestSchema,
  IPostcodeLookupResponseSchema,
} from "@/packages/server/modules/data/schemas/postcode-lookup.schema";

const postcodeLookupConfig: Endpoint<
  IPostcodeLookupRequestSchema,
  IPostcodeLookupResponseSchema
> = {
  name: "Postcode Lookup",
  active: false,
  service: DataServiceNames.alpha,
  url: "/postcode_lookup",
  slug: "postcode_lookup",
  color: "cyan",
  externalUrl: "/postcode_lookup",
  description: "Find and validate addresses within a given postcode.",
  contentfulId: "uFFOUcsu8rgHxbr1P7jP5",
  credits: 5,
  fields: {
    postcode: {
      name: "postcode",
      type: "INPUT",
      description: "",
      placeholder: "e.g. BS25GH",
      defaultValue: "E201FJ",
      label: "Postcode",
      required: true,
    },
  },
  example: {
    object: "postcode",
    data: {
      addresses: [
        {
          address: "Flat 1, Fortuna House, 15 Scarlet Close, London, E20 1FJ",
          udprn: "53286273",
        },
      ],
    },
  },
};

export { postcodeLookupConfig };
