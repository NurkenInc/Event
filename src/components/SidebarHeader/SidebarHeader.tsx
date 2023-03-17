import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import { useProSidebar } from 'react-pro-sidebar'

import { Typography } from '../index'

import { StyledSidebarHeader, StyledLogo } from './styles'

import Icon from '../../../public/event.png'

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ children, ...rest}) => {
  const { rtl } = useProSidebar()

  return (
    <StyledSidebarHeader {...rest}>
      <Box display={'flex'} alignItems={'center'}>
        <StyledLogo rtl={rtl}><Image src={Icon} /></StyledLogo>
        <Typography variant='subtitle1' fontWeight={700} color='#0098e5'>
          Event
        </Typography>
      </Box>
    </StyledSidebarHeader>
  )
}

export default SidebarHeader