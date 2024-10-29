import { Box, BoxProps } from "@/packages/components/ui/Box";

const NavigationItem = (props: BoxProps<"div">) => {
  return <Box className="h-full" {...props} />;
};

export { NavigationItem };
