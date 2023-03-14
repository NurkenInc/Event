import { Box } from '@chakra-ui/react'

import { Navbar, Map, EventDetails, List } from '../components'

import './App.css'

function App() {
  return (
    <Box w={'100vw'} h={'100vh'}>
      <Box>
        <Navbar />
      </Box>
      <Box display={'flex'} flexDirection={'row'}>
        <Map />
        <List />
      </Box>
    </Box>
  )
}

export default App
