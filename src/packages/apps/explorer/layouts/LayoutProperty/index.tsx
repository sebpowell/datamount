"use client";
import { GlobalSearch } from "@/packages/apps/site/components/Widgets/GlobalSearch";
import { getUdprnsFromPath } from "@/packages/apps/explorer/pages/Property";
import { Box } from "@/packages/components/ui/Box";
import { NavigationButtons } from "@/packages/components/ui/Navigation/NavigationButtons";
import { NavigationLogo } from "@/packages/components/ui/Navigation/NavigationLogo";
import {
  SearchResponse,
  SearchResponseItem,
} from "@/packages/server/modules/data/schemas/search.schema";
import { routes } from "@/packages/utils/routes";
import { BuildingInsights_1 } from "@carbon/icons-react";
import { useParams, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const getSearchResultUrl = (item: SearchResponseItem) => {
  if (item.type === "area")
    return routes.getRoute("area", { ":id": item.area_id.toString() });

  if (item.type === "address")
    return routes.getRoute("property", { ":udprn": item.udprn });

  return "#";
};

const SearchResultItem = ({ item }: { item: SearchResponseItem }) => {
  const { type } = item;

  const router = useRouter();

  return (
    <Box
      className="flex cursor-pointer items-center gap-3 border-b border-border-primary bg-background-primary px-4 py-4 hover:bg-background-secondary"
      onClick={() => {
        router.push(getSearchResultUrl(item));
      }}
    >
      <Box className="flex h-6 w-6 items-center justify-center rounded-sm bg-forest-200">
        <BuildingInsights_1 />
      </Box>
      <Box className="flex-1 truncate text-sm leading-none">
        {type === "address" ? item.address : item.name1}
      </Box>
    </Box>
  );
};

const LayoutPropertySidebar = ({
  searches,
}: {
  searches: SearchResponse["items"];
}) => {
  return (
    <Box className="hidden w-[350px] flex-col overflow-scroll border-r border-border-primary bg-background-secondary lg:flex">
      {searches.length > 0 ? (
        searches.map((search, i) => {
          return <SearchResultItem key={i} item={search} />;
        })
      ) : (
        <Box className="flex flex-1 flex-col items-center justify-center">
          <Box className="p-8 text-center text-text-secondary">
            Your past searches will appear here.
          </Box>
        </Box>
      )}
    </Box>
  );
};

const LayoutProperty = ({ children }: { children: ReactNode }) => {
  const params = useParams<{ udprn: string }>();

  const router = useRouter();

  const [searches, setSearches] = useState<SearchResponse["items"]>([]);

  useEffect(() => {
    setSearches(JSON.parse(localStorage.getItem("searchResults") || "[]"));
  }, []);

  const handleChange = (value: SearchResponse["items"][0]) => {
    const newResults = [...searches, value];

    setSearches(newResults);

    localStorage.setItem("searchResults", JSON.stringify(newResults));

    if (value.type === "address") {
      router.push(
        routes.getRoute("property", {
          ":udprn": getUdprnsFromPath(
            params?.udprn as string,
            value.udprn,
          ).udprns.join(","),
        }),
      );
    }

    if (value.type === "area")
      router.push(routes.getRoute("area", { ":id": value.area_id.toString() }));
  };

  return (
    <Box className="flex h-screen w-screen flex-col overflow-hidden">
      <Box className="flex h-20 shrink-0 items-center gap-4 border-b border-border-primary px-gutter">
        <NavigationLogo />
        <Box className="z-10 w-[600px] lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <GlobalSearch onSelectValue={handleChange} inputSize="default" />
        </Box>
        <NavigationButtons />
      </Box>
      <Box className="flex flex-1 overflow-hidden">
        <LayoutPropertySidebar searches={searches} />
        <Box className="flex w-full flex-col overflow-scroll scroll-smooth">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export { LayoutProperty };
