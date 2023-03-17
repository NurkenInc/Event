import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { 
  Sidebar, 
  Menu, 
  MenuItem, 
  SubMenu,
  useProSidebar,
  menuClasses,
  MenuItemStyles
} from 'react-pro-sidebar'
import {
  Switch,
  Badge,
  SidebarFooter,
  SidebarHeader,
  Typography,
  EventCardList
} from '../index'
import { hexToRgba, Theme, themes } from './styles'

const CustomSidebar : React.FC = () => {
  const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar()

  const [hasImage, setHasImage] = useState<boolean>(false)
  const [theme, setTheme] = useState<Theme>('light')
  
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? 'dark' : 'light')
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasImage(e.target.checked)
  }

  const menuItemStyle: MenuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color
      }
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9'
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0 
          ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1) : 'transparent'
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color
      },
      '&:hover': {
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
        color: themes[theme].menu.hover.color
      }
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined
    })
  }

  return (
    <Box display={'flex'} flexDirection={'column'} h={'100%'} w={'100%'}>
      <Sidebar
        image={'https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg'}
        breakPoint={undefined}
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
        rootStyles={{
          color: themes[theme].sidebar.color
        }}
        style={{ height: '100%', width: '100%' }}
      >
        <Box flex={1} marginBottom={'32px'}>
          <SidebarHeader style={{ marginBottom: '24px', marginTop: '16px' }} />
          <Box style={{ flex: 1, marginBottom: '32px' }}>
            <Box padding={'0 24px'} marginBottom={'8px'}>
              <Typography 
                variant={'body2'}
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px'}}
              >
                General
              </Typography>
            </Box>
            <Menu menuItemStyles={menuItemStyle}>
              <MenuItem>Create event</MenuItem>
              <MenuItem>Your events</MenuItem>
            </Menu>
            <Typography 
                variant={'body2'}
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px'}}
              >
                Events
            </Typography>
            <Menu>
              <SubMenu
                label='Avaivable events'
              >
                <EventCardList />
              </SubMenu>
            </Menu>
          </Box>
          {/* <SidebarFooter collapsed={collapsed} /> */}
        </Box>
      </Sidebar>
    </Box>
  )
}

export default CustomSidebar