import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PlayCircle } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, name, id }) => {
  return (
    <Link to={"/movie/"+id}>
      <Box
        height={{lg :400, md : 300, sm : 350}}
        as={motion.div}
        whileHover={{ boxShadow: "10px -10px 0px #fff" }}
        borderRadius={20}
        // bg={"red"}
      >
        <Image
          src={image}
          borderTopRadius={20}
          width={"100%"}
          height={200}
          objectFit={"cover"}
        />
        <Box p={5}>
          <Text
            textAlign={"center"}
            fontSize={{ lg: 20, md: 20, sm: 15, base: 15 }}
            py={1}
          >
            {name}
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
      </Box>
    </Link>
  );
};

export default Card;
