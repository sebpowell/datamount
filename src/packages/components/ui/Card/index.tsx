import { Box, BoxProps } from "@/packages/components/ui/Box";
import { cn } from "@/packages/utils/cn";

const CardBody = (props: BoxProps<"div">) => {
  const { className, ...rest } = props;

  return <Box className={cn("p-5", className)} {...rest} />;
};

const Card = (props: BoxProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <Box
      className={cn("rounded-lg border bg-white shadow-sm", className)}
      {...rest}
    />
  );
};

export { Card, CardBody };
