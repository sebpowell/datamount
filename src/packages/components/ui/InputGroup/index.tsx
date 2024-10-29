import { Box, BoxProps } from "@/packages/components/ui/Box";
import { cn } from "@/packages/utils/cn";

const InputGroup = (props: BoxProps<"div">) => {
  const { className, ...rest } = props;

  return <Box className={cn("group relative", className)} {...rest} />;
};

export { InputGroup };
