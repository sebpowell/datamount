"use client";
import { AmenitiesSchools } from "@/packages/apps/site/components/Area/components/Amenities/AmenitiesSchools";
import { AmenitiesStations } from "@/packages/apps/site/components/Area/components/Amenities/AmenitiesStations";
import { DemographicsAge } from "@/packages/apps/site/components/Area/components/Demographics/DemographicsAge";
import { DemographicsMaritalStatus } from "@/packages/apps/site/components/Area/components/Demographics/DemographicsMaritalStatus";
import { DemographicsSocialGrade } from "@/packages/apps/site/components/Area/components/Demographics/DemographicsSocialGrade";
import { AreaDetails } from "@/packages/apps/site/components/Area/components/Details";
import { EnvironmentalFloodRisks } from "@/packages/apps/site/components/Area/components/Environmental";
import { AreaAveragePrices } from "@/packages/apps/site/components/Area/components/Property/PropertyAveragePrices";
import { PropertyBedrooms } from "@/packages/apps/site/components/Area/components/Property/PropertyBedrooms";
import { PropertyTenure } from "@/packages/apps/site/components/Area/components/Property/PropertyTenure";
import { PropertyValuations } from "@/packages/apps/site/components/Area/components/Property/PropertyValuations";
import {
  EntityContextProvider,
  EntitySectionProps,
} from "@/packages/apps/explorer/components/Entity";
import { Box } from "@/packages/components/ui/Box";
import { Divider } from "@/packages/components/ui/Divider";
import {
  PageSection,
  PageSectionBody,
  PageSectionHeader,
  PageSectionTitle,
} from "@/packages/components/ui/PageSection";
import { client } from "@/packages/server/clients/api";
import { AreaProfileResponse } from "@/packages/server/modules/data/schemas/area-profile.schema";

const areaSections: EntitySectionProps[] = [
  {
    title: "Demographics",
    children: [
      {
        title: "Age",
        component: <DemographicsAge />,
      },
      {
        title: "Marital status",
        component: <DemographicsMaritalStatus />,
      },
      {
        title: "Social grade",
        component: <DemographicsSocialGrade />,
      },
    ],
  },
  {
    title: "Property",
    children: [
      {
        title: "Bedrooms",
        component: <PropertyBedrooms />,
      },
      {
        title: "Tenure",
        component: <PropertyTenure />,
      },
      {
        title: "Tenure",
        component: <PropertyValuations />,
      },
      {
        title: "Recently sold",
        component: <AreaAveragePrices />,
      },
    ],
  },
  {
    title: "Amenities",
    children: [
      {
        title: "Schools",
        component: <AmenitiesSchools />,
      },
      {
        title: "Schools",
        component: <AmenitiesStations />,
      },
    ],
  },
  {
    title: "Environmental",
    children: [
      {
        title: "flood risks",
        component: <EnvironmentalFloodRisks />,
      },
    ],
  },
];

const Area = ({ id }: { id: string }) => {
  return (
    <EntityContextProvider<AreaProfileResponse["data"]>
      fetch={() => {
        const { data, isLoading } = client.data.areaProfile.useQuery(
          [id],
          {
            query: {
              id,
            },
          },
          {
            enabled: !!id,
          },
        );

        return { data: data?.body.data || null, isLoading };
      }}
    >
      <Box className="mx-auto w-full max-w-4xl space-y-12 py-12">
        <AreaDetails />
        <Divider />
        {areaSections.map((section, i) => {
          return (
            <>
              <PageSection key={i}>
                <PageSectionHeader>
                  <PageSectionTitle size="h2">{section.title}</PageSectionTitle>
                </PageSectionHeader>
                <PageSectionBody>
                  <Box className="space-y-10">
                    {section.children &&
                      section.children.map((section, i) => {
                        return (
                          <PageSection key={i}>
                            <PageSectionHeader>
                              <PageSectionTitle size="h3">
                                {section.title}
                              </PageSectionTitle>
                            </PageSectionHeader>
                            <PageSectionBody>
                              {section.component}
                            </PageSectionBody>
                          </PageSection>
                        );
                      })}
                  </Box>
                </PageSectionBody>
              </PageSection>
              <Divider />
            </>
          );
        })}
      </Box>
    </EntityContextProvider>
  );
};

export { Area };
