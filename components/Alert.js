import React from 'react'
import styled from 'styled-components'

const Alert = ({ children, ...props }) => {
  return (
    <StyledAlert {...props}>
      {children}
    </StyledAlert>
  )
}

const StyledAlert = styled.div`
  width: 100%;
  display: block;
  padding: 16px 16px;
  border: var(--input-border);
  color: inherit;
`

export default Alert
