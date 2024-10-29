import { Endpoint } from "@/packages/config/endpoints";
import { DataServiceNames } from "@/packages/server/modules/data/data.config";
import {
  AddressMatchRequest,
  AddressMatchResponse,
} from "@/packages/server/modules/data/schemas/adress-match.schema";

const addressMatchConfig: Endpoint<AddressMatchRequest, AddressMatchResponse> =
  {
    name: "Address Match",
    active: false,
    service: DataServiceNames.beta,
    url: "/addressmatch",
    slug: "address_match",
    color: "forest",
    externalUrl: "/address-match",
    description: "Find and validate addresses within a given postcode.",
    contentfulId: "uFFOUcsu8rgHxbr1P7jP5",
    credits: 5,
    fields: {
      address: {
        name: "address",
        type: "INPUT",
        description: "",
        placeholder: "e.g. BS25GH",
        defaultValue: "E201FJ",
        label: "Postcode",
        required: true,
      },
    },
    example: {
      result: [],
    },
  };

export { addressMatchConfig };
