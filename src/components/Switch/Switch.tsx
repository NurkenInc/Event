import React from 'react'

import { CheckBoxWrapper, CheckBox, CheckBoxCircle, CheckBoxLabel } from './styles'

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Switch = ({ id, label, checked, ...rest } : SwitchProps) => {
  return (
    <CheckBoxWrapper>
      <CheckBox checked={checked}>
        <input 
          id={id}
          type={'checkbox'}
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '32px',
            height: '20px',
            opacity: 0,
            zIndex: 2
          }}
          checked={checked}
          {...rest}
        />
        <CheckBoxCircle checked={checked} />
      </CheckBox>
      {label && <CheckBoxLabel htmlFor={id}>{label}</CheckBoxLabel>}
    </CheckBoxWrapper>
  )
}

export default Switch