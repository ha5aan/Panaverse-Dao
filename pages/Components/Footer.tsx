import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "../../styles/Footer.module.css"
import {
  Box,
    HStack,
    } from '@chakra-ui/react'
    import { AiFillFacebook, AiFillGithub, AiFillTwitterSquare, AiFillYoutube, AiOutlineFacebook, AiOutlineGithub, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'


const Footer = () => {
  return (
    <Box as="footer"  role="contentinfo"  bg={"rgb(233, 231, 231)"} className={styles.fixPosition}>
    <HStack className={styles.NavbarBackground} >
  
    <Box className={styles.tabMenu} >
     <Link href={"/"}> Panaverse DAO </Link>
    </Box>
   
      <Box >
      <Image src={"/panaverse.png"} className={styles.imageSet} height={40} width={70} alt="Company Image" />
    </Box>
    
    <Box className={styles.tabMenu} >
    <HStack > <Box>All rights reserved </Box> 
    <Box> <Link href={"https://www.facebook.com/groups/panaverse"} target="_blank">< AiFillFacebook color='blue'/> </Link></Box> 
     <Box><Link href={"https://www.youtube.com/@panaverse/streams"} target="_blank"><AiFillYoutube color='red'/></Link></Box> 
      <Box> <Link href={"https://twitter.com/Panaverse_edu"} target="_blank"><AiFillTwitterSquare color='blue'/></Link></Box> 
       <Box><Link href={"https://github.com/panaverse"} target="_blank"> <AiFillGithub color='black'/> </Link></Box> </HStack>
    </Box>
  </HStack>
  </Box>

  )
}

export default Footer