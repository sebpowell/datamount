import { DataServiceEndpoints } from "@/packages/server/modules/database/schema/api-keys.schema";
import { Article } from "@/packages/apps/docs/components/Article";
import { GetStarted } from "@/packages/apps/docs/components/GetStarted";
import { Box } from "@/packages/components/ui/Box";
import { ReactElement } from "react";

export type INavigationLink = {
  title: string;
  path: string;
  page: ReactElement;
  endpoint?: DataServiceEndpoints;
  links?: INavigationLink[];
};

export const links: INavigationLink[] = [
  {
    title: "Introduction",
    path: "introduction",
    page: <Box></Box>,
    links: [
      {
        title: "Get started",
        path: "get-started",
        page: <GetStarted />,
      },
    ],
  },
  {
    title: "Endpoints",
    path: "endpoints",
    page: <Box></Box>,
    links: [
      {
        title: "Autocomplete",
        path: "autocomplete",
        page: <Article endpoint={DataServiceEndpoints.autocomplete} />,
      },
      {
        title: "Address cleanse",
        path: "address_cleanse",
        page: <Article endpoint={DataServiceEndpoints.addressCleanse} />,
      },
      {
        title: "Postcode lookup",
        path: "postcode_lookup",
        page: <Article endpoint={DataServiceEndpoints.postcodeLookup} />,
      },
      {
        title: "Property",
        path: "property",
        page: <Article endpoint={DataServiceEndpoints.property} />,
      },
    ],
  },
];
