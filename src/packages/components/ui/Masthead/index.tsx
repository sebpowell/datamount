import { Box, BoxProps } from "@/packages/components/ui/Box";
import { Heading, HeadingProps } from "@/packages/components/ui/Heading";
import { cn } from "@/packages/utils/cn";

const MastheadTitle = (props: Omit<HeadingProps, "as">) => {
  return (
    <Heading as="h1" size="display" className="leading-tight" {...props} />
  );
};

const Masthead = (props: BoxProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <Box
      className={cn(
        "bg-forest-100 -mt-[var(--navigation-height)] -mt-[var(--navigation-height)] flex pb-24 pt-[calc(theme(spacing.24)+var(--navigation-height))]",
        className,
      )}
      {...rest}
    />
  );
};

export { Masthead, MastheadTitle };
