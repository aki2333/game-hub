import useGameQueryStore from "@/stores/gameQueryStore";
import { Button, Menu } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

const SortSelector = () => {
  // name, released, added, created, updated, rating, metacritic
  const sortOptions = [
    { value: "released", label: "Released" },
    { value: "name", label: "Name" },
    { value: "-added", label: "Added" },
    { value: "-created", label: "Created" },
    { value: "-updated", label: "Updated" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Metacritic" },
  ];
  const setSort = useGameQueryStore((s) => s.setSort);
  const ordering = useGameQueryStore((s) => s.gameQuery.ordering);
  const currentSort = sortOptions.find((option) => option.value === ordering);
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Sort By:{currentSort ? currentSort.label : "Released"}
          <MdKeyboardArrowDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {sortOptions.map((option) => (
            <Menu.Item
              key={option.value}
              value={option.value}
              onClick={() => setSort(option.value)}
            >
              {option.label}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
