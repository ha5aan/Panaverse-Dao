import { Box, Button, Container, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Admissions = () => {
  return (
   <Box style={{"minHeight":" calc( 100vh - 50px)"}}>
    <Heading fontSize={"3xl"}  textAlign={"center"} mb={"2%"} mt={"2%"}>Details regarding Admissions are as follows</Heading>
    <Fade delay={100} >
<Container maxWidth={"2xl"}>
    
<Heading  fontSize={"xl"} my={"1%"}>
Why take this course?
</Heading>
The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.

</Container>
</Fade>
<Fade delay={200}>
<Container maxWidth={"2xl"}>
<Heading  fontSize={"xl"} my={"1%"}>
Duration and timing of Course?
</Heading>
This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
</Container>
</Fade>
<Fade delay={400}>
<Container maxWidth={"2xl"} mt={"2%"}>
<Heading fontSize={"xl"}> For admissions click here :<hr/> <Link   href={"https://www.piaic.org/"} > <Container textAlign={"center"}><Button mt={"2%"} width={100} bg={"#FF6666"} color={"black"}> Apply</Button></Container> </Link>  </Heading>
</Container>
</Fade>
   </Box>
  )
}

export default Admissions