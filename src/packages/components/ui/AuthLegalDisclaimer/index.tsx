import { Link } from "@/packages/components/ui/Link";
import { Paragraph } from "@/packages/components/ui/Paragraph";
import { routes } from "@/packages/utils/routes";
import NextLink from "next/link";

const AuthLegalDisclaimer = () => {
  return (
    <Paragraph>
      By signing up, you confirm acceptance of our{" "}
      <Link variant="solid">
        <NextLink href={routes.getRoute("legal_terms")}>Terms of Use</NextLink>
      </Link>{" "}
      and{" "}
      <Link variant="solid">
        <NextLink href={routes.getRoute("legal_terms")}>
          Privacy Policy
        </NextLink>
      </Link>
      .
    </Paragraph>
  );
};

export { AuthLegalDisclaimer };
