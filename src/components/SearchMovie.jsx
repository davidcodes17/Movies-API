import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { SearchFavorite1 } from "iconsax-react";
import React from "react";

const SearchMovie = () => {
  return (
    <Box>
      <Flex
        flexWrap={{ lg: "none", md: "none", sm: "wrap", base: "wrap" }}
        gap={{lg : 0, md : 0, sm : 5, base : 5}}
        borderRadius={20}
        my={5}
      >
        <Input
          width={{ lg: "90%", md : "90%", sm: "100%", base : "100%" }}
          placeholder="Search Any Movie...."
          border={"2px solid #fff"}
          borderRadius={20}
        />
        <Button
          leftIcon={<SearchFavorite1 />}
          width={{ lg: "10%", md: "200px", sm: "100%", base: "100%" }}
          bg={"#E50914"}
          color={"#fff"}
          _hover={"none"}
          borderRadius={20}
        >
          Search
        </Button>
      </Flex>
    </Box>
  );
};

export default SearchMovie;
