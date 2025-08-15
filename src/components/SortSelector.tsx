import { Button, Menu } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  selectedSort: string | null;
  onSelectSort: (sort: string | null) => void;
}
const SortSelector = ({ selectedSort, onSelectSort }: Props) => {
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
  const currentSort = sortOptions.find(
    (option) => option.value === selectedSort
  );
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
              onClick={() => onSelectSort(option.value)}
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
