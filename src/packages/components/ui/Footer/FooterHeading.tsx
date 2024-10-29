import { Heading, HeadingProps } from "@/packages/components/ui/Heading";

const FooterHeading = (props: Omit<HeadingProps, "as">) => {
  return <Heading as="h4" size="h4" className="font-semibold" {...props} />;
};

export { FooterHeading };
