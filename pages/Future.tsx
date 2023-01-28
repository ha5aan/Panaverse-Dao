import { Box, Container, Heading,Text } from '@chakra-ui/react'
import { Fade } from 'react-awesome-reveal'
import React from 'react'

const Future = () => {
  return (
    <Box>
      <Fade  delay={100}>
        <Container maxWidth={"2xl"} mt={"3%"} color="maroon">
            <Heading fontSize={"2xl"} textAlign="center">
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
            </Heading>
        </Container>
        </Fade>
        <Box height={"10"}/>
        <Fade delay={200}>
        <Container maxWidth={"3xl"} mt={"3%"} color="maroon">
            <Heading fontSize={"xl"} textAlign="center" >
                <Text>
            The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.</Text>
<Text>Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.
</Text>

            </Heading>
        </Container>
        </Fade>
    </Box>
  )
}

export default Future