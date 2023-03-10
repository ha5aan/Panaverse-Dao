import React from 'react'
import styles from "../../styles/HomeTitle.module.css"
import { Slide } from "react-awesome-reveal";

import {Box, Flex, Heading} from '@chakra-ui/react'
const HomePicture = () => {
  return (
    <Box  h={['calc(30vh)','calc(30vh)','calc(50vh)','calc(80vh)']} className={styles.backgroundImageSet}  overflow="hidden">
         <Flex justifyContent={"space-between"}>
                <Box className={styles.mainHeadingSet}  >
        <Slide> <Heading fontSize={["xs","xs","xl","4xl","5xl"]}>
<> Certified Web3 and Metaverse Developer </>
        </Heading> </Slide>
        </Box>


        <Box className={styles.mainHeadingSet}  >
        <Slide direction='right'> <Heading fontSize={["xs","xs","xl","4xl","5xl"]}>
       < > In Karachi, Lahore, Islamabad, and Peshawar </>       </Heading>
       </Slide>
        </Box>
        </Flex> 
        
     </Box>
  )
}

export default HomePicture