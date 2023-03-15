import styled from '@emotion/styled'

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const CheckBoxLabel = styled.label`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 13px;
  cursor: pointer;
`

export const CheckBox = styled.div<{ checked?: boolean }>`
  position: relative;
  cursor: pointer;
  width: 32px;
  height: 20px;
  border-radius: 30px;

  background-color: ${({ checked }) => (checked ? '#0ed693' : '#dde0e7' )}
`

export const CheckBoxCircle = styled.div<{ checked?: boolean }>`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #fff;
  transition: left 0.2s;

  ${({ checked }) => (checked ? 'left: 15px' : '')}
`