import {
  PageBody,
  PageTitle,
} from "@/packages/apps/site/components/PageHeader";
import { Container } from "@/packages/components/ui/Container";
import { Link } from "@/packages/components/ui/Link";
import { Masthead } from "@/packages/components/ui/Masthead";
import { Paragraph } from "@/packages/components/ui/Paragraph";
import { SiteConfig } from "@/packages/config/global.config";

const ContactPage = () => {
  return (
    <>
      <Masthead>
        <Container>
          <PageTitle>Contact</PageTitle>
        </Container>
      </Masthead>
      <PageBody>
        <Container>
          <Paragraph className="text-xl">
            For any questions, including scheduling in demos, please email{" "}
            <Link variant="solid">{SiteConfig.cs_email}</Link>.
          </Paragraph>
        </Container>
      </PageBody>
    </>
  );
};

export { ContactPage };
