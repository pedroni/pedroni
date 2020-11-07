import React from 'react'
import styled from 'styled-components'

const Table = ({ children, ...props }) => {
  return (
    <StyledTable {...props}>
      {children}
    </StyledTable>
  )
}
const StyledTable = styled.table`
`
export default Table
