import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchMovie from "../components/SearchMovie";
import axios from "axios";

const NewlyAdded = ({ text,s }) => {
  const api = "https://www.omdbapi.com/?i=tt3896198&apikey=8db82bfe";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      const fetchMovies = async () => {
          try {
              const response = await axios.get('http://www.omdbapi.com/', {
                  params: {
                      apikey: '8db82bfe',
                      s: s,
                      type: 'movie'
                  }
              });
              setMovies(response.data.Search);
              console.log(response.data.Search)
          } catch (error) {
              console.error('Error fetching movies:', error);
          }
      };

      fetchMovies();
  }, []);
  const posterApi = "http://img.omdbapi.com/?apikey=8db82bfe&";
  return (
    <Box id="new" pt={{ lg: "100px", md: "80px", sm: 10, base: "0px" }}>
      <Heading fontWeight={100}>{text}</Heading>
      <SearchMovie />
      <Grid
        gridTemplateColumns={{
          lg: "1fr 1fr 1fr 1fr",
          md: "2fr 2fr 2fr 2fr",
          sm: "1fr 1fr",
          base: "1fr 1fr",
        }}
        gap={10}
        my={10}
      >
        {
          movies.map((movie,key)=>{
            return(
            <Card key={key} image={movie.Poster} name={movie.Title} id={movie.imdbID} />
            )
          })
        }
      </Grid>
    </Box>
  );
};

export default NewlyAdded;
