import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/packages/utils/cn";
import { Box, BoxProps } from "@/packages/components/ui/Box";
import { Loader } from "@/packages/components/ui/Loader";

const buttonVariantStyles = cva([], {
  variants: {
    color: {
      primary: "",
      secondary: "",
    },
    hoverColor: {
      primary: "",
      secondary: "",
    },
    variant: {
      solid:
        "text-white bg-black hover:bg-white hover:text-black border border-black",
      outline: "border border-black hover:bg-white",
      ghost:
        "bg-transparent hover:bg-background-tertiary text-text-tertiary hover:text-text-secondary",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "primary",
      className: "bg-background-primary-inverse text-text-primary-inverse",
    },
    {
      variant: "solid",
      color: "secondary",
      className: "bg-background-secondary",
    },
  ],
});

type ButtonVariantStyles = VariantProps<typeof buttonVariantStyles>;

const buttonSizeStyles = cva([], {
  variants: {
    size: {
      xs: "px-5 h-form-control-x-small",
      sm: "px-5 h-form-control-small",
      default: "px-6 h-form-control-default",
      lg: "h-form-control-large px-8",
      xl: "h-form-control-x-large px-6",
    },
  },
});

type ButtonSizeStyles = VariantProps<typeof buttonSizeStyles>;

const buttonStyles = cva(
  "inline-flex items-center justify-center focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-full transition-all whitespace-nowrap",
  {
    variants: {
      isBlock: {
        true: "w-full",
      },
      isLoading: {
        true: "opacity-40",
      },
    },
  },
);

type ButtonStyles = VariantProps<typeof buttonStyles>;

type ButtonProps = Omit<BoxProps<"button">, "color"> &
  ButtonStyles &
  ButtonVariantStyles &
  ButtonSizeStyles;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "solid",
      size = "default",
      color = "primary",
      isBlock,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Box
        as="button"
        className={cn(
          buttonStyles({
            isBlock,
            isLoading,
          }),
          buttonVariantStyles({
            variant,
            color,
          }),
          buttonSizeStyles({ size }),
          className,
        )}
        disabled={isLoading || disabled}
        ref={ref}
        {...props}
      >
        {isLoading ? <Loader /> : children}
      </Box>
    );
  },
);
Button.displayName = "Button";

export type { ButtonVariantStyles, ButtonSizeStyles };

export { Button, buttonStyles, buttonVariantStyles, buttonSizeStyles };
