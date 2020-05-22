import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import StyledHand from '../components/Hand'
import Button from '../components/Button'

const IntroCard = styled.div`
  background-color: var(--dark-1);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 56px;
  border-radius: 16px;
  flex-direction: column;
  h1 {
    font-size: 40px;
    line-height: 1.3;
    margin: 0;
  }
  h3 {
    font-family: var(--font-regular);
    font-weight: normal;
    color: var(--dark-4);
    font-size: 16px;
    margin: 5px 0 18px 0;
  }
  .avatar {
    max-width: 164px;
    // min-width: 164px;
    margin-right: 36px;
  }
  .links {
    a {
      margin-right: 16px;
      font-size: 16px;
      font-family: var(--font-bold);
      box-shadow: none;
      display: inline-flex;
      align-items: center;
      img {
        margin-right: 6px;
      }
    }
    @media (max-width: 672px) {
      a {
        margin-right: 12px;
        width: 100%;
        margin: 0 0 20px 0;
        button {
          width: 100%;
          font-size: 16px;
          padding: 12px;
        }
        :last-child {
          margin: 0;
        }
      }
    }
  }
  @media (max-width: 672px) {
    padding: 32px;
    h1 {
      font-size: 36px;
    }
    .intro {
      flex-direction: column;
      img {
        margin: 0 0 32px 0;
      }
    }
    .extra {
      display: none;
    }
  }
`

export default props => {
  const { avatar, title, intro, extra } = props

  return (
    <IntroCard>
      <div className="intro d-flex justify-start align-items-start">
        <img className="avatar" src={avatar} alt="" />
        <div className="hello">
          <h1>
            {title} <StyledHand>👋</StyledHand>
          </h1>
          <h3>{intro}</h3>
          <div className="links">
            <Link to="/about">
              <Button className="default" text="My Resume" />
            </Link>
            <Link to="/2019">
              <Button className="grey" text="2019 Report" />
            </Link>
          </div>
        </div>
      </div>
      <div className="extra">{extra}</div>
    </IntroCard>
  )
}
