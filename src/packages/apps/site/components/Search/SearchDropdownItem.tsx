import { Badge } from "@/packages/components/ui/Badge";
import { Box, BoxProps } from "@/packages/components/ui/Box";
import { cn } from "@/packages/utils/cn";
import { Location } from "@carbon/icons-react";

const SearchDropdownItemIcon = () => {
  return (
    <Box className="flex h-8 w-8 items-center justify-center rounded-md border">
      <Location size={18} />
    </Box>
  );
};

const SearchDropdownItemLabel = (props: BoxProps<"div">) => {
  const { className, ...rest } = props;

  return <Box className={cn("truncate", className)} {...rest} />;
};

type SearchDropdownItemAddressProps = SearchDropdownItemContainerProps & {
  address: { address: string; udprn: string };
};

const SearchDropdownItemAddress = (props: SearchDropdownItemAddressProps) => {
  const { address, ...rest } = props;

  return (
    <SearchDropdownItemContainer {...rest}>
      <SearchDropdownItemIcon />
      <SearchDropdownItemLabel className="flex-1">
        {address.address}
      </SearchDropdownItemLabel>
      <Badge>{address.udprn}</Badge>
    </SearchDropdownItemContainer>
  );
};

type SearchDropdownItemContainerProps = BoxProps<"div"> & { isActive: boolean };

const SearchDropdownItemContainer = (
  props: SearchDropdownItemContainerProps,
) => {
  const { isActive, ...rest } = props;

  return (
    <Box
      className={cn(
        "flex cursor-pointer items-center gap-3 px-gutter py-2 leading-none hover:bg-background-tertiary",
        {
          "bg-background-tertiary": isActive,
        },
      )}
      {...rest}
    />
  );
};

export {
  SearchDropdownItemContainer,
  SearchDropdownItemLabel,
  SearchDropdownItemIcon,
  SearchDropdownItemAddress,
};
