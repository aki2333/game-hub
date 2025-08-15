import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/cat.png";
import { ColorModeButton } from "./ui/color-mode";
import SearchText from "./SearchText";

interface Props {
  onSearch: (query: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px 20px">
      <Image src={logo} boxSize="50px" alt="Logo" />
      <SearchText onSearch={onSearch} />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
