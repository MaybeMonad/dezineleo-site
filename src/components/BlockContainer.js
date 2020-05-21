import React from 'react'
import styled from 'styled-components'

const BlockContainer = styled.div`
  display: ${props => props.type};
  grid-template-columns: ${props =>
    ['1fr', '1fr', '1fr', '1fr', '1fr', '1fr']
      .slice(0, props.column)
      .join(' ')};
  grid-gap: 36px;
  // justify-content: space-between;
  // align-items: center;
  &.vertical {
    flex-direction: column;
  }
  @media (max-width: 672px) {
  }
`

export default props => {
  const { className, children, display, column, style } = props

  return (
    <BlockContainer
      style={style}
      className={className}
      column={column}
      type={display}
    >
      {children}
    </BlockContainer>
  )
}
