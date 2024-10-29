import { Box, BoxProps } from "@/packages/components/ui/Box";
import { cn } from "@/packages/utils/cn";

type ParagraphProps = BoxProps<"p">;

const Paragraph = (props: ParagraphProps) => {
  const { className, ...rest } = props;

  return <Box as="p" className={cn(className)} {...rest} />;
};

export type { ParagraphProps };

export { Paragraph };
