"use client"
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import NAvbar from './Components/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return<>
      <ChakraProvider>
        <NAvbar/>
 <Component {...pageProps} />
 </ChakraProvider>
 </>
}
