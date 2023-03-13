import React, { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {
  Box,
  Container,
  Heading,
  Text
} from '@chakra-ui/react'
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [51.505, -0.09]

  return (
    <Box width={'100vw'} height={'100vh'}>
      <MapContainer center={[position[0], position[1]]} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=c26h5TAwECSsocmdzo5j"
        />
        <Marker position={[position[0], position[1]]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  )
}

export default Map