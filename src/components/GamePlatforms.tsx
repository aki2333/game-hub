import { DiApple, DiAndroid, DiWindows, DiLinux } from "react-icons/di";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaPlaystation, FaXbox, FaAppStoreIos } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import type { Platform } from "@/entities/Platform";

interface Props {
  platforms: Platform[];
}
const GamePlatforms = ({ platforms }: Props) => {
  const platformIcons: { [key: string]: IconType } = {
    mac: DiApple,
    android: DiAndroid,
    windows: DiWindows,
    linux: DiLinux,
    nintendo: BsNintendoSwitch,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: FaAppStoreIos,
    web: MdWeb,
  };
  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          color="gray.500"
          as={platformIcons[platform.slug] || DiWindows}
        />
      ))}
    </HStack>
  );
};

export default GamePlatforms;
