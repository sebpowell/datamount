import { Column, LineGrid } from "@/packages/components/ui/Grid";
import { createFeatureCards } from "@/packages/apps/site/components/Property/utils";
import { usePropertyProfileContext } from "@/packages/apps/site/components/Property/components/Property.context";
import { toTitleCase } from "@/packages/utils/to-title-case";
import {
  FeatureCardContainer,
  FeatureCardTitle,
  FeatureCardValue,
} from "@/packages/components/ui/FeatureCard/FeatureCard";

export const PropertyKeyFeatures = () => {
  const { property } = usePropertyProfileContext();

  return (
    <LineGrid>
      {createFeatureCards(
        [
          {
            key: "extension_count",
            label: "Extensions",
            format: ({ value }) => value,
          },
          {
            key: "windows_description",
            label: "Windows",
            format: ({ value }) => toTitleCase(value),
          },
          {
            key: "construction_age_band",
            label: "Construction age band",
            format: ({ value }) => toTitleCase(value),
          },
          {
            key: "number_habitable_rooms",
            label: "Habitable rooms",
            format: ({ value }) => value,
          },
        ],
        property,
      ).map((feature, i) => {
        return (
          <Column className="col-span-6" key={i}>
            <FeatureCardContainer className="bg-background-primary">
              <FeatureCardTitle>{feature.title}</FeatureCardTitle>
              <FeatureCardValue value={feature.value} />
            </FeatureCardContainer>
          </Column>
        );
      })}
    </LineGrid>
  );
};
