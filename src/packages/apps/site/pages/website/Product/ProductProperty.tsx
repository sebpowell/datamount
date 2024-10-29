import { CTAButtons } from "@/packages/apps/site/components/CtaButtons";
import { AddressAutocomplete } from "@/packages/apps/site/components/Widgets/AddressAutocomplete";
import { ProductBase } from "@/packages/apps/site/pages/website/Product/ProductBase";
import { Box } from "@/packages/components/ui/Box";
import { Container } from "@/packages/components/ui/Container";
import { Column, Grid } from "@/packages/components/ui/Grid";
import { Masthead, MastheadTitle } from "@/packages/components/ui/Masthead";
import { routes } from "@/packages/utils/routes";
import { useRouter } from "next/navigation";

const ProductProperty = () => {
  const router = useRouter();

  return (
    <ProductBase>
      <Masthead>
        <Container className="flex">
          <Grid>
            <Column className="col-span-6">
              <Box className="mx-auto max-w-2xl space-y-5">
                <MastheadTitle>
                  Everything you want to know about any UK property, in one
                  place
                </MastheadTitle>
                <AddressAutocomplete
                  onSelectValue={(props) => {
                    router.push(
                      routes.getRoute("property", {
                        ":udprn": props.udprn,
                      }),
                    );
                  }}
                />

                <CTAButtons />
              </Box>
            </Column>
          </Grid>
        </Container>
      </Masthead>
    </ProductBase>
  );
};

export { ProductProperty };
