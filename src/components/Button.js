import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 6px;
  background-color: var(--btn-default-bg);
  color: var(--btn-default-color);
  padding: 10px 24px;
  font-family: var(--font-heading);
  font-weight: 700;
  transition: background-color 0.32s ease, color 0.2s ease;
  font-size: 14px;
  box-shadow: none;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #000;
    color: white;
  }
  &.grey {
    background-color: var(--btn-grey-bg);
    color: var(--btn-grey-color);
    &:hover {
      background-color: var(--btn-grey-bg-hover);
    }
  }
`

export default props => {
  const { text, link, className } = props

  return <Button className={className}>{text}</Button>
}
