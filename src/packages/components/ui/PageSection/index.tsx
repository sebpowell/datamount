import { Box, BoxProps } from "@/packages/components/ui/Box";
import { Divider } from "@/packages/components/ui/Divider";
import { Heading, HeadingProps } from "@/packages/components/ui/Heading";
import { Paragraph } from "@/packages/components/ui/Paragraph";
import { Section } from "@/packages/components/ui/Section";
import { cn } from "@/packages/utils/cn";

const PageSectionTitle = (props: Omit<HeadingProps, "as">) => {
  const { size = "h2", ...rest } = props;

  return <Heading as="h2" size={size} {...rest} />;
};

export const PageSectionParagraph = (props: BoxProps<"p">) => {
  const { className, ...rest } = props;

  return (
    <Paragraph className={cn(className, "text-text-tertiary")} {...rest} />
  );
};

const PageSectionHeader = (props: BoxProps<"header">) => {
  return <Box as="header" {...props} />;
};

const PageSectionBody = (props: BoxProps<"main">) => {
  return <Box as="main" {...props} />;
};

const PageSectionDivider = (props: BoxProps<"main">) => {
  return <Divider />;
};

const PageSection = (props: BoxProps<"section">) => {
  const { className, ...rest } = props;

  return <Section className={cn("space-y-5", className)} {...rest} />;
};

export {
  PageSection,
  PageSectionHeader,
  PageSectionTitle,
  PageSectionBody,
  PageSectionDivider,
};
