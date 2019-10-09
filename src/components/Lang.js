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
    background-color: var(--bg-grey);
    transition: background-color 0.3s ease;
    &:hover {
      background-color: var(--primary);
    }
    a {
      color: var(--black);
      box-shadow: none;
    }
    &.active {
      background-color: var(--black);
      a {
        font-family: var(--font-bold);
        color: white;
      }
    }
  }
`

export default Lang
