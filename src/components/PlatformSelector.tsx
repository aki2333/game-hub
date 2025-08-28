import usePlatform from "@/hooks/usePlatform";
import type { Platform } from "@/hooks/usePlatforms";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  selectedPlatformId?: number;
  onSelectPlatform: (platform: Platform | null) => void;
}
const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platform"}
          <MdKeyboardArrowDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="" onClick={() => onSelectPlatform(null)}>
            All
          </Menu.Item>
          {data?.results.map((platform) => (
            <Menu.Item
              key={platform.id}
              value={platform.id + ""}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
