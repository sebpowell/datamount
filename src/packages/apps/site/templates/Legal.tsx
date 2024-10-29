import {
  PageBody,
  PageHeader,
  PageTitle,
} from "@/packages/apps/site/components/PageHeader";
import { Box } from "@/packages/components/ui/Box";
import { Container } from "@/packages/components/ui/Container";
import { Masthead } from "@/packages/components/ui/Masthead";
import { RichText } from "@/packages/components/ui/RichText";
import { Stack } from "@/packages/components/ui/Stack";
import { Text } from "@/packages/components/ui/Text";
import { Document } from "@contentful/rich-text-types";
import { format, parseISO } from "date-fns";

type ITemplateLegalProps = {
  title: string;
  content: Document | undefined;
  lastUpdated: string | undefined;
};

const TemplateLegal = (props: ITemplateLegalProps) => {
  const { title, content, lastUpdated } = props;

  return (
    <>
      <Masthead>
        <Container className="space-y-4 text-center">
          <PageTitle>{title}</PageTitle>
          {lastUpdated && (
            <Text className="leading-none">
              Last updated {format(parseISO(lastUpdated), "dd MMM yyyy")}
            </Text>
          )}
        </Container>
      </Masthead>

      <PageBody>
        <Container>
          <Stack spaceY={10}>
            <Box className="mx-auto max-w-2xl">
              <RichText content={content} />
            </Box>
          </Stack>
        </Container>
      </PageBody>
    </>
  );
};

export type { ITemplateLegalProps };

export { TemplateLegal };
