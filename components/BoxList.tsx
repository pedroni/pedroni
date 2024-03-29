import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const BoxList = ({ list, onItemSelected = key => {}, activeItem }) => {
  const _onItemSelected = key => {
    setActiveItem(key)
    onItemSelected(key)
  }

  const [_activeItem, setActiveItem] = useState(activeItem)

  useEffect(() => {
    if (!_activeItem) {
      setActiveItem(list[0]?.key)
    }
  })

  useEffect(() => {
    if (activeItem !== _activeItem) {
      setActiveItem(activeItem)
      onItemSelected(activeItem)
    }
  }, [activeItem])

  return (
    <StyledBoxList>
      {list.map(({ key, label }) => (
        <StyledBoxListItem
          tabIndex={0}
          role="button"
          onClick={() => _onItemSelected({ key, label })}
          key={key}
          className={_activeItem?.key === key ? 'active' : undefined}
        >
          {label}
        </StyledBoxListItem>
      ))}
    </StyledBoxList>
  )
}

const StyledBoxListItem = styled.li`
  text-transform: uppercase;
  appearance: none;
  cursor: pointer;
  padding-top: 6px;
  padding-bottom: 6px;
  opacity: 0.6;
  transition: 0.3s;
  &.active {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
  &:focus {
    opacity: 1;
    outline: none;
  }
`
const StyledBoxList = styled.ul`
  list-style: none;

  @media (max-width: 1280px) {
    display: flex;
    width: calc(100% + (var(--box-padding) * 2));
    margin-left: calc(-1 * var(--box-padding));
    padding-left: var(--box-padding);
    flex-wrap: nowrap;
    overflow-x: auto;
    margin-bottom: 16px;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  ${StyledBoxListItem} {
    &.active {
      color: var(
        ${props => (props.color ? '--color-' + props.color : '--color-primary')}
      );
      @media (max-width: 1280px) {
        border-bottom: 2px solid
          var(
            ${props =>
              props.color ? '--color-' + props.color : '--color-primary'}
          );
      }
    }
    @media (max-width: 1280px) {
      border-bottom: 2px solid transparent;
      flex: 0 0 auto;
      margin-right: 24px;
    }
  }
`
export default BoxList
