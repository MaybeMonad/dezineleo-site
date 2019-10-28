import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import profilePic from '../assets/profile-pic.png'
// import { rhythm } from '../utils/typography'

const GradientBox = props => {
  const { className, children } = props
  return (
    <div className={className}>
      <div className="gradient-box">{children}</div>
    </div>
  )
}

const StyledGradientBox = styled(GradientBox)`
  background: linear-gradient(-217deg, var(--primary), var(--brand));
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  padding: 2px;

  .gradient-box {
    background: var(--black);
    width: 52px;
    height: 52px;
    border-radius: 100%;
    padding: 2px;
  }

  img {
    max-width: 100% !important;
    width: 100%;
    border-radius: 50%;
  }
`

const MiniBio = props => {
  const { className, children } = props
  return <div className={className}>{children}</div>
}

const StyledMiniBio = styled(MiniBio)`
  background-color: var(--black);
  color: white;
  padding: 24px;
  display: inline-block;
  border-radius: 5px;
  max-width: 188px;
  width: 100%;
  @media (max-width: 672px) {
    max-width: calc(100% - 48px);
  }
  .profile {
    margin-left: 16px;
    h3 {
      font-size: 18px;
      line-height: 20px;
      font-family: var(--font-medium);
      margin: 0;
      span {
        font-size: 12px;
        font-family: var(--font-light);
        font-weight: normal;
        color: var(--font-grey);
        padding-left: 4px;
      }
    }
    .links {
      a {
        background-color: var(--primary);
        color: var(--black);
        font-size: 12px;
        padding: 4px 24px;
        border-radius: 25px;
      }
      .btn-follow {
        margin-right: 4px;
        // font-family: var(--font-bold);
      }
      .btn-more {
        padding: 4px 8px;
      }
    }
  }

  .brief-intro {
    margin-top: 10px;
    p {
      font-size: 13px;
      margin: 0;
    }
  }
`

const Bio = () => {
  return (
    <StyledMiniBio>
      <div className="d-flex justify-start align-items-center">
        <StyledGradientBox>
          <img src={profilePic} alt={`Yang Jin`} />
        </StyledGradientBox>
        <div className="profile">
          <h3>
            Leo<span>@dezineleo</span>
          </h3>
          <div className="links">
            <a
              href="https://twitter.com/dezineleo"
              target="_blank"
              className="btn-follow"
            >
              Follow
            </a>
            <a className="btn-more">···</a>
          </div>
        </div>
      </div>
      <div className="brief-intro">
        <p
          style={{
            fontFamily: 'var(--font-medium)',
            fontSize: 14,
            marginBottom: 4,
          }}
        >
          Hangzhou, China{' '}
        </p>
        <p
          style={{
            lineHeight: '18px',
            color: 'var(--font-grey)',
            fontFamily: 'var(--font-light)',
          }}
        >
          Working as a web developer && UI designer.
        </p>
      </div>
    </StyledMiniBio>
  )
}

export default Bio
