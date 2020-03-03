import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
// import Footer from '../components/Footer'
import styled from 'styled-components'
// import classNames from 'classnames'
import MiniBio from '../components/MiniBio'
import FullWidthWrapper from '../components/FullWidthWrapper'
import JSHubLogo from '../../static/about/jshub.svg'
import DeStaticRocket from '../../static/featured_projects/destatic.svg'
import MoreProjects01 from '../../static/about/more_01.svg'
import MoreProjects02 from '../../static/about/more_02.svg'
import iconDownload from '../../static/about/download.svg'
import iconLink from '../../static/about/link.svg'
import iconCircle from '../../static/about/circle.svg'
import iconTriangle from '../../static/about/triangle.svg'
import iconSquare from '../../static/about/square.svg'
import twitter from '../../static/about/twitter.svg'
import dribbble from '../../static/about/dribbble.svg'
import github from '../../static/about/github.svg'
import behance from '../../static/about/behance.svg'
import wechat from '../../static/about/wechat.svg'
import email from '../../static/about/email.svg'

const StyledHand = styled.span`
  animation-name: wavingHand;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes wavingHand {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`

const Aside = styled.aside`
  padding: 116px 0;
  .hello {
    margin-right: 48px;
    max-width: 442px;
    z-index: 2;
    position: relative;
    h1 {
      font-size: 48px;
      line-height: 66px;
      span {
        width: 36px;
        display: inline-block;
      }
    }
  }
  @media (max-width: 672px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 48px 24px 56px 24px;
    .hello {
      margin: 0 0 32px 0;
    }
  }
`

const Links = styled.div`
  margin: 24px 0;
  a {
    margin-right: 20px;
    font-size: 14px;
    color: var(--primary);
    box-shadow: none;
    font-size: 16px;
    font-family: var(--font-bold);
  }
`

const FeaturedProjects = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 42px;
  margin: 24px 0;
  @media (max-width: 672px) {
    grid-template-columns: 100%;
    grid-row-gap: 24px;
    .project-card {
      width: 100%;
      max-width: 100% !important;
      &.more {
        flex-direction: row !important;
      }
    }
  }
  a {
    box-shadow: none;
    display: flex;
  }
  .project-card {
    border-radius: 12px;
    padding: 32px 20px;
    background-color: transparent;
    transition: border 0.3s ease;
    font-family: var(--font-regular);
    border: var(--dark-border);
    color: var(--font-grey);
    :hover {
      border: 1px solid var(--secondary);
    }
    h2 {
      font-size: 18px;
      line-height: 24px;
      text-transform: uppercase;
      color: white;
      i {
        position: relative;
        z-index: 2;
        &::before {
          content: '';
          position: absolute;
          background-color: var(--secondary);
          width: 100%;
          display: inline-block;
          height: 12px;
          bottom: 0px;
          z-index: -1;
          left: 0;
        }
      }
    }
    .progress-bar {
      background-color: var(--black);
      border-radius: 25px;
      padding: 2px;
      width: 100%;
      .current-progress {
        border-radius: 25px;
        background-color: var(--secondary);
        height: 2px;
      }
    }
    p {
      font-size: 13px;
    }
    &.javascript-hub {
      max-width: 108px;
      h2 {
        font-size: 17px;
        margin: 12px 0;
      }
      p {
        margin: 0;
      }
    }
    &.break-elm {
      min-width: 156px;
      h2 {
        font-size: 20px;
        margin: 0 0 6px 0;
      }
      h1 {
        font-size: 32px;
        margin: 36px 0 12px 0;
        font-family: var(--font-medium);
        color: white;
        sup {
          font-family: var(--font-light);
          font-size: 14px;
        }
      }
      p {
        margin: 0 0 12px 0;
        line-height: 18px;
      }
    }
    &.destatic {
      h2 {
        margin: 12px 0;
        line-height: 21px;
      }
      h3 {
        margin: 0;
        font-size: 14px;
      }
      p {
        margin: 0;
        position: relative;
        z-index: 2;
      }
    }
    &.more {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img {
        // margin: 10px 0;
      }
    }
  }
`

const Profile = styled.div`
  padding: 96px 0;
  @media (max-width: 672px) {
    padding: 48px 24px;
  }
`

const TitleWithDes = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 32px;
  margin-bottom: 56px;
  h2 {
    font-size: 28px;
    position: relative;
    display: inline-block;
    z-index: 1;
    img {
      position: absolute;
      right: -16px;
      top: 0px;
      z-index: -1;
    }
  }
  p {
    font-size: 16px;
    line-height: 24px;
    color: var(--font-grey);
  }
  .social {
    a {
      box-shadow: none;
      line-height: 0;
    }
  }
  @media (max-width: 672px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
    margin-bottom: 56px;
  }
`

const SideProjects = styled.div`
  padding: 96px 0px;
  @media (max-width: 672px) {
    padding: 48px 24px;
  }
`

const FindMe = styled.div`
  padding: 72px 0 calc(72px - 2rem) 0;
  @media (max-width: 672px) {
    padding: 48px 24px;
    .social {
      margin-top: 12px;
    }
  }
`

const Experience = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 32px;
  .highlight {
    h3 {
      font-size: 56px;
      font-family: var(--font-medium);
      color: white;
      margin: 0;
      line-height: 1;
      sup {
        font-size: 42px;
      }
    }
    p {
      color: var(--font-grey);
      max-width: 88px;
      margin: 0 0 0 16px;
      line-height: 24px;
    }
  }
  .experience {
    color: var(--font-grey);
    font-size: 15px;
    line-height: 24px;
    b {
      color: white;
      font-size: 18px;
      font-family: var(--font-medium);
    }
    span {
      color: #707070;
      font-size: 13px;
    }
  }
  .highlights {
    grid-template-columns: 1fr;
  }
  .experiences {
    grid-template-columns: 1fr 1fr;
  }
  .highlights,
  .experiences {
    display: grid;
    grid-gap: 32px;
    align-items: flex-start;
  }
  .hire-me {
    color: var(--secondary);
  }
  @media (max-width: 672px) {
    grid-template-columns: 1fr;
    // grid-gap: 0px;
    .highlight {
      h3 {
        font-size: 42px;
      }
      p {
        font-size: 13px;
        line-height: 18px;
      }
    }
    .highlights {
      grid-template-columns: 1fr 1fr;
    }
    .experiences {
      grid-template-columns: 1fr 1fr;
    }
  }
`

export default props => {
  const { location } = props
  return (
    <Layout location={location} title="About Leo - Dezineleo">
      <SEO title="About Leo" />
      <FullWidthWrapper
        style={{
          backgroundColor: '#000',
          borderBottom: 'var(--dark-border)',
          borderTop: 'var(--dark-border)',
        }}
      >
        <Aside className="section d-flex justify-between align-items-center">
          <div className="hello">
            <h1 style={{ margin: '0 0 8px 0' }}>
              Hey, Hi, <StyledHand>👋</StyledHand>
              <br />
              <span></span> and Hello.
            </h1>
            <Links>
              <Link to="/leo_resume.pdf" className="d-flex align-items-center">
                <img
                  src={iconDownload}
                  alt="Download"
                  style={{ marginRight: 12 }}
                />
                Download My Resume
              </Link>
            </Links>
          </div>
          <MiniBio />
        </Aside>
      </FullWidthWrapper>
      <FullWidthWrapper
        style={{ backgroundColor: '#111', borderBottom: 'var(--dark-border)' }}
      >
        <Profile className="section">
          <TitleWithDes>
            <div>
              <h2>
                Profile
                <img src={iconCircle} alt="Circle" />
              </h2>
            </div>
            <p>
              Ever since I was a child, I have always been passionate about
              illustrating and computer-like stuff. However, I chose to study
              English instead of CS to become a self-taught web developer.
            </p>
          </TitleWithDes>
          <Experience>
            <div className="highlights">
              <div className="highlight d-flex align-items-center">
                <h3>
                  5<sup>+</sup>
                </h3>
                <p>Years as a web worker</p>
              </div>
              <div className="highlight d-flex align-items-center">
                <h3>
                  20<sup>+</sup>
                </h3>
                <p>Projects in last 5 years</p>
              </div>
              <div></div>
            </div>
            <div className="experiences">
              <div className="experience">
                <b>2019.4 - Today</b>
                <br />
                Fontend Developer & UI Designer
                <br />
                <span>GSTech, Hangzhou</span>
              </div>
              <div className="experience">
                <b>2018.8 - 2019.4</b>
                <br />
                Worked as a ReactJS developer & UI designer on a SaaS platform
                aiming for online marketing.
                <br />
                <span>GnLab, Hangzhou</span>
              </div>
              <div className="experience">
                <b>2017.9 - 2018.8</b>
                <br />
                Fontend Developer & UI Designer
                <br />
                <span>Youte, Hangzhou</span>
              </div>
              <div className="experience">
                <b>2013 - 2017</b>
                <br />
                WordPress Theme Designer & Developer
                <br />
                <span>Themeforest</span>
              </div>
              <Links>
                <a
                  href="mailto:dezineleo@gmail.com"
                  className="d-flex align-items-center hire-me"
                >
                  <img
                    src={iconLink}
                    alt="Hire Me"
                    style={{ marginRight: 12 }}
                  />
                  Hire Me
                </a>
              </Links>
            </div>
          </Experience>
        </Profile>
      </FullWidthWrapper>
      <FullWidthWrapper
        style={{ backgroundColor: '#000', borderBottom: 'var(--dark-border)' }}
      >
        <SideProjects className="section">
          <TitleWithDes>
            <div>
              <h2>
                Side Projects
                <img src={iconTriangle} alt="Triangle" />
              </h2>
            </div>
            <p style={{ marginBottom: 14 }}>
              As an open source advocate, I do <b>a lot of stuff</b>. If you
              want to know more about my projects, checkout my{' '}
              <Link style={{ color: 'white' }} to="/about">
                portfolio
              </Link>
              . I'm also available for UI design and web development. Feel free
              to contact me through{' '}
              <a href="mailto:dezineleo@gmail.com" style={{ color: 'white' }}>
                dezineleo@gmail.com
              </a>
              .
            </p>
          </TitleWithDes>
          <FeaturedProjects>
            <Link to="/javascript-hub">
              <div className="project-card javascript-hub">
                <img src={JSHubLogo} alt="JavaScript Hub" />
                <h2>
                  Free <i>JavaScript</i> Learning Application
                </h2>
                <p>v1.0.0</p>
              </div>
            </Link>
            <Link to="/break-elm">
              <div className="project-card break-elm">
                <h2>Break Elm</h2>
                <p>Based on official docs, I’ve created 3 real world demos.</p>
                <div className="project-progress">
                  <div className="d-flex justify-between align-items-bottom">
                    <h1>
                      80<sup>%</sup>
                    </h1>
                    <p style={{ fontSize: '13px' }}>In progress</p>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="current-progress"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/destatic">
              <div className="project-card destatic">
                <h3>#DESTATIC</h3>
                <h2>Skyrocket your project</h2>
                <p>v1.0.1</p>
                <img
                  src={DeStaticRocket}
                  alt="DeStatic"
                  style={{
                    marginTop: '-10px',
                    marginRight: '12px',
                    float: 'right',
                  }}
                />
              </div>
            </Link>
            <Link to="/projects">
              <div className="project-card more d-flex align-items-center">
                <img src={MoreProjects01} alt="More Projects" />
                <img src={MoreProjects02} alt="More Projects" />
              </div>
            </Link>
          </FeaturedProjects>
        </SideProjects>
      </FullWidthWrapper>
      {/* <p style={{ fontSize: 13, marginBottom: 36 }}>
        自幼喜好涂鸦、捣鼓计算机，2010 年开始接触 Discuz 论坛模板开发，经历了
        1.X、2.X 的高峰时期。2013 年转战 ThemeForest 开启 WordPress
        模板开发之旅，于当时个位可数的 Page Builder 市场里占有一席之地，直至
        2017 年末来到杭州开始全职前端开发，而多年自学设计和编程的初衷是想做
        Cool Stuff。
      </p> */}
      <FullWidthWrapper style={{ backgroundColor: '#111', borderBottom: '0' }}>
        <FindMe className="section">
          <TitleWithDes style={{ margin: 0 }}>
            <div>
              <h2>
                Find Me
                <img src={iconSquare} alt="Square" />
              </h2>
            </div>
            <div className="d-flex justify-between align-items-center social">
              <a href="https://twitter.com/dezineleo" target="_blank">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="https://dribbble.com/dezineleo" target="_blank">
                <img src={dribbble} alt="Dribbble" />
              </a>
              <a href="https://github.com/dezineleo" target="_blank">
                <img src={github} alt="GitHub" />
              </a>
              <a href="https://behance.net/dezineleo" target="_blank">
                <img src={behance} alt="Behance" />
              </a>
              <a href="" target="_blank">
                <img src={wechat} alt="WeChat" />
              </a>
              <a href="mailto:dezineleo@gmail.com" target="_blank">
                <img src={email} alt="E-Mail" />
              </a>
            </div>
          </TitleWithDes>
        </FindMe>
      </FullWidthWrapper>
      {/* <Footer /> */}
    </Layout>
  )
}
