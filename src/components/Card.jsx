import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PlayCircle } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to={"/movie/2"}>
      <Box
        as={motion.div}
        whileHover={{ boxShadow: "10px -10px 0px #fff" }}
        borderRadius={20}
      >
        <Image src="/img (1).png" borderTopRadius={20} width={"250px"} />
        <Text
          textAlign={"center"}
          fontSize={{ lg: 20, md: 20, sm: 15, base: 15 }}
          py={1}
        >
          Enola Holmes
        </Text>
        <Flex justifyContent={"center"}>
          <Button
            bg={"#fff"}
            leftIcon={<PlayCircle color="#E50914" variant="Bold" />}
            fontSize={{ lg: 12, md: 12, sm: 10, base: 10 }}
          >
            Watch Trailer
          </Button>
        </Flex>
      </Box>
    </Link>
  );
};

export default Card;
