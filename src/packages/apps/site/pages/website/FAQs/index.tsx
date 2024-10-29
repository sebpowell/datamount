import { PageTitle } from "@/packages/apps/site/components/PageHeader";
import { Box } from "@/packages/components/ui/Box";
import { Container } from "@/packages/components/ui/Container";
import { FAQList } from "@/packages/components/ui/FAQList";
import { Link } from "@/packages/components/ui/Link";
import { Masthead } from "@/packages/components/ui/Masthead";
import { Paragraph } from "@/packages/components/ui/Paragraph";
import { TypeFaqSkeleton } from "@/packages/interfaces";
import { routes } from "@/packages/utils/routes";
import { Entry } from "contentful";
import NextLink from "next/link";

const PageFAQs = (props: {
  faqs: Entry<TypeFaqSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">[];
}) => {
  const { faqs } = props;

  return (
    <>
      <Masthead>
        <Container>
          <PageTitle>FAQs</PageTitle>
        </Container>
      </Masthead>
      <Container>
        <Box className="space-y-12 py-12">
          <FAQList faqs={faqs} />
          <Paragraph>
            Still have questions? Try our{" "}
            <Link asChild variant="solid">
              <NextLink href={routes.getRoute("docs")}>docs</NextLink>
            </Link>
            , or{" "}
            <Link asChild variant="solid">
              <NextLink href={routes.getRoute("contact")}>contact us</NextLink>
            </Link>
            .
          </Paragraph>
        </Box>
      </Container>
    </>
  );
};

export { PageFAQs };
