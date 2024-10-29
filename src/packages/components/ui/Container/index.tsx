import { Box, BoxProps } from "@/packages/components/ui/Box";
import { cn } from "@/packages/utils/cn";

export const Container = (props: BoxProps<"div">) => {
  const { children, className, ...rest } = props;

  return (
    <Box
      className={cn("relative mx-auto w-full max-w-[1400px] px-4", className)}
      {...rest}
    >
      {children}
    </Box>
  );
};
