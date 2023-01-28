import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import NAvbar from './Components/navbar'
import Footer from './Components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return<>
      <ChakraProvider>
        <NAvbar/>
 <Component {...pageProps} />
 <Footer/>
 </ChakraProvider>
 </>
}
