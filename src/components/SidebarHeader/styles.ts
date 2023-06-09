import styled from '@emotion/styled'

export const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%
    overflow: hidden
  }
`

export const StyledLogo = styled.div<{ rtl?: boolean }>`
  width: 35px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  ${({ rtl }) => 
    rtl 
      ? `
        margin-left: 10px;
        margin-right: 4px;
      `
      : `
        margin-right: 10px;
        margin-left: 4px;
      `
  }
`