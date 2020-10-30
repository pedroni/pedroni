import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

const Input = ({ label, name, ...props }) => {
  const [active, setActive] = useState(false);
  const inputRef = useRef();
  const _onFocus = useCallback((ev) => setActive(true));
  const _onBlur = useCallback((ev) =>
    ev.target.value.trim() ? setActive(true) : setActive(false)
  );

  useEffect(() => {
    if (props.defaultValue) {
      setActive(true);
    }
    inputRef.current.addEventListener("focus", _onFocus);
    inputRef.current.addEventListener("blur", _onBlur);
    return () => {
      inputRef.current.removeEventListener("focus", _onFocus);
      inputRef.current.removeEventListener("blur", _onBlur);
    };
  }, []);

  return (
    <StyledInputWrapper className={active ? "active" : undefined}>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        ref={inputRef}
        id={name}
        name={name}
        {...props}
      ></StyledInput>
    </StyledInputWrapper>
  );
};

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
  transition: .3s;
  &:focus {
    outline: none;
    border-color: var(--color-primary)
  }
  .active > & {
    border-bottom-color: var(--color-primary);
    border-bottom-width: 2px;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  font-size: 16px;
  color: white;
  left: 24px;
  top: calc(var(--input-height) * 0.3);
  transition: 0.3s;
`;

const StyledInputWrapper = styled.div`
  position: relative;
  line-height: 24px;
  text-align: left;
  &.active {
    ${StyledLabel} {
      top: 2px;
      font-size: 12px;
      opacity: .8;
    }
  }
`;

export default Input;
