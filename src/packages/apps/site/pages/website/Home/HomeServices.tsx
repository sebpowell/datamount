import { DataServiceEndpoints } from "@/packages/server/modules/database/schema/api-keys.schema";
import { HomeSectionIds } from "@/packages/apps/site/pages/website/Home";
import { Button } from "@/packages/components/ui/Button";
import { endpoints } from "@/packages/config/endpoints";
import { Heading } from "@/packages/components/ui/Heading";
import {
  PageSection,
  PageSectionBody,
  PageSectionHeader,
  PageSectionTitle,
} from "@/packages/components/ui/PageSection";
import { Paragraph } from "@/packages/components/ui/Paragraph";
import { TypeProductSkeleton } from "@/packages/interfaces";
import { routes } from "@/packages/utils/routes";
import { Entry } from "contentful";
import Link from "next/link";
import { Box } from "@/packages/components/ui/Box";

const HomeServices = ({
  products,
}: {
  products: Entry<TypeProductSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">[];
}) => {
  return (
    <PageSection id={HomeSectionIds.services}>
      <PageSectionHeader>
        <PageSectionTitle>Products</PageSectionTitle>
      </PageSectionHeader>
      <PageSectionBody>
        <>
          {Object.keys(endpoints).map((key, i) => {
            const service = endpoints[key as DataServiceEndpoints];

            return (
              <Box
                className="flex items-center border-b  border-border-primary py-5 first-of-type:border-t last-of-type:border-b-0 hover:bg-background-secondary"
                key={i}
              >
                <Box className="flex-1 space-y-1">
                  <Heading as="h3" size="h3">
                    {service.name}
                  </Heading>

                  <Paragraph className="text-text-tertiary">
                    {service.description}
                  </Paragraph>
                </Box>

                <>
                  {!service.active ? (
                    <Button variant="outline" disabled={true}>
                      Coming soon
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline" asChild>
                        <Link
                          href={routes.getRoute("product_single", {
                            ":slug": service.slug,
                          })}
                        >
                          Learn more
                        </Link>
                      </Button>
                    </>
                  )}
                </>
              </Box>
            );
          })}
        </>
      </PageSectionBody>
    </PageSection>
  );
};

export { HomeServices };
