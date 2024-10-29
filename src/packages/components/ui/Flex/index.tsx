import { Box, BoxProps } from "@/packages/components/ui/Box";
import { cn } from "@/packages/utils/cn";

export type IFlexProps = BoxProps<"div">;

export const Flex = (props: IFlexProps) => {
  const { as = "div", className, ...rest } = props;

  return <Box as={as} className={cn("flex", className)} {...rest} />;
};
