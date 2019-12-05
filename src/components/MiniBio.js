import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import profilePic from '../assets/profile-pic.png'
// import miniBioBG from '../../static/mini_bio_bg.svg'
import circle1 from '../../static/about/circle_01.svg'
import circle2 from '../../static/about/circle_02.svg'
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
  background: linear-gradient(-217deg, var(--secondary), var(--primary));
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
  // background: linear-gradient(#080808 0%, #1f1f1f 100%);
  background: linear-gradient(-217deg, #1f1f1f, #080808);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.6));
  color: white;
  padding: 32px;
  display: inline-block;
  border-radius: 12px;
  max-width: 188px;
  width: 100%;
  position: relative;
  z-index: 2;
  @media (max-width: 672px) {
    max-width: calc(100% - 64px);
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
        font-weight: normal;
        color: var(--font-grey);
        padding-left: 4px;
      }
    }
    .links {
      margin-top: 5px;
      a {
        background-color: var(--secondary);
        color: white;
        font-size: 12px;
        padding: 4px 16px;
        border-radius: 25px;
        font-family: var(--font-bold);
        box-shadow: none;
      }
      .btn-follow {
        margin-right: 4px;
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

const MiniBioWrapper = styled.div`
  position: relative;
  .mini-bio-after {
    position: absolute;
    z-index: 1;
    &.circle1 {
      bottom: -12px;
      right: 0;
    }
    &.circle2 {
      top: -24px;
      left: -8px;
    }
  }
  @media (max-width: 672px) {
    width: 100%;
    .mini-bio-after {
      &.circle1 {
        bottom: -12px;
        right: 0;
      }
      &.circle2 {
        top: -24px;
        left: -8px;
      }
    }
  }
`

const Bio = () => {
  return (
    <MiniBioWrapper>
      <img className="mini-bio-after circle1" src={circle1} alt="" />
      <img className="mini-bio-after circle2" src={circle2} alt="" />
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
            </div>
          </div>
        </div>
        <div className="brief-intro" style={{ paddingLeft: 4, marginTop: 14 }}>
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
            }}
          >
            Try to be a web developer && UI designer since 2010.
          </p>
        </div>
      </StyledMiniBio>
    </MiniBioWrapper>
  )
}

export default Bio
