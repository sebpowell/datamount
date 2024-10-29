import { useSearchContext } from "@/packages/apps/site/components/Search/SearchContext";
import { Icon } from "@/packages/components/ui/Icon";
import { Input } from "@/packages/components/ui/Input";
import { InputElement } from "@/packages/components/ui/InputElement";
import { InputGroup } from "@/packages/components/ui/InputGroup";
import { Loader } from "@/packages/components/ui/Loader";
import { ChangeEvent, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Key } from "ts-key-enum";

const SearchInput = () => {
  const {
    query,
    isLoading,
    handleQueryChange,
    handleOpenDropdown,
    getInputProps,
  } = useSearchContext();

  const handleFocus = () => {
    handleOpenDropdown();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleQueryChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
    }
  };

  useHotkeys<HTMLDivElement>(
    "mod+k",
    (e) => {
      getInputProps.ref.current?.focus();
    },
    {
      enableOnFormTags: ["INPUT"],
    },
  );

  useHotkeys<HTMLDivElement>(Key.Escape, (e) => {}, {
    enableOnFormTags: ["INPUT"],
  });

  return (
    <InputGroup>
      <InputElement size={getInputProps.size}>
        <Icon icon="Search" size={16} />
      </InputElement>

      <Input
        {...getInputProps}
        placeholder="Start typing a UK address"
        className="pl-12"
        value={query}
        onFocus={handleFocus}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      {isLoading && (
        <InputElement size={getInputProps.size} position="right">
          <Loader />
        </InputElement>
      )}
    </InputGroup>
  );
};

export { SearchInput };
