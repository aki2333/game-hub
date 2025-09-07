import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeButton } from "./ui/color-mode";
import SearchText from "./SearchText";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px 20px" gap={4}>
      <Link to="/">
        <Image src={logo} boxSize="50px" alt="Logo" />
      </Link>
      <SearchText />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
