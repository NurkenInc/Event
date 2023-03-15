import React from 'react'

import { StyledTypography } from './styles'

export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode
  fontWeight?: number | string
  color?: string
  fontSize?: number | string
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
}

const Typography: React.FC<TypographyProps> = ({ variant = 'body1', children, ...rest}) => {
  return (
    <StyledTypography variant={variant} {...rest}>
      {children}
    </StyledTypography>
  )
}

export default Typography