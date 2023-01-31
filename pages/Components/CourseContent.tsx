import { Container,Box,Heading,Flex } from '@chakra-ui/react'
import React from 'react'
import { Fade,Slide } from 'react-awesome-reveal'
import styles from "../../styles/CoursePage.module.css"
const CourseContent = () => {
  return (
    <Box>
     <Fade>
<Heading fontSize={"5xl"} className={styles.courseHeading}  mb={"2%"} mt={"1%"}><> The Program in Nutshell</></Heading>
</Fade>
        {/* </Container> */}
        <Fade  triggerOnce={true}>
        <Container maxWidth={"4xl"} fontSize="xl" fontWeight={"medium"}>
      < > In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the programs beginning. It resembles a cross between a corporate venture and an educational project.</> 
        </Container>
        </Fade>
        <Flex mx={"10%"} mt={"2%"} justifyContent={"space-around"} wrap={"wrap"}>
          
            <Box mx={"2%"} my={"1%"} >
              <  >       
              <Slide triggerOnce={true}>
                 <Box className={styles.FlipCard}>
                  
  <Box className={styles.FlipCardInner}>
    <Box className={styles.FlipCardFront}>
        <Heading fontSize={"2xl"} padding={"3%"} alignContent={"center"} marginTop={"13%"}>
        Artificial Intelligence (AI) and Deep Learning Specialization
      </Heading>
    </Box>
    <Box className={styles.FlipCardBack}>
     <Container className={styles.backContent}>
     The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.     </Container>
    </Box>
  </Box>
</Box>
</Slide>
</>


</Box>


<Box mx={"2%"} my={"1%"}>
  <Slide direction='right'  triggerOnce={true} >
        <Box className={styles.FlipCard}>
  <Box className={styles.FlipCardInner}>
    <Box className={styles.FlipCardFront}>
        <Heading fontSize={"2xl"} padding={"3%"} alignContent={"center"} marginTop={"13%"}>
      Web 3.0 (Blockchain) and Metaverse Specialization
      </Heading>
    </Box>
    <Box className={styles.FlipCardBack}>
     <Container className={styles.backContent}>
     This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
     </Container>
    </Box>
  </Box>
  
</Box>
</Slide>



</Box>
<Box mx={"2%"} my={"1%"}>
  <Slide  triggerOnce={true}>
        <Box className={styles.FlipCard}>
  <Box className={styles.FlipCardInner}>
    <Box className={styles.FlipCardFront}>
        <Heading fontSize={"2xl"} padding={"3%"} alignContent={"center"} marginTop={"13%"}>
        Cloud-Native Computing Specialization
      </Heading>
    </Box>
    <Box className={styles.FlipCardBack}>
     <Container className={styles.backContent}>
     The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.

</Container>
    </Box>
  </Box>
</Box>
</Slide>


</Box>
<Box mx={"2%"} my={"1%"}>
  <Slide direction='right' triggerOnce={true}>
        <Box className={styles.FlipCard}>
  <Box className={styles.FlipCardInner} >
    <Box className={styles.FlipCardFront}>
        <Heading fontSize={"2xl"} padding={"3%"} textAlign={"center"} marginTop={"13%"}>
        Ambient Computing and IoT Specialization
      </Heading>
    </Box>
    <Box className={styles.FlipCardBack} >
     <Container className={styles.backContent}>
     The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.     </Container>
    </Box>
  </Box>
</Box>
</Slide>


</Box>
</Flex>
    </Box>
  )
}

export default CourseContent