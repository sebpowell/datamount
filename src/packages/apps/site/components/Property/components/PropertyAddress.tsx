import {
  FeatureCardContainer,
  FeatureCardTitle,
  FeatureCardValue,
} from "@/packages/components/ui/FeatureCard/FeatureCard";
import { usePropertyProfileContext } from "@/packages/apps/site/components/Property/components/Property.context";
import { createFeatureCards } from "@/packages/apps/site/components/Property/utils";
import { Box } from "@/packages/components/ui/Box";
import { Heading } from "@/packages/components/ui/Heading";
import { Text } from "@/packages/components/ui/Text";
import { IPropertyResponseSchema } from "@/packages/server/modules/data/schemas/property.schema";
import { formatAddress } from "@/packages/utils/format-address";
import { toTitleCase } from "@/packages/utils/to-title-case";
import { LineGrid } from "@/packages/components/ui/Grid";

const separateWithCommas = (values: (string | null)[]) => {
  return values.filter((value) => value !== null).join(", ");
};

export const PropertyAddress = () => {
  const { property } = usePropertyProfileContext();

  const propertyDetails = createFeatureCards<IPropertyResponseSchema["data"]>(
    [
      { key: "beds", label: "Beds", format: (value) => value.value },
      {
        key: "tenure",
        label: "Tenure",
        format: (value) => toTitleCase(value.value),
      },
      {
        key: "property_type",
        label: "Type",
        format: (value) => toTitleCase(value.value),
      },
      {
        key: "total_floor_area",
        label: "Floor area",
        format: (value) => value.value,
      },
    ],
    property,
  );

  return (
    <Box className="space-y-6">
      <Box className="space-y-1.5">
        <Heading as="h1" size="h3">
          {separateWithCommas([
            property.address_line_1,
            property.address_line_2,
            property.address_line_3,
          ])}
        </Heading>
        <Text className="text-lg leading-none text-text-tertiary">
          {formatAddress(property)}
        </Text>
      </Box>
      <LineGrid>
        {propertyDetails.map((detail, i) => {
          return (
            <FeatureCardContainer
              key={i}
              className="col-span-6 bg-background-primary"
            >
              <FeatureCardTitle>{detail.title}</FeatureCardTitle>
              <FeatureCardValue value={detail.value} />
            </FeatureCardContainer>
          );
        })}
      </LineGrid>
    </Box>
  );
};
