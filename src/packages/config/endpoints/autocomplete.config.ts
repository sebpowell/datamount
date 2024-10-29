import { Endpoint } from "@/packages/config/endpoints";
import { DataServiceNames } from "@/packages/server/modules/data/data.config";
import {
  IAutoCompleteRequestSchema,
  IAutoCompleteResponseSchema,
} from "@/packages/server/modules/data/schemas/autocomplete.schema";

const autocompleteConfig: Endpoint<
  IAutoCompleteRequestSchema,
  IAutoCompleteResponseSchema
> = {
  name: "Address Autocomplete",
  active: false,
  service: DataServiceNames.alpha,
  url: "/autocomplete",
  slug: "autocomplete",
  color: "orange",
  externalUrl: "/autocomplete",
  description: "Search, validate, cleans and autocomplete addresses.",
  contentfulId: "1UTxrtoVMFIELkgHTlxwHb",
  credits: 5,
  fields: {
    string: {
      name: "string",
      placeholder: "e.g. 12 Map",
      description: "",
      type: "INPUT",
      defaultValue: "12 Map",
      label: "String",
      required: true,
    },
  },
  example: {
    object: "autocomplete",
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

export { autocompleteConfig };
