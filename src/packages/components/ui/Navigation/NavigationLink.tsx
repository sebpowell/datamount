import { Box, BoxProps } from "@/packages/components/ui/Box";

const NavigationLink = (props: BoxProps<"div">) => {
  return (
    <Box
      className="relative transition-colors before:absolute before:bottom-[-4px] before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
      {...props}
    />
  );
};

export { NavigationLink };
