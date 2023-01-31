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
      <Fade>
         <Heading> Relevant Links </Heading>
         </Fade>
    </Container>
 

<Container  maxWidth={"4xl"} mt={"2%"}>
<List spacing={3}>
    <Fade>
    <ListItem>
<ListIcon as={IoIosSchool} color='green' />
 <Link href={"https://www.piaic.org/"} target="_blank">Admission Website
 </Link>
</ListItem>
</Fade>
<Fade>
<ListItem>
<ListIcon as={AiOutlineFacebook} color='blue' />
<Link href={"https://www.facebook.com/groups/panaverse"} target="_blank"> Panaverse Facebook Group </Link> 
</ListItem>
</Fade>
<Fade>
<ListItem>
<ListIcon as={AiOutlineYoutube} color='red' />
<Link href={"https://www.youtube.com/@panaverse/streams"} target="_blank">
Panaverse Youtube Channel</Link>
</ListItem>
</Fade>
<Fade>
<ListItem>
<ListIcon as={AiOutlineTwitter} color='blue' />
<Link href={"https://twitter.com/Panaverse_edu"} target="_blank">
    Panaverse Twitter
</Link>
</ListItem>
</Fade>
<Fade>
<ListItem>
<ListIcon as={AiOutlineGithub} color='black' />
<Link href={"https://github.com/panaverse"} target="_blank">
Github Repositories
</Link>

</ListItem>
</Fade>
</List>
</Container>
</Box>
  )
}

export default RelevantLinks