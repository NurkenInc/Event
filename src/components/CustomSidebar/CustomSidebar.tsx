import React from 'react'
import { 
  Sidebar, 
  Menu, 
  MenuItem, 
  SubMenu,
  useProSidebar,
  menuClasses,
  MenuItemStyles
} from 'react-pro-sidebar'


const CustomSidebar = () => {
  return (
    <Sidebar>
      <Menu>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default CustomSidebar