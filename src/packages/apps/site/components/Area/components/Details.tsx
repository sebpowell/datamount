import { useAreaContext } from "@/packages/apps/site/components/Area/config";
import { createFeatureCards } from "@/packages/apps/site/components/Property/utils";
import { Box } from "@/packages/components/ui/Box";
import {
  FeatureCardTitle,
  FeatureCardValue,
} from "@/packages/components/ui/FeatureCard/FeatureCard";
import { LineGrid } from "@/packages/components/ui/Grid";
import { Heading } from "@/packages/components/ui/Heading";

const AreaDetails = () => {
  // const {
  //   entity: {
  //     data: { location },
  //   },
  // } = useAreaContext();

  // const cards = createFeatureCards(
  //   [
  //     {
  //       key: "county",
  //       label: "County",
  //       format: (value) => value.value,
  //     },
  //     {
  //       key: "district",
  //       label: "County",
  //       format: (value) => value.value,
  //     },
  //     {
  //       key: "latitude",
  //       label: "County",
  //       format: (value) => value.value,
  //     },
  //     {
  //       key: "match_type",
  //       label: "County",
  //       format: (value) => value.value,
  //     },
  //     {
  //       key: "outcode",
  //       label: "County",
  //       format: (value) => value.value,
  //     },
  //     {
  //       key: "place",
  //       label: "County",
  //       format: (value) => value.value,
  //     },
  //     {
  //       key: "region",
  //       label: "County",
  //       format: (value) => value.value,
  //     },
  //     {
  //       key: "sector",
  //       label: "County",
  //       format: (value) => value.value,
  //     },
  //   ],
  //   location,
  // );

  return (
    <Box className="space-y-8">
      <Heading as="h1" size="h1">
        {/* {location.district} */}
      </Heading>
      <LineGrid>
        {/* {cards.map((feature) => {
          return (
            <Box className="col-span-4 bg-white p-4" key={1}>
              <FeatureCardTitle>{feature.title}</FeatureCardTitle>
              <FeatureCardValue value={feature.value} />
            </Box>
          );
        })} */}
      </LineGrid>
    </Box>
  );
};

export { AreaDetails };
