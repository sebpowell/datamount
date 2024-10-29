import { Box, BoxProps } from "@/packages/components/ui/Box";
import { cva } from "class-variance-authority";
import { VariantProps, tv } from "tailwind-variants";

const inputElementStyles = cva(
  "flex items-center justify-center absolute top-0",
  {
    variants: {
      size: {
        sm: "h-form-control-small w-form-control-small",
        default: "h-form-control-default w-form-control-default",
        lg: "h-form-control-large w-form-control-large",
        xl: "h-form-control-x-large w-form-control-x-large",
      },
      position: {
        left: "left-0",
        right: "right-0",
      },
    },
  },
);

type InputElementProps = BoxProps<"div"> &
  VariantProps<typeof inputElementStyles>;

const InputElement = (props: InputElementProps) => {
  const { className, size = "default", position = "left", ...rest } = props;

  return (
    <Box
      className={inputElementStyles({ size, className, position })}
      {...rest}
    />
  );
};

export { InputElement };
