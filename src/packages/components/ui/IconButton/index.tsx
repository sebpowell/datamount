import { Box, BoxProps } from "@/packages/components/ui/Box";
import { IIconProps, Icon } from "@/packages/components/ui/Icon";
import { cn } from "@/packages/utils/cn";
import { VariantProps, tv } from "tailwind-variants";

const iconButtonVariants = tv({
  base: "flex items-center justify-center outline-none ring-2 ring-purple-700 focus:outline-none active:outline-none",
  variants: {
    size: {
      sm: cn("w-input-dimension-sm h-input-dimension-sm"),
      default: cn("w-input-dimension-sm h-input-dimension-sm"),
      lg: cn("w-input-dimension-sm h-input-dimension-sm"),
    },
  },
});

const IconButton = (
  props: BoxProps<"button"> & { icon: IIconProps["icon"] } & VariantProps<
      typeof iconButtonVariants
    >,
) => {
  const { icon, size = "default", ...rest } = props;

  return (
    <Box
      as="button"
      className={cn(iconButtonVariants({ size }))}
      {...rest}
      style={{
        outline: "none !important",
      }}
    >
      <Icon icon={icon} size={16} />
    </Box>
  );
};

export { IconButton };
