import { Box, Button, Container, Flex, Heading,List,ListItem,Text, UnorderedList } from '@chakra-ui/react'
import { Fade } from 'react-awesome-reveal'
import React, { useState } from 'react'
import styles from "./../styles/future.module.css"
import Image from 'next/image'

const Future = () => {
  const[future,setFuture]=useState(false)
const changeHandler=()=>{
  console.log("newValue")
   var previousFutureValue:boolean = future;
   setFuture(!previousFutureValue)
}
  return (
    <Box className={styles.BackgroungHeightSet}>

       <Box className={`${future ? styles.ancientBox : ' '}`}>
        <Flex justifyContent={"space-evenly"} mt="2%" flexDirection={["column","row"]} >
          <Box width={["90%","30%"]}  textAlign="center"  className={`${styles.flexorderweb1} ${future ? styles.fadeclassLeft : ' '}`}>
<Heading>What was Web 1 </Heading>
<Text textAlign={"left"} mx={"2%"} mt="2%">
It was only meant to make documents available, of which you could only read and not make changes. Web 1.0 was filled with static sites that only render resources to its interface that users can read.
</Text>
<Heading fontSize={"xl"} textAlign={"center"} >
  Features
</Heading>
< UnorderedList px={"5%"} spacing={1} mb={"2%"} textAlign="left">
  <ListItem>
  At the web 1.0 stage, the internet only offered readability.

  </ListItem>
  <ListItem>
  It’s made up of static pages connected to a system via hyperlinks
  </ListItem>
  <ListItem>
  It has HTML 3.2 elements like frames and tables
  </ListItem>
  <ListItem>
  HTML forms get sent through e-mail

  </ListItem>
  <ListItem>
  The content comes from the server &apos;s filesystem, not a relational database management system

  </ListItem>
  <ListItem>
  It features GIF buttons and graphics

  </ListItem>

</UnorderedList>
Take a real-world dictionary, digitize everything in it, and make it accessible to people online to look at (but not be able to react to it). Boom. That’s Web 1.0.



          </Box>
          <Box width={["90%","30%"]} pt="10%"  textAlign="center"  className={`${styles.flexorderweb3} ${future ? styles.futureOfMetaverse : ' '}`}>
          <Heading >Future of Metaverse </Heading>
      <Text color={"maroon"} fontWeight="bold"> Are You Ready ?</Text>
      <Button bg={"maroon"} color={"white"} onClick={()=>changeHandler()}>Yes I am</Button>
      <Text fontSize={"small"} fontWeight={"bold"} mt="1%"> For previous Tecnology keep reading</Text>
          </Box>
          <Box width={["90%","30%"]} textAlign="center" className={`${styles.flexorderweb2} ${future ? styles.fadeclassRight : ' '}`}>
          <Heading>What is Web 2 </Heading>
          <Text textAlign={"left"} mx={"2%"} mt="2%">
          If Web 1.0 was called “the read-only Web,” Web 2.0 is known as “the participative social Web.” Web 2.0 is a better, more enhanced version of its predecessor, incorporating web browser technologies such as JavaScript frameworks.
          </Text>
<Heading fontSize={"xl"} textAlign={"center"} >
  Features
</Heading>
< UnorderedList px={"5%"} spacing={1} textAlign="left" mb={"2%"}>
  <ListItem>
  It offers free information sorting, allowing users to retrieve and classify data collectively
  </ListItem>
  <ListItem>
  It contains dynamic content that responds to the user’s input
  </ListItem>
  <ListItem>
  It employs Developed Application Programming Interfaces (API)
  </ListItem>
  <ListItem>
  It encourages self-usage and allows forms of interaction

  </ListItem>
  <ListItem>
  It’s used by society at large and not limited to specific communities.

  </ListItem>

</UnorderedList>
Mobile Internet access and the rise of social networks have contributed to a dramatic upturn in Web 2.0’s growth. This explosion is also fueled by the rampant popularity of mobile devices such as Android-powered devices and iPhones. In addition, Web 2.0 &apos;s growth made it possible for apps such as TikTok, Twitter, and YouTube to expand and dominate the online landscape.




          </Box>
        </Flex>
       </Box>
       <Fade>
    <Box className={`${styles.backgroundcolour}  ${future ?  styles.showItems: styles.hideItems } `} pb="10%">
    
      
<Box display={"flex"} pt={"2%"} justifyContent="space-around" alignItems={"center"} flexDirection={["column"]} >
<Box textAlign={"center"} whiteSpace={"break-spaces"}><Heading mb={"2%"} textDecoration="underline" color={"silver"}>Future Is Here! </Heading>
      <Container maxWidth={"4xl"}  color={"white"}>  The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Container>
      
      </Box>
      
      <Box display={"flex"} my="5%" justifyContent={"center"}  alignItems="center"  fontSize={["sm","medium"]} className={styles.metaverse} >
        <Box width={"60%"} color="white">
        The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.
        </Box>
        
<Box className={styles.borderfix} height={["200px","auto"]} width={["90px","auto"]}>
      <Image src={"/halfearth2.png"} height={200} width={200} className={styles.imageAnimate} alt=""/>
      <Image src={"/peoplewatching.png"} height={100} width={100} className={styles.watchingEarth} alt=""/>
      </Box>
      </Box>
      
      <Box display={"flex"} my="5%" justifyContent={"center"} alignItems="center" className={styles.borderCheck} >
      <Box  height={["200px","auto"]} width={["90px","auto"]} alignSelf="center">
<Image src={"/Web.svg"} height={200} width={300} className={styles.WebAnimate} alt=""/>

      </Box>
        <Box width={"60%"} color="white" fontSize={["sm","medium"]}>
        Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.
        </Box>

      </Box>

      </Box>
      
    </Box>
    </Fade>
    </Box>
  )
}

export default Future