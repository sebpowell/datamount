import { LayoutSite } from "@/packages/apps/site/layouts/LayoutSite";
import { Button } from "@/packages/components/ui/Button";
import { Container } from "@/packages/components/ui/Container";
import { Heading } from "@/packages/components/ui/Heading";
import { Stack } from "@/packages/components/ui/Stack";
import { routes } from "@/packages/utils/routes";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
  },
};

export default function NotFound() {
  return (
    <LayoutSite>
      <Container className="py-24 text-center">
        <Stack spaceY={8}>
          <Heading as="h1">Page not found</Heading>
          <Button asChild variant="outline">
            <Link href={routes.getRoute("home")}>Back to home</Link>
          </Button>
        </Stack>
      </Container>
    </LayoutSite>
  );
}
