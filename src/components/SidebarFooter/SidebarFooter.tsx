import React from 'react';
import { IoLogoGithub } from 'react-icons/io5'
import { Typography } from '../index'

import { 
  StyledButton,
  StyledCollapsedSidebarFooter, 
  StyledSidebarFooter, 
  url
} from './styles'

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  collapsed?: boolean
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ children, collapsed, ...rest }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px'
      }}
    >
      {collapsed ? (
        <StyledCollapsedSidebarFooter href={url} target={'_blank'}>
          <IoLogoGithub size={28} />
        </StyledCollapsedSidebarFooter>
      ) : (
        <StyledSidebarFooter {...rest}>
          <div style={{ marginBottom: '12px' }}>
            <IoLogoGithub size={30} />
          </div>
          <Typography fontWeight={600}>Pro Sidebar</Typography>
          <Typography variant={'caption'} style={{ letterSpacing: 1, opacity: 0.7 }}>
            V
          </Typography>
          <div style={{ marginTop: '16px' }}>
            <StyledButton href={url} target={'_blank'}>
              <Typography variant={'caption'} color={'#607489'} fontSize={600}>
                View code
              </Typography>
            </StyledButton>
          </div>
        </StyledSidebarFooter>
      )}
    </div>
  )
}

export default SidebarFooter