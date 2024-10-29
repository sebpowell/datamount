import { Box } from "@/packages/components/ui/Box";
import { Loader } from "@/packages/components/ui/Loader";
import { client } from "@/packages/server/clients/api";
import { IPropertyResponseSchema } from "@/packages/server/modules/data/schemas/property.schema";
import { createContext } from "@/packages/utils/react/create-context";
import { ReactNode } from "react";

type PropertyContext = {
  property: IPropertyResponseSchema["data"];
};

const [PropertyProfileContext, usePropertyProfileContext] =
  createContext<PropertyContext>();

const PropertyProfileContextProvider = ({
  udprn,
  children,
}: {
  udprn: string;
  children: ReactNode;
}) => {
  const { data, isLoading, isError } = client.data.property.useQuery(
    [udprn],
    {
      query: {
        udprn,
      },
    },
    {
      enabled: !!udprn,
    },
  );

  if (isLoading) {
    return (
      <Box className="flex w-full flex-1 flex-col items-center justify-center">
        <Loader />
      </Box>
    );
  }

  if (isError) return <>Error</>;

  return (
    <PropertyProfileContext value={{ property: data.body.data }}>
      {children}
    </PropertyProfileContext>
  );
};

export {
  PropertyProfileContext,
  PropertyProfileContextProvider,
  usePropertyProfileContext,
};
