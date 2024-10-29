import { Box, BoxProps } from "@/packages/components/ui/Box";
import { cn } from "@/packages/utils/cn";
import { VariantProps, cva } from "class-variance-authority";

const headingStyles = cva(["font-medium"], {
  variants: {
    size: {
      display: "text-4xl",
      h1: "text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-base",
    },
  },
});

type HeadingStyles = VariantProps<typeof headingStyles>;

type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4";
} & Omit<BoxProps<"h1" | "h2" | "h3" | "h4">, "as"> &
  HeadingStyles;

const Heading = (props: HeadingProps) => {
  const { className, size = "h1", ...rest } = props;

  return <Box className={cn(headingStyles({ size, className }))} {...rest} />;
};

export type { HeadingStyles, HeadingProps };

export { Heading };
