import { Box, BoxProps } from "@/packages/components/ui/Box";
import { cn } from "@/packages/utils/cn";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { VariantProps } from "tailwind-variants";

const inputBaseStyles = cva(
  "disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none placeholder:text-text-tertiary transition-colors w-full",
);

const inputPaddingStyles = cva([], {
  variants: {
    hasLeftElement: {
      true: "",
    },
    hasRightElement: {
      true: "",
    },
    size: {
      sm: "",
      default: "",
      lg: "",
      xl: "text-4",
    },
  },
  compoundVariants: [
    {
      hasLeftElement: true,
      hasRightElement: false,
      size: "sm",
      className: "pl-form-control-small pr-3",
    },
    {
      hasLeftElement: false,
      hasRightElement: true,
      size: "sm",
      className: "pl-3 pr-form-control-small",
    },
    {
      hasLeftElement: false,
      hasRightElement: false,
      size: "sm",
      className: "px-3",
    },
    {
      hasLeftElement: true,
      hasRightElement: true,
      size: "sm",
      className: "px-form-control-small",
    },
    {
      hasLeftElement: true,
      hasRightElement: false,
      size: "default",
      className: "pl-form-control-default pr-3",
    },
    {
      hasLeftElement: false,
      hasRightElement: true,
      size: "default",
      className: "pl-3 pr-form-control-default",
    },
    {
      hasLeftElement: false,
      hasRightElement: false,
      size: "default",
      className: "px-3",
    },
    {
      hasLeftElement: true,
      hasRightElement: true,
      size: "default",
      className: "px-form-control-default",
    },

    {
      hasLeftElement: true,
      hasRightElement: false,
      size: "lg",
      className: "pl-form-control-large pr-3",
    },
    {
      hasLeftElement: false,
      hasRightElement: true,
      size: "lg",
      className: "pl-3 pr-form-control-large",
    },
    {
      hasLeftElement: false,
      hasRightElement: false,
      size: "lg",
      className: "px-3",
    },
    {
      hasLeftElement: true,
      hasRightElement: true,
      size: "lg",
      className: "px-form-control-large",
    },
    {
      hasLeftElement: true,
      hasRightElement: false,
      size: "xl",
      className: "pl-form-control-x-large pr-3",
    },
    {
      hasLeftElement: false,
      hasRightElement: true,
      size: "xl",
      className: "pl-3 pr-form-control-x-large",
    },
    {
      hasLeftElement: false,
      hasRightElement: false,
      size: "xl",
      className: "px-3",
    },
    {
      hasLeftElement: true,
      hasRightElement: true,
      size: "xl",
      className: "px-form-control-x-large",
    },
  ],
});

type InputPaddingStyles = VariantProps<typeof inputPaddingStyles>;

const inputVariantStyles = cva([], {
  variants: {
    variant: {
      solid: "bg-background-primary border border-black",
    },
  },
});

type InputVariantStyles = VariantProps<typeof inputVariantStyles>;

const inputShapeStyles = cva([], {
  variants: {
    shape: {
      square: "rounded-md",
      rounded: "rounded-full",
    },
  },
});

type InputShapeStyles = VariantProps<typeof inputShapeStyles>;

const inputDimensionStyles = cva([], {
  variants: {
    size: {
      sm: "h-form-control-small",
      default: "h-form-control-default",
      lg: "h-form-control-large",
      xl: "h-form-control-x-large",
    },
  },
});

type InputDimensionStyles = VariantProps<typeof inputDimensionStyles>;

type InputProps = Omit<BoxProps<"input">, "size"> &
  InputPaddingStyles &
  InputDimensionStyles &
  InputShapeStyles &
  InputVariantStyles;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      hasLeftElement = false,
      hasRightElement = false,
      shape = "square",
      size = "default",
      variant = "solid",
      ...rest
    },
    ref,
  ) => {
    return (
      <Box
        as="input"
        type={type}
        className={cn(
          inputBaseStyles(),
          inputVariantStyles({ variant }),
          inputShapeStyles({ shape }),
          inputPaddingStyles({
            size,
            hasLeftElement,
            hasRightElement,
          }),
          inputDimensionStyles({ size }),
          className,
        )}
        ref={ref}
        {...rest}
      />
    );
  },
);

Input.displayName = "Input";

export { Input, inputBaseStyles, inputVariantStyles, inputShapeStyles };

export type { InputDimensionStyles, InputPaddingStyles, InputVariantStyles };
