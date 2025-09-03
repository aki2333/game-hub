import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeButton } from "./ui/color-mode";
import SearchText from "./SearchText";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px 20px" gap={4}>
      <Image src={logo} boxSize="50px" alt="Logo" />
      <SearchText />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
