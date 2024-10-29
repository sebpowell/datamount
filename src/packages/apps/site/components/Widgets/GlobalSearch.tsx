import { Search } from "@/packages/apps/site/components/Search";
import { SearchProps } from "@/packages/apps/site/components/Search/SearchContext";
import {
  SearchDropdownItemContainer,
  SearchDropdownItemIcon,
  SearchDropdownItemLabel,
} from "@/packages/apps/site/components/Search/SearchDropdownItem";
import { Badge } from "@/packages/components/ui/Badge";
import { client } from "@/packages/server/clients/api";
import { SearchResponseItem } from "@/packages/server/modules/data/schemas/search.schema";
import { toTitleCase } from "@/packages/utils/to-title-case";
import { groupBy, mapValues } from "lodash";

const search = (query: string) => {
  const { data, isFetching } = client.data.search.useQuery(
    [query],
    {
      query: {
        query,
      },
    },
    {
      enabled: query.length > 1,
    },
  );

  return { items: data?.body.items || [], isFetching };
};

const GlobalSearch = (
  props: Omit<SearchProps<SearchResponseItem>, "fetch" | "renderItem">,
) => {
  return (
    <Search
      {...props}
      fetch={({ query }) => search(query)}
      groupBy={(items) => {
        const groupedItems = groupBy(items, (item) => item.type);

        return mapValues(groupedItems, (groupItems, key) => ({
          items: groupItems,
          title: toTitleCase(key),
        }));
      }}
      renderItem={({ item, focusedIndex, itemIndex, ...rest }) => {
        return (
          <SearchDropdownItemContainer {...rest}>
            <SearchDropdownItemIcon />
            <SearchDropdownItemLabel className="flex-1">
              {item.type === "area" ? item.name1 : <>{item.address}</>}
            </SearchDropdownItemLabel>
            {item.type === "address" && <Badge>{item.udprn}</Badge>}
          </SearchDropdownItemContainer>
        );
      }}
    />
  );
};

export { GlobalSearch };
