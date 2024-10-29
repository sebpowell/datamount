import { Box, BoxProps } from "@/packages/components/ui/Box";

const FooterColumn = (props: BoxProps<"div">) => {
  return (
    <Box className="col-span-12 flex-1 space-y-5 lg:col-span-4" {...props} />
  );
};

export { FooterColumn };
