import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import styled from 'styled-components'
import classNames from 'classnames'
import MiniBio from '../components/MiniBio'
import JSHubLogo from '../../static/featured_projects/js_hub.svg'
import DeStaticRocket from '../../static/featured_projects/destatic.svg'
import MoreProjects01 from '../../static/featured_projects/more_01.svg'
import MoreProjects02 from '../../static/featured_projects/more_02.svg'
import LogoDecon from '../../static/logo_decon.svg'
import LogoY from '../../static/logo_y.svg'
import LogoD from '../../static/logo_d.svg'
import LogoA from '../../static/logo_a.svg'
import LogoN from '../../static/logo_n.svg'

const Section = props => {
  const { className, title, mode, children, style } = props
  return (
    <div className={classNames(className, { [mode]: true })} style={style}>
      <h4>{title}</h4>
      <div className="content">{children}</div>
    </div>
  )
}

const StyledSection = styled(Section)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: var(--border);
  width: 100%;
  &.column {
    flex-direction: column;
    align-items: flex-start;
    padding: 36px 42px;
    &:first-child {
      border-right: var(--border);
      padding-left: 0;
    }
    .content {
      border: 0;
      padding: 0;
    }
  }
  h4 {
    width: 28%;
    margin-top: 0;
    padding-right: 32px;
    font-size: 18px;
    span {
      display: inline-block;
      width: 100%;
      font-size: 14px;
      font-family: var(--font-regular);
      font-weight: normal;
    }
  }
  .content {
    border-left: var(--border);
    padding: 32px 42px;
    .project {
      margin-bottom: 16px;
      h5 {
        margin: 0;
      }
    }
    p {
      margin-bottom: 14px;
      &:last-child {
        margin: 0;
      }
      b {
        font-family: var(--font-regular);
        // font-size: 12px;
      }
      span {
        color: var(--font-grey);
        // font-size: 12px;
      }
    }
  }
  p {
    margin-top: 0;
    font-size: 13px;
  }
`

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
  padding: 48px 0;
  .hello {
    margin-right: 48px;
    max-width: 442px;
    z-index: 2;
    position: relative;
  }
  @media (max-width: 672px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 0;
    .hello {
      margin: 0 0 32px 0;
    }
  }
`

const Links = styled.div`
  a {
    margin-right: 20px;
    font-size: 14px;
  }
`

const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 0;
  @media (max-width: 672px) {
    img {
      width: 20px;
    }
    padding: 28px 0;
  }
`

const FeaturedProjects = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 24px;
  margin: 24px 0;
  // justify-content: space-around;
  // align-items: flex-start;
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
    border-radius: 5px;
    padding: 32px 20px;
    background-color: var(--bg-grey);
    transition: background-color 0.3s ease;
    font-family: var(--font-regular);
    :hover {
      background-color: var(--border-grey);
    }
    h2 {
      font-size: 18px;
      line-height: 24px;
      text-transform: uppercase;
      i {
        position: relative;
        z-index: 2;
        &::before {
          content: '';
          position: absolute;
          background-color: var(--primary);
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
      padding: 2px;
      width: 100%;
      .current-progress {
        background-color: var(--primary);
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

export default props => {
  const { location } = props
  return (
    <Layout location={location} title="About Leo - Dezineleo">
      <SEO title="About Leo" />
      <main>
        <Aside className="d-flex justify-between align-items-center">
          <div className="hello">
            <h1 style={{ margin: '0 0 8px 0' }}>
              Hello. <StyledHand>👋</StyledHand>
            </h1>
            <h3 style={{ margin: 0 }}>I'm a designer && maker.</h3>
            <p style={{ marginBottom: 14, fontSize: 14, lineHeight: '22px' }}>
              As an open source advocate, I do <b>a lot of stuff</b>. If you
              want to know more about my projects, checkout my{' '}
              <Link to="/about">portfolio</Link>. I'm also available for UI
              design and web development. Feel free to contact me through{' '}
              <a href="@dezineleo@gmail.com">dezineleo@gmail.com</a>.
            </p>
            <Links>
              {/* <Link to="/about">#resume</Link> */}
              <Link to="/what-i-use">#what-i-use</Link>
            </Links>
          </div>
          <MiniBio />
        </Aside>
        <Logos>
          <img src={LogoDecon} alt="Decon" style={{ minWidth: 42 }} />
          <img src={LogoY} alt="Y" />
          <img src={LogoD} alt="D" />
          <img src={LogoA} alt="A" />
          <img src={LogoN} alt="N" />
        </Logos>
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
                    60<sup>%</sup>
                  </h1>
                  <p style={{ fontSize: '13px' }}>In progress</p>
                </div>
                <div className="progress-bar">
                  <div
                    className="current-progress"
                    style={{ width: '60%' }}
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
        <p style={{ marginBottom: 14 }}>
          Ever since I was a child, I have always been passionate about
          illustrating and computer-like stuff. However, I chose to study
          English instead of CS to become a self-taught web developer. Back in
          the day, I was working as a WordPress theme developer. In 2017, I came
          to Hangzhou to become a full-time web developer and UI designer.
        </p>
        <p style={{ fontSize: 13, marginBottom: 36 }}>
          自幼喜好涂鸦、捣鼓计算机，2010 年开始接触 Discuz 论坛模板开发，经历了
          1.X、2.X 的高峰时期。2013 年转战 ThemeForest 开启 WordPress
          模板开发之旅，于当时个位可数的 Page Builder 市场里占有一席之地，直至
          2017 年末来到杭州开始全职前端开发，而多年自学设计和编程的初衷是想做
          Cool Stuff。
        </p>
        <StyledSection
          title={
            <>
              <span>01.</span>In progress
            </>
          }
          mode="row"
        >
          <p style={{ marginBottom: 8 }}>
            Currently, I'm working as a front developer and UI designer mainly
            focusing on <b>Augmented Reality</b>.
          </p>
          <p>目前在杭州摸鱼，主要研究 AR 技术的实际应用，欢迎介绍新坑位。</p>
        </StyledSection>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
          }}
        >
          <StyledSection
            title={
              <>
                <span>02.</span>Experiences
              </>
            }
            mode="column"
          >
            <p>
              <b>2019.4 - Today</b>
              <br />
              Fontend Developer & UI Designer & <b>Mobile APP developer</b>
              <br />
              <span>GSTech, Hangzhou</span>
            </p>
            <p>
              <b>2018.8 - 2019.4</b>
              <br />
              Worked as a <b>ReactJS developer & UI designer</b> on a SaaS
              platform aiming for online marketing.
              <br />
              <span>GnLab, Hangzhou</span>
            </p>
            <p>
              <b>2017.9 - 2018.8</b>
              <br />
              Fontend Developer & UI Designer
              <br />
              <span>Youte, Hangzhou</span>
            </p>
            <p>
              <b>2013 - 2017</b>
              <br />
              WordPress Theme Designer & Developer
              <br />
              <span>Themeforest</span>
            </p>
          </StyledSection>
          <StyledSection
            title={
              <>
                <span>03.</span>Projects
              </>
            }
            mode="column"
          >
            <div className="project">
              <h5>JavaScript Hub</h5>
              <p>
                <a href="/javascript-hub/">Intro</a> |{' '}
                <a
                  href="https://github.com/DezineLeo/javascript-hub"
                  target="_blank"
                  rel="noopener"
                >
                  Github
                </a>
              </p>
            </div>
            <div className="project">
              <h5>Elm 中文文档</h5>
              <p>
                <a href="/elm-lang-doc-zh/">Intro</a> |{' '}
                <a
                  href="https://github.com/DezineLeo/elm-lang-docs-zh"
                  target="_blank"
                  rel="noopener"
                >
                  Github
                </a>
              </p>
            </div>
            <div className="project">
              <h5>DeHTML</h5>
              <p>
                <a href="/de-html/">Intro</a> |{' '}
                <a
                  href="https://github.com/DezineLeo/DeHTML"
                  target="_blank"
                  rel="noopener"
                >
                  Github
                </a>
              </p>
            </div>
          </StyledSection>
        </div>
      </main>
      <Footer />
    </Layout>
  )
}
