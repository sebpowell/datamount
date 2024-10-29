// import { Search } from "@/packages/components/molecules/website/Search";
// import { SearchProps } from "@/packages/components/molecules/website/Search/SearchContext";
// import { Box } from "@/packages/components/ui/Box";
// import { client } from "@/packages/server/clients/api";
// import { AreaLookupResponse } from "@/packages/server/modules/data/schemas/area-lookup.schema";

// export const autocomplete = (query: string) => {
//   const { data, isFetching } = client.data.areaLookup.useQuery(
//     [query],
//     {
//       query: {
//         string: query,
//       },
//     },
//     {
//       enabled: query.length > 1,
//     },
//   );

//   return { items: data?.body.data || [], isFetching };
// };

// const AreaAutocomplete = (
//   props: Pick<SearchProps<AreaLookupResponse["data"]>, "onSelectValue">,
// ) => {
//   return (
//     <Search
//       {...props}
//       fetch={({ query }) => autocomplete(query)}
//       renderItem={(item) => {
//         return <Box>{JSON.stringify(item)}</Box>;
//       }}
//     />
//   );
// };

// export { AreaAutocomplete };
