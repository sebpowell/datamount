import { usePropertyProfileContext } from "./Property.context";
import { formatPrice } from "@/packages/utils/format-price";
import {
  FeatureCard,
  FeatureCardContainer,
  FeatureCardTitle,
  FeatureCardValue,
} from "@/packages/components/ui/FeatureCard/FeatureCard";
import { Column, Grid, LineGrid } from "@/packages/components/ui/Grid";
import { toPrice } from "@/packages/utils/to-price";

export const PropertyValuation = () => {
  const { property } = usePropertyProfileContext();

  return (
    <LineGrid>
      <Column className="col-span-12 lg:col-span-6">
        <FeatureCardContainer className="bg-white">
          <FeatureCardTitle>Sales</FeatureCardTitle>
          <FeatureCardValue
            value={
              <>
                £{formatPrice(property?.valuation_lower)} – £
                {formatPrice(property?.valuation_upper)}
              </>
            }
          />
        </FeatureCardContainer>
      </Column>
      <Column className="col-span-12 lg:col-span-6">
        <FeatureCardContainer className="bg-white">
          <FeatureCardTitle>Lettings</FeatureCardTitle>
          <FeatureCardValue
            value={
              <>
                {toPrice(property?.lettings_lower)} –{" "}
                {toPrice(property?.lettings_upper)}pm
              </>
            }
          />
        </FeatureCardContainer>
      </Column>
    </LineGrid>
  );
};
