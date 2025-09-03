import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/stores/gameQueryStore";
import { Button, Menu } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

const PlatformSelector = () => {
  const setPlatform = useGameQueryStore((s) => s.setPlatform);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(platformId);
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
          {data?.results.map((platform) => (
            <Menu.Item
              key={platform.id}
              value={platform.id + ""}
              onClick={() => setPlatform(platform.id)}
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
