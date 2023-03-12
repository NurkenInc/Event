import { Box } from '@chakra-ui/react'

import { Navbar, Map, EventDetails, List } from '../components'

import './App.css'

function App() {
  return (
    <Box w={'100vw'} h={'100vh'}>
      <Box>
        <Navbar />
      </Box>
      <Box width={'100%'}>
        <Map />
      </Box>
    </Box>
  )
}

export default App
