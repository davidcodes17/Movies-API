import { Avatar, Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../components/Logo";
import { CloseCircle, HambergerMenu, User } from "iconsax-react";

const Header = () => {
  const [height, setHeight] = useState("65px");
  const [icon, setIcon] = useState(<HambergerMenu />);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      p={5}
      borderRadius={40}
      px={10}
      top={5}
      height={height}
      className="blur"
      zIndex={9999}
      position={"fixed"}
      mx={10}
      left={0}
      right={0}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Logo />
        {/* <Flex justifyContent={"space-between"} gap={20} fontSize={12}>
          <Text>Home</Text>
          <Text>Documantation</Text>
          <Text>Movies</Text>
          <Text>Contact</Text>
        </Flex> */}
        <Flex>
          <Flex
            gap={10}
            fontSize={12}
            display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
            alignItems={"center"}
          >
            <Text>areegbedavid@gmail.com</Text>
            <Button
              fontSize={12}
              height={"30px"}
              borderRadius={40}
              color={"#fff"}
              bg={"#E50914"}
            >
              Logout
            </Button>
            {/* <Box><User size={15} /></Box> */}
          </Flex>
          <Box
            cursor={"pointer"}
            display={{ lg: "none", md: "none", sm: "block", base: "block" }}
            onClick={() => {
              setHeight("120px");
              setIcon(<CloseCircle />);
              setIsOpen;
            }}
          >
            {icon}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
