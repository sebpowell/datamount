"use client";

import { DataServiceEndpoints } from "@/packages/server/modules/database/schema/api-keys.schema";
import { ProductProperty } from "@/packages/apps/site/pages/website/Product/ProductProperty";
import { ReactElement } from "react";

const productPages: { [key in DataServiceEndpoints]: ReactElement } = {
  [DataServiceEndpoints.addressCleanse]: <ProductProperty />,
  [DataServiceEndpoints.addressMatch]: <ProductProperty />,
  [DataServiceEndpoints.areaLookup]: <ProductProperty />,
  [DataServiceEndpoints.areaProfile]: <ProductProperty />,
  [DataServiceEndpoints.autocomplete]: <ProductProperty />,
  [DataServiceEndpoints.postcodeLookup]: <ProductProperty />,
  [DataServiceEndpoints.property]: <ProductProperty />,
};

const ProductPage = ({ endpoint }: { endpoint: DataServiceEndpoints }) => {
  return productPages[endpoint];
};

export { ProductPage };
