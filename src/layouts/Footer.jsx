import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box mt={100}>
      <Flex justifyContent={"center"}>
        <Box>
          <Flex justifyContent={'center'}>
            <Image width={"50%"} src="/logo.png" />
          </Flex>
          <Flex gap={5} py={5} justifyContent={'center'}>
            <Link to={"/"}>
            <Button
              height={"30px"}
              fontSize={12}
              _hover={"none"}
              onClick={()=>{
                localStorage.clear();
              }}
              border={"2px solid #fff"}
              bg={"none"}
              color={"#fff"}
              >
              Logout
            </Button>
              </Link>
          </Flex>
          <Text textAlign={"center"}>
            &copy; All Rights Reserved 2024 @areegbedavid
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
