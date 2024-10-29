import { DataServiceEndpoints } from "@/packages/server/modules/database/schema/api-keys.schema";
import { Box } from "@/packages/components/ui/Box";
import { FooterColumn } from "@/packages/components/ui/Footer/FooterColumn";
import { FooterHeading } from "@/packages/components/ui/Footer/FooterHeading";
import { Grid } from "@/packages/components/ui/Grid";
import { Link } from "@/packages/components/ui/Link";
import { Logo } from "@/packages/components/ui/Logo";
import { Paragraph } from "@/packages/components/ui/Paragraph";
import { endpoints } from "@/packages/config/endpoints";
import { SiteConfig } from "@/packages/config/global.config";
import { routes } from "@/packages/utils/routes";
import NextLink from "next/link";

const FooterTop = () => {
  return (
    <Box className="flex pb-32 pt-16">
      <Grid gap={8}>
        <FooterColumn>
          <Logo />
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Products</FooterHeading>
          <Box className="flex flex-col items-start gap-3">
            {Object.keys(endpoints).map((key, i) => {
              const endpoint = endpoints[key as DataServiceEndpoints];

              return (
                <Box
                  className="relative flex text-xl transition-colors before:absolute before:bottom-[0px] before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
                  key={i}
                  asChild
                >
                  <NextLink
                    href={routes.getRoute("product_single", {
                      ":slug": endpoint.slug,
                    })}
                  >
                    {endpoint.name}
                  </NextLink>
                </Box>
              );
            })}
          </Box>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Contact us</FooterHeading>
          <Paragraph className="max-w-lg text-xl">
            For any questions, including scheduling in demos, please email{" "}
            <Link variant="solid">{SiteConfig.cs_email}</Link>
          </Paragraph>
        </FooterColumn>
      </Grid>
    </Box>
  );
};

export { FooterTop };
