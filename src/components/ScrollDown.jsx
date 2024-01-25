import { Box, Flex, Link } from "@chakra-ui/react";
import { ArrowDown } from "iconsax-react";
import React from "react";

const ScrollDown = () => {
  return (
    <Flex justifyContent={'center'}>
      <Box
        borderRadius={40}
        position={"absolute"}
        mt={10}
        as={Link}
        href="#new"
      >
        <Box
          bg={"transparent"}
          p={3}
          backdropFilter={"blur(20px)"}
          width={"fit-content"}
          borderRadius={40}
          cursor={"pointer"}
        >
          <ArrowDown color="#E50914" />
        </Box>
      </Box>
    </Flex>
  );
};

export default ScrollDown;
