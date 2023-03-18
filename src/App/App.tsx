import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import L from 'leaflet'

import { SearchBar, Map, CustomSidebar } from '../components'

import './App.css'

function App() {
  const [selectPosition, setSelectPosition] = useState<L.LatLngExpression>([51.505, -0.09])

  return (
    <Box w={'100vw'} h={'100vh'} display={'flex'} flexDirection={'row'}>
      <Box w={'20vw'}>
        <CustomSidebar />
      </Box>
      <Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box w={'60vw'} position={'absolute'} top={'5px'} zIndex={500}>
            <SearchBar setSelectPosition={setSelectPosition} />
          </Box>
        </Box>
        <Box id="map" w={'80vw'}>
          <Map selectPosition={selectPosition} />
        </Box>
      </Box>
    </Box>
  )
}

export default App
