import { Button } from "@/packages/components/ui/Button";
import { Stack } from "@/packages/components/ui/Stack";
import { routes } from "@/packages/utils/routes";
import NextLink from "next/link";

export const CTAButtons = () => {
  return (
    <Stack spaceX={4} className="flex lg:inline-flex">
      <Button size="lg" asChild className="w-full lg:w-auto">
        <NextLink href={routes.getRoute("auth_register")}>Get started</NextLink>
      </Button>
      <Button size="lg" asChild className="w-full lg:w-auto" variant="outline">
        <NextLink href={routes.getRoute("docs")}>View docs</NextLink>
      </Button>
    </Stack>
  );
};
