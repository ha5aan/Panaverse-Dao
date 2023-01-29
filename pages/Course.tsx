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
  <AccordionItem  >
    <h2>
      <AccordionButton bg={"rgb(233, 231, 231);"}>
        <Box as="span" flex='1' textAlign='center'>
       <Heading  fontSize={"2xl"}>Quarter I (Core) </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <Heading fontSize={"xl"}>CS-101: Object-Oriented Programming using TypeScript</Heading>
  
    <Text fontSize={"md"} fontWeight="bold" my={"1%"} > Duration: 13 Weeks</Text>

    <Text fontSize={"md"} fontWeight="bold" my={"1%"}>Course Description:</Text>

We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.

<Text fontSize={"md"} fontWeight="bold" my={"1%"}> Course Outline:</Text>
<Accordion>
<AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        HTML and CSS (Homework)
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <OrderedList spacing={3}>
        <ListItem>
          <Link href={"https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"}>Learn HTML by Hira Khan (Watch Recorded Videos)</Link>
        </ListItem>
        <ListItem>
          <Link href={"https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"}>Learn CSS Intro by Hira Khan (Watch Recorded Videos)

</Link>
        </ListItem>
      </OrderedList>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Web 3.0 and Metaverse Theory
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <OrderedList spacing={3}>
        <ListItem>
          <Link href={"https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"}>Introduction to Panaverse DAO</Link>
        </ListItem>
        <ListItem>
          <Link href={"https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"}>Web 3.0 User Guide

</Link>
        </ListItem>
      </OrderedList>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Complete Web 3 Assignments included in the Web 3 User Guide</Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <OrderedList spacing={3}>
        <ListItem>
          <Link href={"https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"}>Virtual and Augmented Metaverse User Guide</Link>
        </ListItem>
       
      </OrderedList>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Fundamentals of JavaScript (ECMAScript 2022 Language Specification)
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <OrderedList spacing={3}>
        <ListItem>
          <Link href={"https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"}>Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)</Link>
        </ListItem>
        <ListItem>
          <Link href={"https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"}>Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages


</Link>
        </ListItem>
        <ListItem>
          <Link href={"https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"}>JavaScript Book Code



</Link>
        </ListItem>
        <ListItem>
          <Link href={"https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"}>Getting Started Exercises with JavaScript and Node.js
</Link>
        </ListItem>
        <ListItem>
        Fundamentals of JavaScript and Node.js Quiz


        </ListItem>
        <ListItem>
        Topics Covered in the Quiz: <br/>
        Background of JavaScript and How to use JavaScript in Browser Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)

        </ListItem>
        <OrderedList>
<ListItem>
Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm: https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs: https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.
</ListItem>
<ListItem>
Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)
</ListItem>
<ListItem>
Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)
</ListItem>
<ListItem>
Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)
</ListItem>
<ListItem>
Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)
</ListItem>
<ListItem>
Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)
</ListItem>
<ListItem>
JavaScript promises, mastering the asynchronous
</ListItem>
</OrderedList>
        <ListItem>
        https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript
        </ListItem>
        <ListItem>
        New JavaScript Features in ECMAScript 2022 and 2021 https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg
        </ListItem>
      </OrderedList>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Object-Oriented Programming with TypeScript

        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <OrderedList spacing={3}>
        <ListItem>
        Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1
        </ListItem>
        <ListItem>
        Learning Repository https://github.com/panaverse/learn-typescript
        </ListItem>
        <ListItem>
        In Class Companion projects and articles for Learning TypeScript https://www.learningtypescript.com/
        </ListItem>
        <ListItem>
        Homework Project
        </ListItem>
        <ListItem>
        https://github.com/panaverse/typescript-node-projects
        </ListItem>
      </OrderedList>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        TypeScript for React

        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <OrderedList spacing={3}>
        <ListItem>
          <Link href={"https://profy.dev/article/react-typescript"}>Minimal TypeScript Crash Course For React With Interactive Code Exercises</Link>
        </ListItem>
    
      </OrderedList>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        TypeScript Quizzes
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <OrderedList spacing={3}>
        <ListItem>
        Fundamentals of TypeScript Quiz
        </ListItem>
        <ListItem>
        TypeScript Professional Proficiency Quiz


        </ListItem>
      </OrderedList>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Fundamentals of Version Control with Git (Recorded Videos)
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <OrderedList spacing={3}>
        <ListItem>
          <Link href={"https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF"}>
          Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</Link>
        </ListItem>
        <ListItem>
        Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther
        </ListItem>
        <ListItem>
        We will also cover these readings:

        </ListItem>
        <OrderedList>
          <ListItem>https://help.github.com/articles/markdown-basics/
      </ListItem>
      <ListItem>http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github
      </ListItem>
      <ListItem>http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences
      </ListItem>
      <ListItem>https://git-scm.com/book/en/v2/Git-Branching-Rebasing
      </ListItem>
      <ListItem>http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches
      </ListItem>

        </OrderedList>
        <ListItem>
        For practice: https://try.github.io/levels/1/challenges/1
        </ListItem>
        <ListItem>
        Homework:
        </ListItem>
        <OrderedList>
          <ListItem>https://www.datacamp.com/courses/introduction-to-git-for-data-science
      </ListItem>
      <ListItem>Git Cheatsheet https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html
      </ListItem>
      <ListItem>Git Quiz before the start of Quarter 2 with Total Questions: 60, Total Time: 75 minutes
      </ListItem>

        </OrderedList>
      </OrderedList>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

    </AccordionPanel>
  </AccordionItem>


</Accordion>
</Container>
</Fade>
</Box>
      </>
    )
  }