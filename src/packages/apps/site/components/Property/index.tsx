"use client";
import { PropertyProfileContextProvider } from "./components/Property.context";
import { PublicPropertySoldHistory } from "@/packages/apps/site/components/Property/components/PropertySoldHistory";
import { PublicPropertyEPC } from "@/packages/apps/site/components/Property/components/PropertyEPC";
import { Box } from "@/packages/components/ui/Box";
import { PublicPropertyMasthead } from "@/packages/apps/site/components/Property/components/PublicPropertyMasthead";
import { Divider } from "@/packages/components/ui/Divider";
import { PropertyRunningCosts } from "@/packages/apps/site/components/Property/components/PropertyRunningCosts";
import {
  PageSection,
  PageSectionBody,
  PageSectionHeader,
  PageSectionTitle,
} from "@/packages/components/ui/PageSection";
import { PropertyAddress } from "@/packages/apps/site/components/Property/components/PropertyAddress";
import { EntitySectionProps } from "@/packages/apps/explorer/components/Entity";
import { PropertyValuation } from "@/packages/apps/site/components/Property/components/PropertyValuation";
import { PropertyKeyFeatures } from "@/packages/apps/site/components/Property/components/PropertyKeyFeatures";
import { PropertySoldNearby } from "@/packages/apps/site/components/Property/components/PropertySoldNearby";

const propertySections: EntitySectionProps[] = [
  {
    component: <PropertyAddress />,
  },
  {
    title: "Estimated valuation",
    component: <PropertyValuation />,
  },
  {
    title: "Running costs",
    component: <PropertyRunningCosts />,
  },
  {
    title: "Key features",
    component: <PropertyKeyFeatures />,
  },
  {
    title: "Sold history",
    component: <PublicPropertySoldHistory />,
  },
  {
    title: "Sold nearby",
    component: <PropertySoldNearby />,
  },
  {
    title: "Energy performance",
    component: <PublicPropertyEPC />,
  },
];

const Property = ({ udprn }: { udprn: string }) => {
  return (
    <Box className="flex min-w-[600px] flex-1 flex-col overflow-scroll">
      <PropertyProfileContextProvider udprn={udprn}>
        <Box className="mx-auto w-full max-w-5xl space-y-8 p-8">
          <PublicPropertyMasthead />
          <Box className="space-y-12">
            {propertySections.map(({ title, component }, i) => {
              return (
                <>
                  <PageSection key={i}>
                    {title && (
                      <PageSectionHeader>
                        <PageSectionTitle size="h3">{title}</PageSectionTitle>
                      </PageSectionHeader>
                    )}
                    <PageSectionBody>{component}</PageSectionBody>
                  </PageSection>
                  <Divider />
                </>
              );
            })}
          </Box>
        </Box>
      </PropertyProfileContextProvider>
    </Box>
  );
};

export { Property, propertySections };
