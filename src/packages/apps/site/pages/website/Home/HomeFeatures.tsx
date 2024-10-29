import { Box } from "@/packages/components/ui/Box";
import { Heading } from "@/packages/components/ui/Heading";
import {
  PageSection,
  PageSectionBody,
  PageSectionDivider,
  PageSectionHeader,
  PageSectionTitle,
} from "@/packages/components/ui/PageSection";
import { Paragraph } from "@/packages/components/ui/Paragraph";

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Box className="space-y-2">
      <Heading as="h3" size="h3">
        {title}
      </Heading>
      <Paragraph>{description}</Paragraph>
    </Box>
  );
};

const features = [
  {
    title: "Proactive blocklist tracking",
    description:
      "Send emails from the region closest to your users. Reduce delivery latency with North American, South American, and European regions.",
  },
  {
    title: "Proactive blocklist tracking",
    description:
      "Send emails from the region closest to your users. Reduce delivery latency with North American, South American, and European regions.",
  },
  {
    title: "Proactive blocklist tracking",
    description:
      "Send emails from the region closest to your users. Reduce delivery latency with North American, South American, and European regions.",
  },
];

const HomeFeatures = () => {
  return (
    <PageSection>
      <PageSectionDivider />
      <PageSectionHeader>
        <PageSectionTitle>Reach humans, not spam folders</PageSectionTitle>
      </PageSectionHeader>
      <PageSectionBody>
        <Box className="flex divide-x divide-black rounded-lg border border-black">
          {features.map((feature, i) => {
            return (
              <Box className="flex-1 p-8" key={i}>
                <Feature
                  title={feature.title}
                  description={feature.description}
                />
              </Box>
            );
          })}
        </Box>
      </PageSectionBody>
    </PageSection>
  );
};

export { HomeFeatures };
