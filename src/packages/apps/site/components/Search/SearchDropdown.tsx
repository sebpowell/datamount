import { useSearchContext } from "@/packages/apps/site/components/Search/SearchContext";
import { SearchDropdownItems } from "@/packages/apps/site/components/Search/SearchDropdownItems";
import { Box } from "@/packages/components/ui/Box";
import { dialogStyles } from "@/packages/components/ui/Dialog";
import { cn } from "@/packages/utils/cn";

const SearchDropdown = () => {
  const { items, isDropdownOpen, groupedItems } = useSearchContext();

  const isVisible = isDropdownOpen && items.length > 0;

  if (!isVisible) return <></>;

  return (
    <Box
      className={cn(
        "absolute z-10 max-h-[400px] w-full overflow-scroll py-3",
        dialogStyles(),
      )}
    >
      {groupedItems ? (
        <Box className="space-y-3">
          {Object.keys(groupedItems).map((key, i) => {
            const { items, title } = groupedItems[key];

            return (
              <Box key={i} className="space-y-3">
                <Box className="px-3">
                  <Box className="font-medium text-text-tertiary">{title}</Box>
                </Box>
                <SearchDropdownItems items={items} />
              </Box>
            );
          })}
        </Box>
      ) : (
        <SearchDropdownItems items={items} />
      )}
    </Box>
  );
};

export { SearchDropdown };
