import { Input, InputGroup, Kbd } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
  onSearch: (query: string) => void;
}
const SearchText = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // 快捷键⌘K focus
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      inputRef.current?.focus();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(inputRef.current?.value || "");
      }}
    >
      <InputGroup startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
        <Input borderRadius={20} placeholder="Search Games" ref={inputRef} />
      </InputGroup>
    </form>
  );
};

export default SearchText;
