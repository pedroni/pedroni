import React from "react";
import styled from "styled-components";

/**
 * color primary, secondary
 */
const Title = ({ subTitle, title, color = "primary", direction = "left" }) => {
  return (
    <StyledTitleWrapper className={`${color} ${direction}`}>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
      <StyledTitle>{title}</StyledTitle>
    </StyledTitleWrapper>
  );
};

const StyledTitle = styled.div``;
const StyledSubTitle = styled.div``;

const StyledTitleWrapper = styled.div`
  margin-bottom: 32px;
  display: inline-flex;
  flex-direction: column;

  ${StyledTitle} {
    font-size: 32px;
    font-weight: 500;
    color: #f2f2f2;
    padding-bottom: 20px;
    position: relative;
    &::after,
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
    }
    &::before {
      height: 1px;
      background-color: rgba(255, 255, 255, 0.2);
    }
    &::after {
      height: 2px;
      width: 64px;
      background-color: var(--color-primary);
    }

    & > * {
      font-weight: 500;
      font-size: inherit;
    }
    @media(max-width: 1280px) {
      font-size: 26px;
    }
  }
  ${StyledSubTitle} {
    font-size: 18px;
    color: var(--color-primary);
    letter-spacing: 10px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  /**
  Estilos alternativos baseado nas props
  */
  &.secondary {
    ${StyledTitle} {
      &::after {
        background-color: var(--color-secondary);
      }
    }
    ${StyledSubTitle} {
      color: var(--color-secondary);
    }
  }
  &.right {
    justify-content: end;
    ${StyledTitle} {
      &::after {
        right: 0;
        left: auto;
      }
    }
  }
`;

export default Title;
