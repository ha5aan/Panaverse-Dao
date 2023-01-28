import React from 'react'
import Image from 'next/image'
import { Stack, HStack, VStack,Box } from '@chakra-ui/react'
import styles from "../../styles/Navbar.module.css"
import Link from 'next/link'
const NAvbar = () => {
  return (
    <HStack className={styles.NavbarBackground} >
    <Box >
      <Image src={"/panaverse.png"} className={styles.imageSet} height={30} width={100} alt="Company Image" />
    </Box>
    <Box className={styles.tabMenu} >
     <Link href={"/"}> About Us </Link>
    </Box>
    <Box className={styles.tabMenu} >
    <Link href={"/Course"}>  Courses </Link>
    </Box>
    <Box className={styles.tabMenu} >
    <Link href={"/Admissions"}>  Admissions</Link>
    </Box>
    <Box className={styles.tabMenu} >
    <Link href={"/Future"}>   Future</Link>
    </Box>
  </HStack>
  )
}

export default NAvbar