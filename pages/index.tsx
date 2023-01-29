import Head from 'next/head'

import { Inter } from '@next/font/google'

import HomePicture from './Components/HomePicture'
import CourseContent from './Components/CourseContent'
import Outcomes from './Components/Outcomes'
import RelevantLinks from './Components/RelevantLinks'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Panaverse DAO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <HomePicture/>
    <CourseContent/>
    <Outcomes/>
    {/* <RelevantLinks/> */}
   
    </>
  )
}
