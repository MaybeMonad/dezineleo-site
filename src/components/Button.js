import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 6px;
  background-color: var(--light);
  color: var(--dark-0);
  padding: 10px 24px;
  font-family: var(--font-bold);
  transition: background-color 0.32s ease, color 0.2s ease;
  font-size: 14px;
  box-shadow: none;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: var(--dark-2);
    color: var(--dark-4);
  }
  &.grey {
    background-color: var(--dark-2);
    color: var(--dark-4);
  }
`

export default props => {
  const { text, link, className } = props

  return <Button className={className}>{text}</Button>
}
