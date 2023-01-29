import { Container, Heading, List, ListItem, ListIcon,Box,Text } from '@chakra-ui/react'

import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'
import {IoIosSchool} from'react-icons/io'
const RelevantLinks = () => {
  return (
    <Box mt={"3%"}>
    <Container mb={"2%"} textAlign={"center"}>
         <Heading> Relevant Links </Heading>
    </Container>
 

<Container  maxWidth={"4xl"} mt={"2%"}>
<List spacing={3}>
    <Fade  triggerOnce={true}>

</Fade>
</List>
</Container>
</Box>
  )
}

export default RelevantLinks