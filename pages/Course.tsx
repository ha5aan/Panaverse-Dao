import { Accordion, Text,AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Heading, List, ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import styles from "../styles/Course.module.css"

export default function Home() {
    return (
      <>
      <Box className={styles.adjustingFooter}>
      <Container textAlign={"center"} mt={"2%"}>
      <Heading> <Fade> Detailed Course Syllabus</Fade></Heading>
      </Container>
      <Fade delay={100}>
      <Container maxWidth={"4xl"} alignContent={"center"}>
      <Accordion mt={"3%"}>



</Accordion>
</Container>
</Fade>
</Box>
      </>
    )
  }