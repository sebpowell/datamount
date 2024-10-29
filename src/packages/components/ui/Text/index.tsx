import { Box, BoxProps } from "@/packages/components/ui/Box";

type TextProps = BoxProps<"div">;

const Text = (props: TextProps) => {
  return <Box {...props} />;
};

export { Text };

export type { TextProps };
