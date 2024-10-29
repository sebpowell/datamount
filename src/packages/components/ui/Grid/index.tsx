import { Box, BoxProps } from "@/packages/components/ui/Box";
import { cn } from "@/packages/utils/cn";
import { VariantProps, tv } from "tailwind-variants";

const columnStyles = tv(
  {
    variants: {
      colSpan: {
        1: "col-span-1",
        2: "col-span-2",
        3: "col-span-3",
        4: "col-span-4",
        5: "col-span-5",
        6: "col-span-6",
        7: "col-span-7",
        8: "col-span-8",
        9: "col-span-9",
        10: "col-span-10",
        11: "col-span-11",
        12: "col-span-12",
      },
    },
  },
  { responsiveVariants: true },
);

const Column = (props: BoxProps<"div">) => {
  return <Box {...props} />;
};

const gridStyles = tv(
  {
    base: "grid grid-cols-12",
    variants: {
      gap: {
        0: "gap-0",
        2: "gap-2",
        4: "gap-4",
        8: "gap-8",
      },
    },
  },
  { responsiveVariants: true },
);

const Grid = (props: BoxProps<"div"> & VariantProps<typeof gridStyles>) => {
  const { className, gap = 8, ...rest } = props;

  return <Box className={gridStyles({ gap, className })} {...rest} />;
};

const LineGrid = (props: BoxProps<"div"> & VariantProps<typeof gridStyles>) => {
  const { className, ...rest } = props;

  return (
    <Box
      className={
        "grid grid-cols-12 gap-[1px] overflow-hidden rounded-lg border bg-background-tertiary"
      }
      {...rest}
    />
  );
};

export { Grid, Column, LineGrid };
