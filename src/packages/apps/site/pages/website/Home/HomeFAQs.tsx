import { HomeSectionIds } from "@/packages/apps/site/pages/website/Home";
import { FAQList } from "@/packages/components/ui/FAQList";
import { Column, Grid } from "@/packages/components/ui/Grid";
import { Link } from "@/packages/components/ui/Link";
import {
  PageSection,
  PageSectionBody,
  PageSectionDivider,
  PageSectionHeader,
  PageSectionTitle,
} from "@/packages/components/ui/PageSection";
import { Paragraph } from "@/packages/components/ui/Paragraph";
import { TypeFaqSkeleton } from "@/packages/interfaces";
import { routes } from "@/packages/utils/routes";
import { Entry } from "contentful";
import NextLink from "next/link";

const HomepageFAQs = ({
  faqs = [],
}: {
  faqs: Entry<TypeFaqSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">[];
}) => {
  return (
    <PageSection id={HomeSectionIds.faqs}>
      <PageSectionDivider />
      <Grid>
        <Column className="col-span-12 lg:col-span-6">
          <PageSectionHeader>
            <PageSectionTitle>FAQS</PageSectionTitle>
          </PageSectionHeader>
        </Column>
        <Column className="col-span-12 lg:col-span-6">
          <PageSectionBody>
            <FAQList faqs={faqs} />
            <Paragraph>
              Still have questions? Try our{" "}
              <Link asChild variant="solid">
                <NextLink href={routes.getRoute("docs")}>docs</NextLink>
              </Link>
              , or{" "}
              <Link asChild variant="solid">
                <NextLink href={routes.getRoute("contact")}>
                  contact us
                </NextLink>
              </Link>
              .
            </Paragraph>
          </PageSectionBody>
        </Column>
      </Grid>
    </PageSection>
  );
};

export { HomepageFAQs };
