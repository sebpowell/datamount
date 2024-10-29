import { Box } from "@/packages/components/ui/Box";
import { Link } from "@/packages/components/ui/Link";
import { routes } from "@/packages/utils/routes";
import NextLink from "next/link";

const FreeCredits = () => {
  return (
    <>
      100 free credits when you sign up. See pricing{" "}
      <Link asChild variant="solid">
        <NextLink href={routes.getRoute("pricing")}>here</NextLink>
      </Link>
      .
    </>
  );
};

export { FreeCredits };
