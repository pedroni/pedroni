import React from "react";
import styled from "styled-components";

const Button = ({color = 'primary', ...props}) => {
  return <StyledButton className={`${color} ${props.className}`} {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  height: 50px;
  min-width: 200px;
  padding-left: 32px;
  padding-right: 32px;
  display: inline-flex;
  background-color: var(--color-primary);
  background-image: linear-gradient(
    135deg,
    var(--color-primary-light),
    var(--color-primary-dark)
  );
  color: var(--color-primary-contrast);
  justify-content: center;
  align-items: center;
  font-family: inherit;
  appearance: none;
  font-weight: 500;
  font-size: 16px;
  border: none;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  cursor: pointer;
  text-decoration: none;

  transition: 0.3s;

  &.secondary {
    background-color: var(--color-secondary);
    background-image: linear-gradient(
      135deg,
      var(--color-secondary-light),
      var(--color-secondary-dark)
    );
    color: var(--color-secondary-contrast);
  }
  &:hover {
    filter: brightness(1.2);
  }
`;

export default Button;
