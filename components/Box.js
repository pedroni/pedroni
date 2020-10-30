import React from "react";
import styled from "styled-components";

const Box = ({
  aside,
  children,
  direction = "top left",
  asideProps = {},
  centerProps = {},
  bottomProps = {},
  bottom,
  ...props
}) => {
  return (
    <StyledBoxWrapper {...props} className={`${direction}`}>
      <StyledBox>
        <StyledBoxMain>
          <StyledBoxAside {...asideProps}>{aside}</StyledBoxAside>
          <StyledBoxCenter {...centerProps}>{children}</StyledBoxCenter>
        </StyledBoxMain>
        {bottom && <StyledBoxBottom {...bottomProps}>{bottom}</StyledBoxBottom>}
      </StyledBox>
    </StyledBoxWrapper>
  );
};

const StyledBoxBottom = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
`;
const StyledBoxMain = styled.div`
  display: flex;
  @media (max-width: 1280px) {
    flex-wrap: wrap;
  }
`;
const StyledBox = styled.section`
  background-color: #101010;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: var(--box-padding);
  box-shadow: 0 0 30px black;
  flex-wrap: wrap;
  @media (max-width: 1280px) {
    width: 100%;
    display: block;
    padding-top: calc(var(--box-padding) * 2);
    padding-bottom: calc(var(--box-padding) * 2);
  }
`;

const StyledBoxCenter = styled.div`
  padding-left: 64px;
  @media (max-width: 1280px) {
    padding-left: 0;
    width: 100%;
  }
`;

const StyledBoxWrapper = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: var(--container-width);
  max-width: 100%;
  display: flex;
  @media (min-width: 1280px) {
    &.right {
      justify-content: flex-end;
      ${StyledBox} {
        ${StyledBoxMain} {
          flex-direction: row-reverse;
        }
        ${StyledBoxCenter} {
          padding-left: 0;
          padding-right: 64px;

          text-align: right;
        }
      }
    }
  }
  &.top.left {
    ${StyledBox} {
      border-top-left-radius: 24px;
    }
  }
  &.top.right {
    ${StyledBox} {
      border-top-right-radius: 24px;
    }
  }
  &.bottom.left {
    ${StyledBox} {
      border-bottom-left-radius: 24px;
    }
  }
  &.bottom.right {
    ${StyledBox} {
      border-bottom-right-radius: 24px;
    }
  }
`;

const StyledBoxAside = styled.aside`
  width: 200px;
  flex: 0 0 200px;
  text-align: right;
  font-size: 16px;
  line-height: 28px;
  @media(max-width: 1280px) {
    width: 100%;
    flex: 0 0 100%;
    text-align: left;
  }
  img {
    max-width: none;
  }
`;

export default Box;
