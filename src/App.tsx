import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Page1 } from './pages/page1'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Page1 />
    </ChakraProvider>
  )
}
