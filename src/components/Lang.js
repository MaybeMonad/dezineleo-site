// import React from 'react'
import styled from 'styled-components'

const Lang = styled.ul`
  display: flex;
  justify-content: between;
  align-items: center;
  list-style: none;
  margin: 0;
  li {
    margin: 0 0 0 8px;
    font-size: 13px;
    padding: 3px 6px;
    background-color: var(--secondary);
    transition: background-color 0.3s ease;
    &:hover {
      background-color: var(--secondary-hover);
    }
    a {
      color: var(--primary);
      font-family: var(--font-medium);
    }
    &.active {
      background-color: var(--primary);
      border-radius: 3px;
      &:hover {
        background-color: var(--secondary-hover);
      }
      a {
        color: white;
      }
    }
  }
`

export default Lang
