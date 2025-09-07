import useGameQueryStore from "@/stores/gameQueryStore";
import { Input, InputGroup, Kbd } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { Form } from "react-router";

const SearchText = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
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
    <Form
      action="/"
      onSubmit={() => {
        // e.preventDefault();
        if (inputRef.current) setSearchText(inputRef.current.value);
      }}
    >
      <InputGroup startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
        <Input borderRadius={20} placeholder="Search Games" ref={inputRef} />
      </InputGroup>
    </Form>
  );
};

export default SearchText;
