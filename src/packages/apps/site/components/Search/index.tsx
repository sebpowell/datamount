"use client";
import {
  SearchContextProvider,
  SearchData,
  SearchProps,
} from "@/packages/apps/site/components/Search/SearchContext";
import { SearchDropdown } from "@/packages/apps/site/components/Search/SearchDropdown";
import { SearchInput } from "@/packages/apps/site/components/Search/SearchInput";
import { Box } from "@/packages/components/ui/Box";

const Search = <T extends SearchData>(props: SearchProps<T>) => {
  const { inputSize = "lg", ...rest } = props;

  return (
    <SearchContextProvider inputSize={inputSize} {...rest}>
      <Box className="relative">
        <SearchInput />
        <SearchDropdown />
      </Box>
    </SearchContextProvider>
  );
};

export { Search };
