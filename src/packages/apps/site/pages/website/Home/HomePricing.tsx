import {
  PricingCard,
  PricingFeeBreakdown,
} from "@/packages/apps/site/pages/website/Pricing";
import {
  PageSection,
  PageSectionDivider,
  PageSectionHeader,
  PageSectionTitle,
} from "@/packages/components/ui/PageSection";

const HomePricing = () => {
  return (
    <PageSection>
      <PageSectionDivider />
      <PageSectionHeader>
        <PageSectionTitle>Pricing</PageSectionTitle>
      </PageSectionHeader>
      <PricingCard />
      <PageSectionDivider />
      <PricingFeeBreakdown />
    </PageSection>
  );
};

export { HomePricing };
