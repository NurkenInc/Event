import React from 'react'

import { StyledBadge } from './styles'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  variant?: 'info' | 'success' | 'warning' | 'danger'
  shape?: 'circle' | 'rounded'
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'info',
  shape = 'rounded',
  ...rest
}) => {
  return (
    <StyledBadge variant={variant} shape={shape} {...rest}>
      {children}
    </StyledBadge>
  )
}

export default Badge