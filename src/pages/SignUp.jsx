import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../components/Logo";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, provider } from "../configuration/firebase-config";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSignIn = async () => {
    try {
      const { email, password } = form;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      localStorage.setItem("user", data.user.displayName);
      window.location.replace("/home");
    } catch (err) {
      console.log(err);
    }
  };

  const googleSignIn = () => {
    signInWithPopup(firebaseAuth, provider).then((data) => {
      console.log(data.user.email);
      localStorage.setItem("user", data.user.displayName);
      window.location.replace("/home");
    });
  };
  return (
    <Box p={10} mt={{ lg: "50px", md: "10%", sm: "50%", base: "40%" }}>
      <Flex justifyContent={"center"}>
        <Box>
          <Logo />
          <Text fontSize={"30px"}>Welcome User👋</Text>
          <Text fontSize={12} pb={5}>
            Please SignUp in to your netflix account...
          </Text>
          <Box>
            <FormLabel>Email</FormLabel>
            <Input
              width={300}
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              type="email"
              placeholder="you@gmail.com"
              borderRadius={10}
              border={"2px solid #fff"}
            />
          </Box>
          <Box py={5}>
            <FormLabel>Password</FormLabel>
            <Input
              width={300}
              type="password"
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
              placeholder="Shh...It's secret"
              borderRadius={10}
              border={"2px solid #fff"}
            />
          </Box>
          <Button
            onClick={handleSignIn}
            bg={"#E50914"}
            color={"#fff"}
            _hover={"none"}
            width={"100%"}
          >
            SignUp
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignUp;
