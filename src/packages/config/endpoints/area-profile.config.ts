import { Endpoint } from "@/packages/config/endpoints";
import { DataServiceNames } from "@/packages/server/modules/data/data.config";
import {
  AreaProfileRequest,
  AreaProfileResponse,
} from "@/packages/server/modules/data/schemas/area-profile.schema";

const areaProfileConfig: Endpoint<AreaProfileRequest, AreaProfileResponse> = {
  name: "Area",
  active: false,
  service: DataServiceNames.alpha,
  url: "/areas/:id",
  slug: "area",
  color: "amber",
  externalUrl: "/area",
  description: "Find and validate addresses within a given postcode.",
  contentfulId: "uFFOUcsu8rgHxbr1P7jP5",
  credits: 5,
  fields: {
    id: {
      name: "id",
      type: "INPUT",
      description: "",
      placeholder: "e.g. BS25GH",
      defaultValue: "E201FJ",
      label: "Postcode",
      required: true,
    },
  },
  example: {
    object: "",
    // @ts-ignore
    data: {},
  },
};

export { areaProfileConfig };
