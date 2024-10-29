import { CTAButtons } from "@/packages/apps/site/components/CtaButtons";
import { Box } from "@/packages/components/ui/Box";
import { Container } from "@/packages/components/ui/Container";
import { Column, Grid } from "@/packages/components/ui/Grid";
import { Masthead, MastheadTitle } from "@/packages/components/ui/Masthead";

const HomeMasthead = () => {
  return (
    <Masthead className="min-h-[75vh]">
      <Container className="flex">
        <Grid>
          <Column className="col-span-12 flex flex-col lg:col-span-6">
            <Box className="mt-auto space-y-5 lg:max-w-lg">
              <MastheadTitle>
                Your ultimate solution for property data in the UK
              </MastheadTitle>
              <CTAButtons />
            </Box>
          </Column>
          <Column className="col-span-6 flex flex-col items-center overflow-hidden"></Column>
        </Grid>
      </Container>
    </Masthead>
  );
};

export { HomeMasthead };
