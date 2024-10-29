import {
  SearchData,
  useSearchContext,
} from "@/packages/apps/site/components/Search/SearchContext";
import { Box } from "@/packages/components/ui/Box";

const SearchDropdownItems = ({ items }: { items: SearchData[] }) => {
  const { renderItem, getItemProps } = useSearchContext();

  return (
    <Box>
      {items.map((item, i) => {
        return renderItem({
          item,
          ...getItemProps(item),
        });
      })}
    </Box>
  );
};

export { SearchDropdownItems };
