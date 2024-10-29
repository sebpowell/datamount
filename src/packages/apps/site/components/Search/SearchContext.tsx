import { Box } from "@/packages/components/ui/Box";
import { InputDimensionStyles } from "@/packages/components/ui/Input";
import { useDisclosure } from "@/packages/utils/react/use-disclosure";
import { createContext } from "@/packages/utils/react/create-context";
import { debounce, findIndex } from "lodash";
import {
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useClickAway } from "react-use";
import { Key } from "ts-key-enum";

const flattenItems = (groupedItems: SearchGroupedItems<SearchData>) => {
  const flatList: SearchData[] = [];

  Object.keys(groupedItems).forEach((groupTitle) => {
    groupedItems[groupTitle].items.forEach((item) => {
      flatList.push({ ...item, groupTitle });
    });
  });
  return flatList;
};

type SearchData = Record<string, unknown>;

type SearchGroupedItems<T extends SearchData> = {
  [key: string]: { title: string; items: T[] };
};

type SearchProps<T extends SearchData> = {
  groupBy?(values: T[]): SearchGroupedItems<T>;
  fetch: ({ query }: { query: string }) => { items: T[]; isFetching: boolean };
  inputSize: InputDimensionStyles["size"];
  onSelectValue(value: T): void;
} & Pick<SearchContextProps<T>, "renderItem">;

type SearchContextProps<T extends SearchData> = {
  query: string;
  focusedIndex: number;
  isLoading: boolean;
  items: T[];
  getInputProps: {
    ref: RefObject<HTMLInputElement>;
    size: InputDimensionStyles["size"];
  };
  getItemProps(item: T): {
    onClick(): void;
    itemIndex: number;
    focusedIndex: number;
    isActive: boolean;
  };
  groupedItems: SearchGroupedItems<T> | null;
  isDropdownOpen: boolean;
  renderItem(props: {
    item: T;
    itemIndex: number;
    focusedIndex: number;
    onClick(): void;
    isActive: boolean;
  }): ReactElement;
  handleSelect(value: T): void;
  handleQueryChange(query: string): void;
  handleOpenDropdown(): void;
};

type SearchContextProviderProps<T extends SearchData> = SearchProps<T> & {
  children: ReactNode;
};

const [SearchContext, useSearchContext] =
  createContext<SearchContextProps<SearchData>>();

const SearchContextProvider = <T extends SearchData>(
  props: SearchContextProviderProps<T>,
) => {
  const { onSelectValue, fetch, children, renderItem, groupBy, inputSize } =
    props;

  const [searchQuery, setSearchQuery] = useState<string>("");

  const [focusedIndex, setFocusedIndex] = useState(0);

  const [debouncedValue, setDebouncedValue] = useState<string>("");

  const ref = useRef(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const {
    isOpen: isDropdownOpen,
    onClose: onCloseDropdownMenu,
    onOpen: onOpenDropdownMenu,
  } = useDisclosure();

  const { items, isFetching } = fetch({ query: debouncedValue });

  useClickAway(ref, () => onCloseDropdownMenu());

  const handleQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleOpenDropdown = () => {
    onOpenDropdownMenu();
  };

  const handleSelect = (value: T) => {
    onSelectValue && onSelectValue(value);
    onCloseDropdownMenu();
  };

  const groupedItems = groupBy ? groupBy(items) : null;

  const getItemProps = (item: T) => {
    const itemIndex = findIndex(
      flattenItems(groupedItems || {}),
      (i) => i.id === item.id,
    );

    return {
      onClick: () => handleSelect(item),
      focusedIndex,
      itemIndex,
      isActive: itemIndex === focusedIndex,
    };
  };

  const getInputProps = {
    ref: inputRef,
    size: inputSize,
  };

  useHotkeys(
    `${Key.ArrowDown}, ${Key.ArrowUp}`,
    (e) => {
      const totalItems = items?.length || 0;

      if (e.key === Key.ArrowDown) {
        if (focusedIndex < totalItems - 1) {
          setFocusedIndex(focusedIndex + 1);
        } else {
          setFocusedIndex(0);
        }
      }

      if (e.key === Key.ArrowUp) {
        if (focusedIndex > 0) {
          setFocusedIndex(focusedIndex - 1);
        } else {
          setFocusedIndex(totalItems - 1);
        }
      }
    },
    {
      enabled: isDropdownOpen,
      enableOnFormTags: ["INPUT"],
    },
  );

  useHotkeys(
    `${Key.Enter}`,
    (e) => {
      handleSelect(items[focusedIndex]);
    },
    {
      enabled: isDropdownOpen,
      enableOnFormTags: ["INPUT"],
    },
  );

  useHotkeys(
    `${Key.Escape}`,
    (e) => {
      onCloseDropdownMenu();
    },
    {
      enabled: isDropdownOpen,
      enableOnFormTags: ["INPUT"],
    },
  );

  useEffect(() => {
    if (!isDropdownOpen) {
      inputRef.current?.blur();
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    const updateDebouncedValue = debounce(setDebouncedValue, 250);
    updateDebouncedValue(searchQuery);
    return updateDebouncedValue.cancel;
  }, [searchQuery]);

  const context: SearchContextProps<T> = {
    query: searchQuery,
    getInputProps,
    getItemProps,
    focusedIndex,
    renderItem,
    isLoading: isFetching,
    items: items,
    isDropdownOpen,
    handleQueryChange,
    handleOpenDropdown,
    handleSelect,
    groupedItems,
  };

  return (
    <SearchContext value={context}>
      <Box ref={ref}>{children}</Box>
    </SearchContext>
  );
};

export type { SearchProps, SearchGroupedItems, SearchData };

export { SearchContextProvider, useSearchContext, SearchContext };
