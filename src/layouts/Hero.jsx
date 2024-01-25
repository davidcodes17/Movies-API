import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import PlayBtnCompo from '../components/PlayBtnCompo'
import ScrollDown from '../components/ScrollDown'

const Hero = () => {
  return (
    <Box borderRadius={40} mt={{lg : "120px", md : "100px", sm : "50px", base : "10px"}} px={{lg : 0, md : 0, sm : 10, base : 5}}>
        <Flex p={5} width={"fit-content"} mt={20} borderRadius={40}>
            <PlayBtnCompo />
        </Flex>
        <ScrollDown />
    </Box>
  )
}

export default Hero