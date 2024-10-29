import { Box, BoxProps } from "@/packages/components/ui/Box";
import { Heading } from "@/packages/components/ui/Heading";

const PageTitle = (props: BoxProps<"h1">) => {
  return <Heading as="h1" size="display" {...props} />;
};

const PageHeader = (props: BoxProps<"div">) => {
  return <Box className="py-12" {...props} />;
};

const PageBody = (props: BoxProps<"div">) => {
  return <Box className="py-12" {...props} />;
};

export { PageTitle, PageHeader, PageBody };
