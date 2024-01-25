import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import Card from '../components/Card'

const NewlyAdded = ({text}) => {
  return (
    <Box id='new' pt={{lg : "100px",md : "80px", sm  :10 , base : "0px"}}>
        <Heading fontWeight={100}>{text}</Heading>
        <Grid gridTemplateColumns={{lg : "1fr 1fr 1fr 1fr", md : "2fr 2fr 2fr 2fr", sm : "1fr 1fr", base : "1fr 1fr"}} gap={10} my={10}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
    </Box>
  )
}

export default NewlyAdded