import {
  FeatureCardContainer,
  FeatureCardTitle,
  FeatureCardValue,
} from "@/packages/components/ui/FeatureCard/FeatureCard";
import { usePropertyProfileContext } from "@/packages/apps/site/components/Property/components/Property.context";
import { createFeatureCards } from "@/packages/apps/site/components/Property/utils";
import { Column, LineGrid } from "@/packages/components/ui/Grid";

const PropertyRunningCosts = () => {
  const { property } = usePropertyProfileContext();

  return (
    <>
      <LineGrid>
        {createFeatureCards(
          [
            {
              key: "hot_water_cost_current",
              label: "Hot water",
              format: ({ value }) => `£${value} pm`,
            },
            {
              key: "heating_cost_current",
              label: "Heating",
              format: ({ value }) => `£${value} pm`,
            },
            {
              key: "lighting_cost_current",
              label: "Lighting",
              format: ({ value }) => `£${value} pm`,
            },
          ],
          property,
        ).map((item, i) => {
          return (
            <Column key={i} className="col-span-4">
              <FeatureCardContainer className="bg-background-primary">
                <FeatureCardTitle>{item.title}</FeatureCardTitle>
                <FeatureCardValue value={item.value} />
              </FeatureCardContainer>
            </Column>
          );
        })}
      </LineGrid>
    </>
  );
};

export { PropertyRunningCosts };
