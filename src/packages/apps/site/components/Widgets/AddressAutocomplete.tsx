import { Search } from "@/packages/apps/site/components/Search";
import { SearchProps } from "@/packages/apps/site/components/Search/SearchContext";
import { SearchDropdownItemAddress } from "@/packages/apps/site/components/Search/SearchDropdownItem";
import { client } from "@/packages/server/clients/api";
import { IAutoCompleteResponseSchema } from "@/packages/server/modules/data/schemas/autocomplete.schema";

export const autocomplete = (query: string) => {
  const { data, isFetching } = client.data.autocomplete.useQuery(
    [query],
    {
      query: {
        string: query,
      },
    },
    {
      enabled: query.length > 1,
    },
  );

  return { items: data?.body.data.addresses || [], isFetching };
};

const AddressAutocomplete = (
  props: Pick<
    SearchProps<IAutoCompleteResponseSchema["data"]["addresses"][0]>,
    "onSelectValue"
  >,
) => {
  return (
    <Search
      {...props}
      inputSize="default"
      fetch={({ query }) => autocomplete(query)}
      renderItem={({ item, ...rest }) => {
        return (
          <SearchDropdownItemAddress
            {...rest}
            address={{ address: item.address, udprn: item.udprn }}
          />
        );
      }}
    />
  );
};

export { AddressAutocomplete };
