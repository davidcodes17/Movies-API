import { Box, Flex, Text } from "@chakra-ui/react";
import { Play, Star, Star1 } from "iconsax-react";
import React from "react";

const PlayBtnCompo = () => {
  return (
    <Box>
        <Text fontSize={{lg : 35, md : 35, sm : 25, base : 30}}>Where Entertainment <br /> Never Ends📽️🎞️🍿🎥</Text>
      <Flex alignItems={"center"} gap={5}>
        <Play size={80} variant="Bulk" color="#E50914" />
        <Text fontSize={{lg : 45, md : 35, sm : 25, base : 20}}>Watch Anywhere</Text>
      </Flex>
      <Flex gap={5} px={3} pt={4} justifyContent={{lg  : "left", md : "left", sm : "center", base: "center"}}>
        <Star1 variant="Bold" color="#E50914" />
        <Star1 variant="Bold" color="#E50914" />
        <Star1 variant="Bold" color="#E50914" />
        <Star1 variant="Bold" color="#E50914" />
        <Star1 variant="Bold" color="#E50914" />
      </Flex>
    </Box>
  );
};

export default PlayBtnCompo;
