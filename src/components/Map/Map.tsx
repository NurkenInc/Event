import React, { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import {
  Box,
  Container,
  Heading,
  Text
} from '@chakra-ui/react'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'

export interface MapProps {
  selectPosition: any
}

const ResetCenterView = (props : any) => {
  const { selectPosition } = props
  const map = useMap()
  
  useEffect(() => {
    if(selectPosition && selectPosition.lat && selectPosition.lon) {
      map.setView(
        new L.LatLng(selectPosition.lat, selectPosition.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition])

  return null
}

const Map = ({ selectPosition } : MapProps) => {
  const [position, setPosition] = useState<number[]>([51.505, -0.09])

  const getLocation = () => {
    if(selectPosition && selectPosition.lat && selectPosition.lon) {
      return new L.LatLng(selectPosition.lat, selectPosition.lon)
    }
    return new L.LatLng(51.505, -0.09)
  }

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude])
    })
  }

  const getSelectPosition = () => {
    if(selectPosition && selectPosition.lat && selectPosition.lon) {
      return selectPosition
    }
    return {
      lat: position[0],
      lon: position[1]
    }
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <Box width={'100%'} height={'100vh'} zIndex={0} >
      <MapContainer center={new L.LatLng(position[0], position[1])} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=c26h5TAwECSsocmdzo5j"
        />
        <Marker position={getLocation()}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ResetCenterView selectPosition={getSelectPosition()} />
      </MapContainer>
    </Box>
  )
}

export default Map