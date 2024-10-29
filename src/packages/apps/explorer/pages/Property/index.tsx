"use client";
import { Property } from "@/packages/apps/site/components/Property";
import { Box } from "@/packages/components/ui/Box";
import { createContext } from "@/packages/utils/react/create-context";
import { uniq } from "lodash";
import { useEffect, useState } from "react";

const [PropertyPageContext, usePropertyPage] = createContext<{
  properties: string[];
  setProperties(values: string[]): void;
}>();

const getUdprnsFromPath = (currentPath: string, udprn?: string) => {
  const decodedUdprn = decodeURIComponent(currentPath);

  const array = [...decodedUdprn.split(","), ...(udprn ? [udprn] : [])];

  const uniqueArray = uniq(array);

  return {
    udprns: uniqueArray,
  };
};

const PageProperty = ({ udprn }: { udprn: string }) => {
  const [properties, setProperties] = useState<string[]>([]);

  useEffect(() => {
    const { udprns } = getUdprnsFromPath(udprn);

    setProperties(udprns);
  }, [udprn]);

  return (
    <PropertyPageContext value={{ properties, setProperties }}>
      <Box className="flex flex-1 flex-row divide-x divide-border-primary overflow-y-hidden overflow-x-scroll">
        {properties.map((property, i) => {
          return <Property udprn={property} key={i} />;
        })}
      </Box>
    </PropertyPageContext>
  );
};

export {
  PageProperty,
  PropertyPageContext,
  usePropertyPage,
  getUdprnsFromPath,
};
