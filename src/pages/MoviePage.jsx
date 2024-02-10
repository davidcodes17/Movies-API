import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import { Play, Star1 } from "iconsax-react";
import Card from "../components/Card";
import Footer from "../layouts/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get("http://www.omdbapi.com/", {
          params: {
            apikey: "8db82bfe",
            i: id,
            plot: "full",
          },
        });
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, []);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://www.omdbapi.com/", {
          params: {
            apikey: "8db82bfe",
            s: "Action",
            type: "movie",
          },
        });
        setMovies(response.data.Search);
        console.log(response.data.Search);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Box>
      <Header />
      <Flex
        px={10}
        pt={"100px"}
        gap={{ lg: 40, md: "30px", sm: 10, base: 10 }}
        flexWrap={{lg : "nowrap",md : "nowrap",sm :"wrap", base : "wrap"}}
      >
        <Flex justifyContent={"center"}>
          <Image
            borderRadius={40}
            src={movie.Poster}
            width={{ lg: "40vw", md: "100vw", sm: "100%", base: "100%" }}
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
          <Heading fontSize={{ lg: 50, md: "40px", sm: "40px", base: "30px" }}>
            {movie.Title}
          </Heading>
          <Text fontSize={12} py={4} width={{ lg: 520 }}>
            {movie.Plot}
          </Text>
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
          {movies.map((mov, key) => {
            return (
              <Card
                key={key}
                image={mov.Poster}
                name={mov.Title}
                id={mov.imdbID}
              />
            );
          })}
        </Grid>
        <Footer />
      </Box>
    </Box>
  );
};

export default MoviePage;
