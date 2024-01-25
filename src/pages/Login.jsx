import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import { Google } from "iconsax-react";

const Login = () => {
  return (
    <Box p={10} mt={{lg : "50px", md : "10%", sm : "50%", base : "40%"}}>
      <Flex justifyContent={"center"}>
        <Box>
          <Logo />
          <Text fontSize={"30px"}>Welcome User👋</Text>
          <Text fontSize={12} pb={5}>Please login in to your netflix account...</Text>
          <Box>
            <FormLabel>Email</FormLabel>
            <Input width={300} type="email" placeholder="you@gmail.com" borderRadius={10} border={"2px solid #fff"} />
          </Box>
          <Box py={5}>
            <FormLabel>Password</FormLabel>
            <Input width={300} type="password" placeholder="Shh...It's secret" borderRadius={10} border={"2px solid #fff"} />
          </Box>
          <Button bg={"#E50914"} color={"#fff"} _hover={"none"} width={"100%"}>Login</Button>
          <Button leftIcon={<Google color="#E50914" variant="Bold" />} color={"#E50914"} my={5} width={"100%"}>Login with Google</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
