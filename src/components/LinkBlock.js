import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const LinkBlock = styled(Link)`
  display: flex;
  // margin: 24px 0;
  background-color: white;
  border-radius: 16px;
  padding: 32px;
  background-color: var(--dark-1);
  img {
    width: ${props => (props.iconSize ? props.iconSize + 'px' : '48px')};
    margin-right: 18px;
  }
  .content {
    h2 {
      margin: 0;
      font-size: 21px;
      line-height: 1.3;
    }
    p {
      margin: 0;
      font-family: var(--font-regular);
      color: var(--dark-4);
      line-height: 1.3;
    }
  }
  @media (max-width: 672px) {
  }
`

export default props => {
  const { icon, iconSize, title, des, link } = props

  return (
    <LinkBlock to={link} iconSize={iconSize}>
      <div className="d-flex justify-start align-items-center">
        <img src={icon} alt="" />
        <div className="content">
          <h2>{title}</h2>
          <p>{des}</p>
        </div>
      </div>
    </LinkBlock>
  )
}
