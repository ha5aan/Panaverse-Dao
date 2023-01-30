import { Container,Box,Heading,Flex } from '@chakra-ui/react'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import styles from "../../styles/CoursePage.module.css"
const CourseContent = () => {
  return (
    <Box>
     
<Heading fontSize={"5xl"} className={styles.courseHeading}  mb={"2%"} mt={"1%"}><Fade  triggerOnce={true}> The Program in Nutshell</Fade></Heading>
        {/* </Container> */}
        <Container maxWidth={"4xl"} fontSize="xl" fontWeight={"medium"}>
      <Fade  triggerOnce={true}> In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the programs beginning. It resembles a cross between a corporate venture and an educational project.</Fade> 
        </Container>

    </Box>
  )
}

export default CourseContent