import { usePropertyProfileContext } from "@/packages/apps/site/components/Property/components/Property.context";
import { Box } from "@/packages/components/ui/Box";
import { toPrice } from "@/packages/utils/to-price";
import { toDate } from "@/packages/utils/to-date";
import { SoldNearby } from "@/packages/server/modules/data/schemas/property.schema";
import { Button } from "@/packages/components/ui/Button";
import { client } from "@/packages/server/clients/api";
import { useState } from "react";
import { DotSeparator } from "@/packages/components/ui/DotSeparator";
import { Badge } from "@/packages/components/ui/Badge";
import { toTitleCase } from "@/packages/utils/to-title-case";
import { useParams, useRouter } from "next/navigation";
import { routes } from "@/packages/utils/routes";
import { getUdprnsFromPath } from "@/packages/apps/explorer/pages/Property";

const SoldNearbyItem = ({ property }: { property: SoldNearby }) => {
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const params = useParams();

  const handleClick = async () => {
    const { query } = client.data.addressMatch;

    setLoading(true);

    try {
      const { body, status } = await query({
        query: { address: property.address },
      });

      if (status === 200) {
        const { udprns } = getUdprnsFromPath(
          params?.udprn as string,
          body.result[0].udprn,
        );

        router.push(
          routes.getRoute("property", {
            ":udprn": udprns.join(","),
          }),
        );
      }

      return body;
    } catch (e) {
      console.log(e);

      setLoading(false);
    }
  };

  return (
    <Box className="flex items-center bg-white py-4">
      <Box className="space-y-1">
        <Box className="flex items-center space-x-2">
          <Box className="font-semibold">{property.short_address}</Box>
          <Badge>{toTitleCase(property.type)}</Badge>
        </Box>
        <Box className="flex items-center gap-2 leading-none text-text-tertiary">
          <Box>{toPrice(property.last_sold_amount)}</Box>
          <DotSeparator />
          <Box>{toDate(property.last_sold_date)}</Box>
          <DotSeparator />
          <Box>{property.total_floor_area}sqm</Box>
        </Box>
      </Box>
      <Box className="ml-auto">
        <Button
          onClick={handleClick}
          variant="outline"
          size="sm"
          isLoading={isLoading}
        >
          View profile
        </Button>
      </Box>
    </Box>
  );
};

const PropertySoldNearby = () => {
  const {
    property: { sold_nearby },
  } = usePropertyProfileContext();

  return (
    <Box className="divide-y">
      {sold_nearby.map((property, i) => {
        return <SoldNearbyItem property={property} key={i} />;
      })}
    </Box>
  );
};

export { PropertySoldNearby };
