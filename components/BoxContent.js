import React from "react";
import styled from "styled-components";

const BoxContent = ({children}) => {
  return <StyledBoxContent>{children}</StyledBoxContent>;
};

const StyledBoxContent = styled.div`
  font-size: 16px;
  line-height: 28px;
  a {
    color: var(--color-primary-light)
  }
`;

export default BoxContent;
