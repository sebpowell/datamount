import { Box } from "@/packages/components/ui/Box";
import { cn } from "@/packages/utils/cn";
import { VariantProps, tv } from "tailwind-variants";

const badgeVariants = tv({
  base: cn(
    "inline-flex items-center px-1.5 h-5 transition-colors leading-none rounded-md text-xs",
  ),
  variants: {
    variant: {
      green: "bg-green-100 text-black",
      red: "bg-red-600 text-white",
      gray: "bg-gray-200 text-gray-700",
    },
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant = "gray", ...props }: BadgeProps) {
  return (
    <Box className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
