import { Box, Button, Container, Heading,Text } from '@chakra-ui/react'
import { Fade } from 'react-awesome-reveal'
import React, { useState } from 'react'
import styles from "./../styles/future.module.css"
import Image from 'next/image'

const Future = () => {
  const[future,setFuture]=useState(false)
  return (
    <Box className={`${styles.backgroundcolour}  ${styles.hideItems}`}>
      {/* <Box className={styles.stylinganimatingCircle} /> */}
<Box display={"flex"} pt={"2%"} justifyContent="space-around">
<Box className={styles.borderfix}>
      <Image src={"/halfearth2.png"} height={200} width={200} className={styles.imageAnimate}/>
      <Image src={"/peoplewatching.png"} height={100} width={100} className={styles.watchingEarth}/>
      </Box>
<Box textAlign={"center"} whiteSpace={"break-spaces"}><Heading color={"silver"}>Future of Metaverse </Heading>
      <Text> Are You Ready ?</Text>
      <Button bg={"black"} color={"blue.600"}>Yes I am</Button>
      </Box>
      <Box>
      <Box backgroundColor={"transparent"}>
      <Image src={"/Web.svg"} height={5000} width={300} className={styles.WebAnimate}/>
      </Box>
      </Box>
      </Box>
      {/* <Fade  delay={100}>
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
        </Fade> */}
    </Box>
  )
}

export default Future