import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../layouts/Header";
import { Play, Star1 } from "iconsax-react";
import Card from "../components/Card";
import Footer from "../layouts/Footer";

const MoviePage = () => {
  return (
    <Box>
      <Header />
      <Flex px={10} pt={"100px"} gap={{lg : 40, md : "30px", sm : 10, base : 10}} flexWrap={"wrap"}>
        <Flex justifyContent={"center"}>
          <Image
            borderRadius={40}
            src="/img (3).png"
            width={{ lg: "30vw", md: "30vw", sm: "100vw", base: "100%" }}
            height={"80vh"}
            objectFit={"cover"}
          />
        </Flex>
        <Box>
          <Flex alignItems={"center"} gap={5}>
            <Play size={100} variant="Bulk" color="#E50914" />
            <Text fontSize={{ lg: 45, md: 35, sm: 25, base: 25 }}>
              Watch Trailer
            </Text>
          </Flex>
          <Heading fontSize={{lg : 50, md : "40px", sm : "40px",base : "30px"}}>
            Rivernile Season 2 <br /> Episode 23
          </Heading>
          <Text fontSize={12} py={4} width={{lg : 520}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            amet doloribus deserunt magnam soluta quidem culpa fuga modi
            repellat quod. Repellendus blanditiis, modi, laborum earum ullam
            perferendis autem dolores vero mollitia, alias illo velit!
            Voluptates maxime quidem laborum consequatur voluptatibus. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Placeat amet
            doloribus deserunt magnam soluta quidem culpa fuga modi repellat
            quod. Repellendus blanditiis, modi, laborum earum ullam perferendis
            autem dolores vero mollitia, alias illo velit! Voluptates maxime
            quidem laborum consequatur voluptatibus.
          </Text>
          <Flex alignItems={"center"}>
            <Text fontSize={{lg : 25, md : 20, sm : 20, base : "16px"}}>Ratings : </Text>
            <Flex
              gap={5}
              px={3}
              justifyContent={{
                lg: "left",
                md: "left",
                sm: "center",
                base: "center",
              }}
            >
              <Star1 variant="Bold" color="#E50914" />
              <Star1 variant="Bold" color="#E50914" />
              <Star1 variant="Bold" color="#E50914" />
              <Star1 variant="Bold" color="#E50914" />
              <Star1 variant="Bold" color="#E50914" />
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Box px={10} py={20}>
        <Heading py={10}>Related Movies</Heading>
        <Grid
          gridTemplateColumns={{
            lg: "1fr 1fr 1fr 1fr",
            md: "2fr 2fr 2fr 2fr",
            sm: "1fr 1fr",
            base: "1fr 1fr ",
          }}
          gap={10}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
        <Footer />
      </Box>
    </Box>
  );
};

export default MoviePage;
