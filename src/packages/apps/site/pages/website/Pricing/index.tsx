import { DataServiceEndpoints } from "@/packages/server/modules/database/schema/api-keys.schema";
import { PageTitle } from "@/packages/apps/site/components/PageHeader";
import { Box } from "@/packages/components/ui/Box";
import { Button } from "@/packages/components/ui/Button";
import { endpoints } from "@/packages/config/endpoints";
import { Container } from "@/packages/components/ui/Container";
import { Link } from "@/packages/components/ui/Link";
import NextLink from "next/link";
import {
  PageSection,
  PageSectionBody,
  PageSectionDivider,
  PageSectionHeader,
  PageSectionTitle,
} from "@/packages/components/ui/PageSection";
import { Text } from "@/packages/components/ui/Text";
import { Paragraph } from "@/packages/components/ui/Paragraph";
import { Badge } from "@/packages/components/ui/Badge";
import { Column, Grid } from "@/packages/components/ui/Grid";
import { Masthead } from "@/packages/components/ui/Masthead";
import { HomepageFAQs } from "@/packages/apps/site/pages/website/Home/HomeFAQs";
import { formatPrice } from "@/packages/utils/format-price";
import { routes } from "@/packages/utils/routes";
import { Entry } from "contentful";
import { TypeFaqSkeleton } from "@/packages/interfaces";
import { pricingConfig } from "@/packages/config/pricing.config";

const calculateValues = ({
  spendCents,
  bonusPercentage,
}: {
  spendCents: number;
  bonusPercentage: number;
}) => {
  const bonus = spendCents * (bonusPercentage / 100);

  const total = spendCents + bonus;

  const creditPrice = (spendCents / total).toPrecision(2);

  return {
    creditPrice,
    bonus,
    total,
  };
};

const PricingCreditAmounts = () => {
  return (
    <Box className="divide-y">
      {pricingConfig.packs.map((pack, i) => {
        const { total, bonus, creditPrice } = calculateValues({
          spendCents: pack.spendCents,
          bonusPercentage: pack.bonusPercentage,
        });

        return (
          <Box className="py-5" key={i}>
            <Text className="text-xl font-medium">
              £{formatPrice(pack.spendCents / 100)}
            </Text>

            <Box className="flex items-center gap-2">
              {formatPrice(total)} credits ({creditPrice}p per credit)
              {bonus > 0 && <Badge>{formatPrice(bonus)} bonus credits</Badge>}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export const PricingCard = () => {
  return (
    <Grid>
      <Column className="col-span-12 lg:col-span-6">
        <Box className="flex-1 space-y-4">
          <Paragraph className="max-w-sm text-2xl">
            Simple, credit-based pricing. No subscription, pay only for what you
            use.
          </Paragraph>
          <Button size="lg" asChild>
            <NextLink href={routes.getRoute("auth_register")}>
              Get started for free
            </NextLink>
          </Button>
          <Text>
            For volume discounts, please <Link variant="solid">contact us</Link>
            .
          </Text>
        </Box>
      </Column>
      <Column className="col-span-12 lg:col-span-6">
        <PricingCreditAmounts />
      </Column>
    </Grid>
  );
};

const PricingFeeBreakdown = () => {
  return (
    <PageSection>
      <PageSectionDivider />
      <Grid>
        <Column className="col-span-12 lg:col-span-6">
          <PageSectionHeader>
            <PageSectionTitle>Fee breakdown</PageSectionTitle>
          </PageSectionHeader>
        </Column>
        <Column className="col-span-12 lg:col-span-6">
          <PageSectionBody>
            <Box className="divide-y">
              {Object.keys(endpoints).map((key, i) => {
                const endpoint = endpoints[key as DataServiceEndpoints];

                return (
                  <Box className="flex items-center py-5" key={i}>
                    <Box className="space-y-2">
                      <Box className="text-xl font-medium leading-none">
                        {endpoint.name}
                      </Box>
                      <Paragraph className="text-text-secondary">
                        {endpoint.description}
                      </Paragraph>
                    </Box>
                    <Box className="ml-auto space-y-2 text-right">
                      <Box className="text-xl font-medium leading-none">
                        {endpoint.credits}{" "}
                        {endpoint.credits > 1 ? "credits" : "credit"}
                      </Box>
                      <Box className="leading-none text-text-tertiary">
                        per lookup
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </PageSectionBody>
        </Column>
      </Grid>
    </PageSection>
  );
};

const PricingPage = ({
  faqs,
}: {
  faqs: Entry<TypeFaqSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">[];
}) => {
  return (
    <>
      <Masthead>
        <Container>
          <PageTitle>Pricing</PageTitle>
        </Container>
      </Masthead>
      <Container>
        <Box className="space-y-12 py-12">
          <PageSection>
            <PricingCard />
          </PageSection>
          <PricingFeeBreakdown />
          <HomepageFAQs faqs={faqs} />
        </Box>
      </Container>
    </>
  );
};

export { PricingPage, PricingFeeBreakdown };
