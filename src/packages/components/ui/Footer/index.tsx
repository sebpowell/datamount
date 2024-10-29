import { Box } from "@/packages/components/ui/Box";
import { Button } from "@/packages/components/ui/Button";
import { Container } from "@/packages/components/ui/Container";
import { Divider } from "@/packages/components/ui/Divider";
import { FooterImpressum } from "@/packages/components/ui/Footer/FooterImpressum";
import { FooterTop } from "@/packages/components/ui/Footer/FooterTop";
import { Heading } from "@/packages/components/ui/Heading";
import { Link } from "@/packages/components/ui/Link";
import { Paragraph } from "@/packages/components/ui/Paragraph";
import { pricingConfig } from "@/packages/config/pricing.config";
import { routes } from "@/packages/utils/routes";
import NextLink from "next/link";

export const Footer = () => {
  return (
    <Box as="footer" className="bg-forest-50 ">
      <Container>
        <Box className="flex flex-col items-start gap-4 py-12 lg:flex-row lg:items-center">
          <Box className="space-y-1.5">
            <Heading as="h3" size="h3">
              Try all products, free
            </Heading>

            <Paragraph className="text-lg">
              {pricingConfig.freeTrialCredits} free credits when you sign up.
              See pricing{" "}
              <Link asChild variant="solid">
                <NextLink href={routes.getRoute("pricing")}>here</NextLink>
              </Link>
              .
            </Paragraph>
          </Box>
          <Button size="lg" className="lg:ml-auto" asChild>
            <NextLink href={routes.getRoute("auth_register")}>
              Get started
            </NextLink>
          </Button>
        </Box>
        <Divider />
        <Box>
          <FooterTop />
          <Divider />
          <FooterImpressum />
        </Box>
      </Container>
    </Box>
  );
};
