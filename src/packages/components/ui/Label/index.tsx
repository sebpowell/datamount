

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { VariantProps, tv } from "tailwind-variants";
import { cn } from "@/packages/utils/cn";


const labelVariants = tv({
  base: cn(
    "leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    
    
  ),
});

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={labelVariants({ className })}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
