import { Box, BoxProps } from "@/packages/components/ui/Box";
import { Text, TextProps } from "@/packages/components/ui/Text";

const EmptyTitle = (props: TextProps) => {
  const { ...rest } = props;

  return <Text className="text-lg font-medium text-text-tertiary" {...rest} />;
};

const EmptyContainer = (props: BoxProps<"div">) => {
  return (
    <Box
      className="flex items-center justify-center rounded-lg bg-background-secondary p-24"
      {...props}
    />
  );
};

export { EmptyContainer, EmptyTitle };
