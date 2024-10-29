import { BoxProps } from "@/packages/components/ui/Box";
import { Container } from "@/packages/components/ui/Container";

const NavigationContainerInner = (props: BoxProps<"div">) => {
  return <Container className="flex h-full items-center" {...props} />;
};

export { NavigationContainerInner };
