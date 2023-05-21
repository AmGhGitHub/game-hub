import { HStack, Image, Text, Box } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" alt="logo" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
