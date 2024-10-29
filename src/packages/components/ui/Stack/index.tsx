import { Box, BoxOwnProps, BoxProps } from "@/packages/components/ui/Box";
import { cn } from "@/packages/utils/cn";
import { forwardRef } from "react";
import { VariantProps, tv } from "tailwind-variants";

const stackStyles = tv(
  {
    variants: {
      spaceX: {
        0: "space-x-0",
        1: "space-x-1",
        2: "space-x-2",
        3: "space-x-3",
        4: "space-x-4",
        5: "space-x-5",
        6: "space-x-6",
        7: "space-x-7",
        8: "space-x-8",
        9: "space-x-9",
        10: "space-x-10",
      },
      spaceY: {
        0: "space-y-0",
        1: "space-y-1",
        2: "space-y-2",
        3: "space-y-3",
        4: "space-y-4",
        5: "space-y-5",
        6: "space-y-6",
        7: "space-y-7",
        8: "space-y-8",
        9: "space-y-9",
        10: "space-y-10",
      },
    },
  },
  { responsiveVariants: true },
);

const defaultElement = "div";

export const Stack: <E extends React.ElementType = typeof defaultElement>(
  props: BoxProps<E> & VariantProps<typeof stackStyles>,
) => React.ReactNode = forwardRef(function Stack(
  props: BoxOwnProps & VariantProps<typeof stackStyles>,
  ref: React.Ref<Element>,
) {
  const { as, className, spaceX, spaceY, ...rest } = props;

  return (
    <Box
      as={as}
      ref={ref}
      className={cn(className, stackStyles({ spaceX, spaceY }))}
      {...rest}
    />
  );
});
