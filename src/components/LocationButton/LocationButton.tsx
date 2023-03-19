import { Button } from '@chakra-ui/react'
import { TbLocationFilled } from 'react-icons/tb'

export interface LocationButtonProps {
  setSelectPosition: any
}

const LocationButton = ({ setSelectPosition } : LocationButtonProps) => {
  return (
    <Button 
      colorScheme={'teal'} 
      onClick={() => {
        navigator.geolocation.getCurrentPosition((position) => {
          setSelectPosition([position.coords.latitude, position.coords.longitude])
        })
      }}
    >
      <TbLocationFilled />
    </Button>
  )
}

export default LocationButton