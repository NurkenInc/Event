import styled from '@emotion/styled'
import { BadgeProps } from './Badge'

export const StyledBadge = styled.div<BadgeProps>`
  min-width: 18px;
  min-height: 18px;
  display: flex;
  align-items: center;
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '16px')};
  padding: ${({ shape }) => (shape === 'circle' ? '0' : '0 6px')};
  font-size: 11px;
  font-weight: 600;
  ${({ variant }) => {
    switch (variant) {
      case 'info':
        return `
          background-color: #048acd;
          color: #fff
        `
      case 'success':
        return `
          background-color: #0cbb34;
          color: #fff
        `
      case 'danger':
        return `
          background-color: #fb3939;
          color: #fff
        `
      case 'warning':
        return `
          background-color: #e25807;
          color: #fff
        `
    }
  }}
`