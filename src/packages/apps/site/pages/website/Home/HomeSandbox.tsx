import { Box } from "@/packages/components/ui/Box";
import { Button } from "@/packages/components/ui/Button";
import { CodeSandbox } from "@/packages/components/ui/CodeSandbox";
import { Column, Grid } from "@/packages/components/ui/Grid";
import {
  PageSection,
  PageSectionDivider,
  PageSectionTitle,
} from "@/packages/components/ui/PageSection";
import { routes } from "@/packages/utils/routes";
import Link from "next/link";

const HomeSandbox = () => {
  return (
    <PageSection>
      <PageSectionDivider />
      <Grid>
        <Column className="col-span-12 space-y-8 lg:col-span-6">
          <Box className="max-w-lg space-y-12">
            <Box className="space-y-4">
              <PageSectionTitle>
                All your UK property API needs, in one place
              </PageSectionTitle>
            </Box>
            <Button size="lg" variant="outline" asChild>
              <Link href={routes.getRoute("sandbox")}>Try it out</Link>
            </Button>
          </Box>
        </Column>

        <Column className="col-span-12 lg:col-span-6">
          <Box className="flex h-[600px] overflow-hidden border border-black bg-white">
            <CodeSandbox />
          </Box>
        </Column>
      </Grid>
    </PageSection>
  );
};

export { HomeSandbox };
