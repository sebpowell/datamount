import {


} from "@/packages/theme";
import { cn } from "@/packages/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

export type BoxOwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E;
  asChild?: boolean;
  className?: string;
} 

export type BoxProps<E extends React.ElementType> = BoxOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof BoxOwnProps>;

const defaultElement = "div";

export const Box: <E extends React.ElementType = typeof defaultElement>(
  props: BoxProps<E>,
) => React.ReactNode = React.forwardRef(function Box(
  props: BoxOwnProps,
  ref: React.Ref<Element>,
) {
  const Element = props.asChild ? Slot : props.as || defaultElement;

  const {
    className,
    ...rest
  } = props;

  return (
    <Element
      ref={ref}
      className={cn(
        className,

      )}
      {...rest}
      as={undefined}
    />
  );
});
