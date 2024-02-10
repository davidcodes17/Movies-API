import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import NewlyAdded from "../layouts/NewlyAdded";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <Box>
      <Box
        p={{lg : 10, md : 10, sm : 5, base : 5}}
        bgImage={"url('/img (10).png')"}
        bgRepeat={'no-repeat'}
        height={{lg : "100vh", md : "100vh", sm : "100vh", base : "70vh"}}
        color={"#fff"}
      >
        <Header />
        <Hero />
      </Box>
      <Box p={{lg : 10,md : 10, sm : 5, base : 5}}>
        <NewlyAdded text={"Newly Added"} s={"Action"} />
      </Box>
      <Box p={{lg : 10,md : 10, sm : 5, base : 5}}>
        <NewlyAdded text={"Movies"} s={"Comedy"} />
          <Footer />
      </Box>
    </Box>
  );
};

export default Home;
