import { Box, Container, Heading,Text, List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList, } from '@chakra-ui/react'
  import { AiOutlineFire } from "react-icons/ai";
import React from 'react'
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const Outcomes = () => {
  return (
    <Box mt={"3%"}>
        <Container mb={"2%"} textAlign={"center"}>
             <Heading> Outcomes </Heading>
        </Container>
        < >
   <Container  maxWidth={"4xl"} fontSize="md" fontWeight={"medium"}>
   The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of <Text as={"b"} > $50 </Text>per hour <Text as={"b"}> ($96,000 per year) </Text>. This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.
   </Container>
   </>
   <  >
   <Container  maxWidth={"4xl"} mt={"2%"}>
   <List spacing={3}>
  
</List>
</Container>
</>
    </Box>
  )
}

export default Outcomes