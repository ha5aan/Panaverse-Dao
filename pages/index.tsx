import Head from 'next/head'
import CourseContent from './Components/CourseContent'
import HomePicture from './Components/HomePicture'



export default function Home() {
  return (
    <>
      <Head>
        <title>Panaverse DAO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/panaverse.png" />
      </Head>
    
<HomePicture/>
<CourseContent/>

   
    </>
  )
}
