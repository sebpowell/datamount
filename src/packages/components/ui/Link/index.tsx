import { VariantProps, tv } from "tailwind-variants";
import { Box, BoxProps } from "@/packages/components/ui/Box";

const linkStyles = tv({
  base: "cursor-pointer focus-visible:bg-background-secondary",
  variants: {
    variant: {
      solid: "bg-[size:100%_1px]",
      ghost: "bg-[size:0%_1px] hover:bg-[size:100%_1px]",
    },
  },
});

export type ILinkProps = Omit<BoxProps<"a">, "href"> &
  VariantProps<typeof linkStyles>;

export const Link = (props: ILinkProps) => {
  const { children, className, variant = "ghost", ...rest } = props;

  return (
    <Box
      as="span"
      className={linkStyles({ variant, className })}
      style={{
        backgroundImage: "linear-gradient(currentColor, currentColor)",
        backgroundPosition: "0% 100%",
        backgroundRepeat: "no-repeat",
        transition: "background-size .3s",
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
