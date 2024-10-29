import { Box } from "@/packages/components/ui/Box";
import { PageSectionTitle } from "@/packages/components/ui/PageSection";
import { Link } from "@/packages/components/ui/Link";
import { routes } from "@/packages/utils/routes";
import NextLink from "next/link";
import { Button } from "@/packages/components/ui/Button";
import { Paragraph } from "@/packages/components/ui/Paragraph";

const HomeCta = () => {
  return (
    <Box className="flex items-center">
      <Box className="space-y-3">
        <PageSectionTitle size="h3">Try us out, free</PageSectionTitle>

        <Paragraph className="text-lg">
          100 free credits when you sign up. See pricing{" "}
          <Link asChild variant="solid">
            <NextLink href={routes.getRoute("pricing")}>here</NextLink>
          </Link>
          .
        </Paragraph>
      </Box>

      <Box className="ml-auto">
        <Button size="lg">Get started</Button>
      </Box>
    </Box>
  );
};

export { HomeCta };
