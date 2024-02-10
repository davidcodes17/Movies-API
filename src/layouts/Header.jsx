import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../components/Logo";
import { CloseCircle, HambergerMenu, User } from "iconsax-react";

const Header = () => {
  const [height, setHeight] = useState("65px");
  const [icon, setIcon] = useState(<HambergerMenu />);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box
      p={5}
      borderRadius={40}
      px={10}
      top={5}
      height={height}
      className="blur"
      zIndex={9}
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
            <Text>{localStorage.getItem("user")}</Text>
            <Button
              fontSize={12}
              height={"30px"}
              borderRadius={40}
              color={"#fff"}
              onClick={() => {
                localStorage.clear();
                window.location.replace("/");
              }}
              bg={"#E50914"}
            >
              Logout
            </Button>
            {/* <Box><User size={15} /></Box> */}
          </Flex>
        </Flex>
        <>
          <Box
            ref={btnRef}
            onClick={onOpen}
            display={{ lg: "none", md: "none", sm: "block", base: "block" }}
          >
            <HambergerMenu />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent color={"#000"} p={5}>
              <Flex justifyContent={"space-between"}>
                <Text fontSize={"30px"}>Netflix</Text>
                <Box onClick={onClose}>
                  <CloseButton />
                </Box>
              </Flex>
              <Box lineHeight={"40px"} pt={10}>
                <Flex alignItems={"center"} gap={5}>
                  <User variant="Bold" />
                  <Text>{localStorage.getItem("user")}</Text>
                </Flex>
                <Button
                  fontSize={12}
                  height={"30px"}
                  borderRadius={40}
                  color={"#fff"}
                  onClick={() => {
                    localStorage.clear();
                    window.location.replace("/");
                  }}
                  bg={"#E50914"}
                >
                  Logout
                </Button>
              </Box>
            </DrawerContent>
          </Drawer>
        </>
      </Flex>
    </Box>
  );
};

export default Header;
