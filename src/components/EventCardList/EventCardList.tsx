import React from 'react'
import {
  Box
} from '@chakra-ui/react'

import { EventCard } from '../index'

const EventCardList = () => {
  return (
    <Box>
      <EventCard />
      <EventCard />
      <EventCard />
    </Box>
  )
}

export default EventCardList