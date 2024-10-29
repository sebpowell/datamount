import { Endpoint } from "@/packages/config/endpoints";
import { DataServiceNames } from "@/packages/server/modules/data/data.config";
import {
  IAddressCleanseRequestSchema,
  IAddressCleanseResponseSchema,
} from "@/packages/server/modules/data/schemas/address-cleanse.schema";

const addressCleanseConfig: Endpoint<
  IAddressCleanseRequestSchema,
  IAddressCleanseResponseSchema
> = {
  name: "Address Cleanse",
  active: false,
  service: DataServiceNames.alpha,
  url: "/address_cleanse",
  slug: "address_cleanse",
  color: "forest",
  externalUrl: "/address_cleanse",
  description: "Match and cleanse an address string.",
  contentfulId: "3qu1TBA9CDvRLHu31HZX2l",
  credits: 5,
  fields: {
    string: {
      name: "string",
      placeholder: "e.g. 12 Map",
      description: "",
      type: "INPUT",
      defaultValue: "7348377",
      label: "UDPRN",
      required: true,
    },
  },
  example: {
    object: "autocomplete",
    url: "/autocomplete",
    string: "12 Map...",
    data: {
      addresses: [
        {
          address:
            "Westminster Gallery, Westminster Central Hall, Westminster, London",
          udprn: "NDg5YmQ5NzY5Zjk0YmI5IDUxMTQ3MTI1",
        },
      ],
    },
  },
};

export { addressCleanseConfig };
