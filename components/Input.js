import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const Input = ({ label, name, ...props }) => {
  const [active, setActive] = useState(props.defaultValue ? true : false)
  const inputRef = useRef()

  const onFocus = ev => setActive(true)
  const onBlur = ev =>
    ev.target.value.trim() ? setActive(true) : setActive(false)

  return (
    <StyledInputWrapper className={active ? 'active' : undefined}>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        onFocus={onFocus}
        onBlur={onBlur}
        ref={inputRef}
        id={name}
        name={name}
        {...props}
      ></StyledInput>
    </StyledInputWrapper>
  )
}

const StyledInput = styled.input`
  appearance: none;
  border: var(--input-border);
  background: transparent;
  height: var(--input-height);
  padding-left: 24px;
  padding-right: 24px;
  color: white;
  font-size: 16px;
  font-family: inherit;
  display: block;
  width: 100%;
  padding-top: 16.8px;
  transition: 0.3s;
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
  .active > & {
    border-bottom-color: var(--color-primary);
    border-bottom-width: 2px;
  }
`

const StyledLabel = styled.label`
  position: absolute;
  font-size: 16px;
  color: white;
  left: 24px;
  top: calc(var(--input-height) * 0.3);
  transition: 0.3s;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const StyledInputWrapper = styled.div`
  position: relative;
  line-height: 24px;
  text-align: left;
  &.active {
    ${StyledLabel} {
      top: 2px;
      font-size: 12px;
      opacity: 0.8;
    }
  }
`

export default Input
