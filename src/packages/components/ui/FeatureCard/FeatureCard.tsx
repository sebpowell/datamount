import { Box, BoxProps } from "@/packages/components/ui/Box";
import { Card, CardBody } from "@/packages/components/ui/Card";
import { Heading, HeadingProps } from "@/packages/components/ui/Heading";
import { cn } from "@/packages/utils/cn";
import { ReactNode } from "react";

const FeatureCardEmpty = () => {
  return <Box className="text-text-tertiary">N/A</Box>;
};

const FeatureCardValue = (
  props: Omit<BoxProps<"div">, "children"> & { value: ReactNode },
) => {
  const { value, ...rest } = props;

  return (
    <Box className="truncate text-lg leading-none" {...rest}>
      {value ? value : <FeatureCardEmpty />}
    </Box>
  );
};

const FeatureCardTitle = (props: Omit<HeadingProps, "as">) => {
  return (
    <Heading
      as="h4"
      size="h5"
      className="leading-none text-text-tertiary"
      {...props}
    />
  );
};

const FeatureCardContainer = (props: BoxProps<"div">) => {
  const { className, ...rest } = props;

  return <Box className={cn("flex-1 space-y-3 p-5", className)} {...rest} />;
};

const FeatureCard = (props: BoxProps<"div">) => {
  return <Card>{props.children}</Card>;
};

export {
  FeatureCard,
  FeatureCardTitle,
  FeatureCardValue,
  FeatureCardContainer,
};
