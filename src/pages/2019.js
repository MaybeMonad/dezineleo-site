import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { ResponsiveBump } from '@nivo/bump'
import { colors, distinctColors } from '../utils/constants'
import theme from '../utils/theme'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import FullWidthWrapper from '../components/FullWidthWrapper'
import { pageMaxWidth, StylesOf2019 } from '../utils/constants'
import Divider from '../components/Divider'
import Logo from '../../static/2019/logo_stateof2019.svg'
import LogoDezineleo from '../../static/2019/logo_dezineleo.svg'
import TopCover from '../../static/2019/state_2019.svg'
import TopCoverMobile from '../../static/2019/state_2019_mobile.svg'
import linkArrowPrimary from '../../static/2019/link_arrow_primary.svg'
import linkArrowSecondary from '../../static/2019/link_arrow_secondary.svg'
import steveJobs from '../../static/2019/steve_jobs.svg'
import linePrimary from '../../static/2019/line_primary.svg'
import lineSecondary from '../../static/2019/line_secondary.svg'
import Dev from '../../static/2019/dev.svg'
import Design from '../../static/2019/design.svg'
import logoGitHub from '../../static/2019/logo_github.svg'
import linkArrowGrey from '../../static/2019/link_arrow_grey.svg'
import logoBreakElm from '../../static/2019/logo_breakelm.svg'
import processBreakElm from '../../static/2019/process_breakelm.svg'
import logoJSHub from '../../static/2019/logo_jshub.svg'
import logoHYG from '../../static/2019/logo_hyg.svg'
import HYGPreview from '../../static/2019/hyg_v3_preview.png'
import GesturePrimary from '../../static/2019/gesture_primary.svg'
import GestureSecondary from '../../static/2019/gesture_secondary.svg'
import logoLearnXtoBuildY from '../../static/2019/logo_learnxtobuildy.svg'
import logoDeStatic from '../../static/2019/logo_destatic.svg'
import logoDezine from '../../static/2019/logo_dezine.svg'
import IconLink from '../../static/2019/icon_link.svg'
import graphCourses from '../../static/2019/graph_courses.svg'
import awardNotion from '../../static/2019/award_notion.svg'
import awardReact from '../../static/2019/award_react.svg'
import awardElm from '../../static/2019/award_elm.svg'

const StateOf2019 = styled.div`
  background-color: ${StylesOf2019.dark};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1,
    a {
      line-height: 0;
    }
    a {
      box-shadow: none;
    }
  }
  .intro {
    text-align: center;
    img {
      margin: 72px auto 96px auto;
    }
  }
  @media (max-width: 672px) {
    .header {
      padding: 0 24px;
    }
    .intro {
      padding: 0 24px;
      img {
        margin: 56px auto 72px auto;
      }
    }
  }
`

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .side {
    margin-top: -56px;
    background-color: ${StylesOf2019.dark};
    position: relative;
    .contents {
      border: 2px solid ${StylesOf2019.grey};
      min-width: 136px;
      padding: 20px 32px 14px 32px;
      margin-bottom: 24px;
    }
    li {
      list-style: none;
      margin-bottom: 6px;
      ul {
        padding-left: 20px;
        margin: 0;
        li {
          margin-bottom: 0;
        }
        a {
          font-family: var(--font-regular);
          font-size: 14px;
        }
      }
    }
    a {
      color: ${StylesOf2019.primary};
      // font-family: var(--font-cond-medium);
      font-weight: 16px;
      box-shadow: none;
    }
    .btn-about-me,
    .btn-hire-me {
      border: 2px solid ${StylesOf2019.grey};
      min-width: 136px;
      padding: 20px 32px 20px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-cond-bold);
      text-transform: uppercase;
      margin-bottom: 24px;
    }
    .btn-hire-me {
      color: ${StylesOf2019.secondary};
    }
    .btn-about-me {
      color: ${StylesOf2019.primary};
    }
  }
  .content {
    color: ${StylesOf2019.light};
    padding: 12px 0 36px 56px;
    h1 {
      font-family: var(--font-cond-bold);
      text-transform: uppercase;
      margin: 42px 0 10px 0;
    }
    a {
      color: ${StylesOf2019.secondary};
    }
    p {
      &.description {
        font-size: 18px;
        margin-top: 0;
        line-height: 28px;
      }
    }
    .dev,
    .design {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-cond-regular);
      margin: 56px 0;
      .detail {
        margin-right: 32px;
        h2 {
          margin: 0 0 2px 0;
          font-family: var(--font-cond-bold);
          text-transform: uppercase;
          font-size: 22px;
        }
        img {
          display: block;
          max-width: 125%;
        }
        ul {
          list-style: none;
          li {
            margin-bottom: 18px;
            line-height: 20px;
          }
        }
      }
    }
    .dev {
      color: ${StylesOf2019.primary};
    }
    .design {
      color: ${StylesOf2019.secondary};
    }
  }
  @media (max-width: 672px) {
    flex-direction: column;
    padding: 0 24px;
    .content {
      padding: 0px;
    }
    .dev,
    .design {
      flex-direction: column-reverse;
    }
    .side {
      width: 100%;
    }
  }
`

const Row = styled.div`
  max-width: ${pageMaxWidth};
  margin: 0 auto;
  img {
    max-width: 100%;
  }
`

const ProjectCard = props => {
  const {
    title,
    logo,
    version,
    link,
    github,
    preview,
    className,
    style,
    children,
  } = props

  return (
    <div className={className} style={style}>
      <div className="head">
        <div className="logo">
          <img src={logo} alt={title} />
          <sup>{version}</sup>
        </div>
        <Link to={link}>
          Read More
          <img src={linkArrowGrey} alt="" />
        </Link>
      </div>
      <Divider
        style={{
          backgroundColor: StylesOf2019.grey,
          width: 'calc(100% + 48px)',
          marginLeft: '-24px',
        }}
      />
      <div>{children}</div>
      <Divider
        style={{
          backgroundColor: StylesOf2019.grey,
          width: 'calc(100% + 48px)',
          marginLeft: '-24px',
        }}
      />
      <div className="foot">
        <a href={github} target="_blank">
          <img src={logoGitHub} alt="GitHub" />
        </a>
        <a href={`https://${preview}`} target="_blank">
          {preview}
        </a>
      </div>
    </div>
  )
}

const StyledProjectCard = styled(ProjectCard)`
  border: 1px solid ${StylesOf2019.grey};
  border-radius: 12px;
  padding: 18px 24px;
  margin: 32px 0 16px 0;
  a {
    box-shadow: none;
  }
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    .logo {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
    sup {
      color: ${StylesOf2019.secondary};
      margin: -6px 0 0 6px;
    }
    a {
      font-size: 18px;
      color: ${StylesOf2019.grey};
      font-family: var(--font-cond-bold);
      text-transform: uppercase;
      img {
        margin-left: 4px;
      }
    }
  }
  .foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 18px;
    a {
      font-family: var(--font-cond-medium);
      color: ${StylesOf2019.grey};
      img {
        display: block;
      }
    }
  }
`

const ListWithTitle = styled.div`
  h3 {
    font-size: 18px;
    font-family: var(--font-cond-bold);
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  ul {
    list-style: none;
    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: var(--font-medium);
      margin-bottom: 10px;
      a {
        color: inherit !important;
      }
      img {
        margin-right: 8px;
      }
    }
  }
`

const JSHubLists = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 672px) {
    flex-direction: column;
  }
`

const SideProject = props => {
  const { logo, link, title, des, github, version, className, style } = props

  return (
    <Link className={className} style={style} to={link}>
      <div className="d-flex justify-between align-items-center">
        <img src={logo} alt={title} />
        <img src={IconLink} alt={title} />
      </div>
      <div
        style={{
          height: 1,
          backgroundColor: StylesOf2019.grey,
          width: 'calc(100% + 36px)',
          display: 'block',
          margin: '18px -18px 0 -18px',
        }}
      ></div>
      <h2>
        {title}
        {version && <sup>{version}</sup>}
      </h2>
      <p>{des}</p>
      <div
        style={{
          height: 1,
          backgroundColor: StylesOf2019.grey,
          width: 'calc(100% + 36px)',
          display: 'block',
          margin: '18px -18px 0 -18px',
        }}
      ></div>
      <div className="github">{github}</div>
    </Link>
  )
}

const StyledSideProject = styled(SideProject)`
  border-radius: 12px;
  padding: 18px 18px 8px 18px;
  border: 1px solid ${StylesOf2019.grey};
  box-shadow: var(--box-shadow);
  transition: box-shadow 0.3s ease 0s;
  :hover {
    box-shadow: var(--hover-box-shadow);
  }
  img {
    max-width: 30px;
    max-height: 24px;
  }
  h2 {
    font-size: 18px;
    margin-bottom: 0;
    font-family: var(--font-cond-bold);
    color: ${StylesOf2019.light};
    sup {
      color: ${StylesOf2019.secondary};
      font-family: var(--font-regular);
      font-size: 10px;
      margin-left: 2px;
    }
  }
  p {
    font-size: 13px;
    color: ${StylesOf2019.light};
    margin: 0 0 24px 0;
    line-height: 16px;
    font-family: var(--font-regular);
  }
  .github {
    font-size: 12px;
    color: ${StylesOf2019.grey};
    font-family: var(--font-cond-medium);
    margin-top: 8px;
  }
`

const OtherProjects = styled.div`
  display: grid;
  grid-template-columns: calc(33.33% - 24px) calc(33.33% - 24px) calc(
      33.33% - 24px
    );
  grid-gap: 36px;
  margin: 32px 0 48px 0;
  @media (max-width: 672px) {
    grid-template-columns: calc(50% - 12px) calc(50% - 12px);
    grid-gap: 24px;
  }
  @media (max-width: 376px) {
    grid-template-columns: 100%;
  }
`

const Awards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 56px 0;
  @media (max-width: 672px) {
    flex-direction: column;
    img {
      margin-bottom: 42px;
      &:last-child {
        margin: 0;
      }
    }
  }
`

export default () => {
  const data = [
    {
      id: 'Dezineleo.com',
      data: [
        {
          x: 1,
          y: 2,
          percentage: 0,
        },
        {
          x: 2,
          y: 2,
          percentage: 5,
        },
        {
          x: 3,
          y: 2,
          percentage: 0,
        },
        {
          x: 4,
          y: 2,
          percentage: 16,
        },
        {
          x: 5,
          y: 2,
          percentage: 0,
        },
        {
          x: 6,
          y: 2,
          percentage: 4,
        },
        {
          x: 7,
          y: 2,
          percentage: 1,
        },
        {
          x: 8,
          y: 2,
          percentage: 2,
        },
        {
          x: 9,
          y: 2,
          percentage: 21,
        },
        {
          x: 10,
          y: 2,
          percentage: 20,
        },
        {
          x: 11,
          y: 2,
          percentage: 3,
        },
        {
          x: 12,
          y: 2,
          percentage: 1,
        },
      ],
    },
    {
      id: 'Break Elm',
      data: [
        {
          x: 1,
          y: 1,
          percentage: 0,
        },
        {
          x: 2,
          y: 1,
          percentage: 5,
        },
        {
          x: 3,
          y: 1,
          percentage: 0,
        },
        {
          x: 4,
          y: 1,
          percentage: 16,
        },
        {
          x: 5,
          y: 1,
          percentage: 0,
        },
        {
          x: 6,
          y: 1,
          percentage: 4,
        },
        {
          x: 7,
          y: 1,
          percentage: 1,
        },
        {
          x: 8,
          y: 1,
          percentage: 2,
        },
        {
          x: 9,
          y: 1,
          percentage: 21,
        },
        {
          x: 10,
          y: 1,
          percentage: 20,
        },
        {
          x: 11,
          y: 1,
          percentage: 3,
        },
        {
          x: 12,
          y: 1,
          percentage: 1,
        },
      ],
    },
    {
      id: 'JS Hub',
      data: [
        {
          x: 1,
          y: 3,
          percentage: 0,
        },
        {
          x: 2,
          y: 3,
          percentage: 5,
        },
        {
          x: 3,
          y: 3,
          percentage: 0,
        },
        {
          x: 4,
          y: 3,
          percentage: 16,
        },
        {
          x: 5,
          y: 3,
          percentage: 0,
        },
        {
          x: 6,
          y: 3,
          percentage: 4,
        },
        {
          x: 7,
          y: 3,
          percentage: 1,
        },
        {
          x: 8,
          y: 3,
          percentage: 2,
        },
        {
          x: 9,
          y: 3,
          percentage: 21,
        },
        {
          x: 10,
          y: 3,
          percentage: 20,
        },
        {
          x: 11,
          y: 3,
          percentage: 3,
        },
        {
          x: 12,
          y: 4,
          percentage: 1,
        },
      ],
    },
    {
      id: 'HYG',
      data: [
        {
          x: 1,
          y: 4,
          percentage: 0,
        },
        {
          x: 2,
          y: 4,
          percentage: 5,
        },
        {
          x: 3,
          y: 4,
          percentage: 0,
        },
        {
          x: 4,
          y: 4,
          percentage: 16,
        },
        {
          x: 5,
          y: 4,
          percentage: 0,
        },
        {
          x: 6,
          y: 4,
          percentage: 4,
        },
        {
          x: 7,
          y: 4,
          percentage: 1,
        },
        {
          x: 8,
          y: 4,
          percentage: 2,
        },
        {
          x: 9,
          y: 4,
          percentage: 21,
        },
        {
          x: 10,
          y: 4,
          percentage: 20,
        },
        {
          x: 11,
          y: 4,
          percentage: 3,
        },
        {
          x: 12,
          y: 3,
          percentage: 1,
        },
      ],
    },
  ]

  const CustomPoint = props => {
    const { x, y, data, isInactive, size, borderColor, borderWidth } = props

    return (
      <g transform={`translate(${x}, ${y})`} style={{ pointerEvents: 'none' }}>
        <circle
          r={(size + borderWidth) / 2}
          cy={size / 5}
          fill="rgba(0, 0, 0, .2)"
        />
        <circle
          r={size / 2}
          fill={colors.greyDarker}
          stroke={borderColor}
          strokeWidth={borderWidth}
        />
        {!isInactive && (
          <text
            textAnchor="middle"
            y={4}
            fill={colors.greyLight}
            fontSize="11px"
          >
            {Math.round(data.percentage)}
          </text>
        )}
      </g>
    )
  }

  const [IntroImg, setIntroImg] = useState(TopCover)

  useEffect(() => {
    setIntroImg(window.innerWidth < 672 ? TopCoverMobile : TopCover)
  }, [])

  return (
    <StateOf2019>
      <Row>
        <div className="header">
          <h1>
            <Link to="/2019">
              <img src={Logo} alt="State of YJ" />
            </Link>
          </h1>
          <Link to="/">
            <img src={LogoDezineleo} alt="Dezineleo" />
          </Link>
        </div>
      </Row>
      <Divider style={{ backgroundColor: StylesOf2019.grey, opacity: 0.5 }} />
      <SEO title="State of 2019 - Yearly State Report by Leo" />
      <Row className="intro">
        <img src={IntroImg} alt="State of 2019" />
      </Row>
      <Divider style={{ backgroundColor: StylesOf2019.grey, opacity: 0.5 }} />
      <Row>
        <Main>
          <div className="side">
            <ul className="contents">
              <li>
                <a href="#introduction">Introduction</a>
              </li>
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
                <ul>
                  <li>
                    <a href="#breakelm">Break Elm</a>
                  </li>
                  <li>
                    <a href="#jshub">JS Hub</a>
                  </li>
                  <li>
                    <a href="#hyg">HYG</a>
                  </li>
                  <li>
                    <a href="#others">Others</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#courses">Courses</a>
              </li>
              <li>
                <a href="#awards">Awards</a>
              </li>
              <li>
                <a href="#conclusion">Conclusion</a>
              </li>
            </ul>
            <Link to="/about" className="btn-about-me">
              About Me
              <img src={linkArrowPrimary} alt="About Me" />
            </Link>
            <Link to="/hire-me" className="btn-hire-me">
              Hire Me
              <img src={linkArrowSecondary} alt="Hire Me" />
            </Link>
          </div>
          <div className="content">
            <div id="introduction" className="section">
              <h1 style={{ marginTop: 32 }}>Introduction</h1>
              <p className="description">
                I’ve been working as a full-time web developer in Hangzhou for
                more than two years. When I saw the{' '}
                <a href="https://2019.stateofjs.com/" target="_blank">
                  2019’s State of JavaScript
                </a>
                , I was impressed by the bump charts and it suddenly came to my
                mind that what if I created my personal yearly state? So here it
                is. It’s a review of my life as a developer and designer. If you
                have any questions or comments, you’re welcome to open a new
                issue on GitHub. You can checkout my other projects and
                experiments at dezineleo.com and my Dribbble page.
              </p>
              <Link to="/hire-me" style={{ fontSize: 18 }}>
                I’m also available for new opportunities.
              </Link>
              <img
                style={{ margin: '36px 0' }}
                src={steveJobs}
                alt="Steve Jobs"
              />
            </div>
            <Divider
              style={{ backgroundColor: StylesOf2019.grey, opacity: 0.5 }}
            />
            <div id="overview" className="section">
              <h1>Overview</h1>
              <p className="description">
                Before we dig deep into the details, let’s take a moment to have
                an overview of my 2019’s keywords.
              </p>
              <div className="dev">
                <div className="detail">
                  <h2>Dev</h2>
                  <img src={linePrimary} alt="" />
                  <ul>
                    <li>
                      React is absolutely the NO.1 option for me to start a new
                      web project.
                    </li>
                    <li>
                      For FP advocates, I strongly recommend you to try Elm.
                    </li>
                    <li>Umi and Antd UI saved me tons of time.</li>
                    <li>VS Code is still my favorite code editor.</li>
                  </ul>
                </div>
                <img src={Dev} alt="Dev Keywords" />
              </div>
              <div className="design">
                <div className="detail">
                  <h2>Design</h2>
                  <img src={lineSecondary} alt="" />
                  <ul>
                    <li>
                      Dribbble is always the first place to find inspirations.
                    </li>
                    <li>
                      Instead of Sketch, I switched to use Adobe XD as the
                      default prototyping tool.
                    </li>
                    <li>I’ve also learned to use Procreate to illustrate.</li>
                    <li>.pulse inspired me to create my own design system.</li>
                  </ul>
                </div>
                <img src={Design} alt="Dev Keywords" />
              </div>
            </div>
            <Divider
              style={{ backgroundColor: StylesOf2019.grey, opacity: 0.5 }}
            />
            <div id="projects" className="section">
              <h1>Projects</h1>
              <p className="description">Contributions to the open source.</p>
              <StyledProjectCard
                title="Break Elm"
                logo={logoBreakElm}
                version="v1.0"
                github="https://github.com/DezineLeo/Break-Elm"
                link="/break-elm"
                preview="elm.dezineleo.com"
              >
                <p>
                  As a FP advocate, I found a lot fun when using Elm to build
                  applications. So based on official docs, I tried explain Elm
                  in Chinese. I wanna let more Chinese JavaScript programmers
                  try some different flavors. Also, it’s part of my process to
                  master Elm. It’s still in progress and it’s expected to be
                  available on Feb 2, 2020.{' '}
                </p>
                <img
                  style={{ margin: '16px 0 24px 0' }}
                  src={processBreakElm}
                  alt="Process of Break Elm"
                />
              </StyledProjectCard>
              <StyledProjectCard
                title="JS Hub"
                logo={logoJSHub}
                version="v1.0"
                github="https://github.com/DezineLeo/JavaScript-Hub"
                link="/javascript-hub"
                preview="javascript-hub.dezineleo.com"
              >
                <p>
                  As a self-taught web developer, I can always deliver coding
                  stuff, even if I don’t know the essence. Yes, Google it or
                  StackOverflow it when I’m trapped. However, I could have made
                  better stuff if I mastered more coding skills. So I’ve tried
                  to dive deep into the JavaScript through courses and still in
                  progress. I built JavaScript Hub to not only help JS newbies
                  but also try to build a mind map for myself.
                </p>
                <JSHubLists>
                  <ListWithTitle style={{ color: StylesOf2019.primary }}>
                    <h3>Techniques</h3>
                    <ul>
                      <li>
                        <img src={GesturePrimary} alt="" />
                        HTML, CSS and JS, as always.
                      </li>
                      <li>
                        <img src={GesturePrimary} alt="" />
                        Svelte for the syntax.
                      </li>
                      <li>
                        <img src={GesturePrimary} alt="" />
                        Prism for syntax highlight.
                      </li>
                    </ul>
                  </ListWithTitle>
                  <ListWithTitle style={{ color: StylesOf2019.secondary }}>
                    <h3>Features</h3>
                    <ul>
                      <li>
                        <img src={GestureSecondary} alt="" />
                        Export and Import questions.
                      </li>
                      <li>
                        <img src={GestureSecondary} alt="" />
                        Stats about your results.
                      </li>
                      <li>
                        <img src={GestureSecondary} alt="" />
                        Constantly updates.
                      </li>
                    </ul>
                  </ListWithTitle>
                </JSHubLists>
              </StyledProjectCard>
              <StyledProjectCard
                title="Break Elm"
                logo={logoHYG}
                version="v3.0"
                github="https://github.com/DezineLeo"
                link="/hyg"
                preview="lovestoryhz.top"
              >
                <p>
                  I took over this Vue based project around two years ago. Since
                  then, I was responsible for the UI/UX and frontend
                  development. There was a version called “v2.0” which I’ve
                  designed before while it’s just semi-finished. At the end of
                  2019, I finally made a whole new design with dark mode and now
                  I’m rewriting the code in React instead of Vue.
                </p>
                <img
                  style={{ margin: '16px 0 24px 0' }}
                  src={HYGPreview}
                  alt="HYG v3 Preview"
                />
              </StyledProjectCard>
              <OtherProjects id="others">
                <StyledSideProject
                  logo={logoDeStatic}
                  link="/destatic"
                  title="DeStatic"
                  des="Skyrocket your project without extra configuration."
                  github="DezineLeo/DeStatic"
                  version="v1.0.1"
                />
                <StyledSideProject
                  logo={logoLearnXtoBuildY}
                  link="/learn-x-to-build-y"
                  title="Learn X to Build Y"
                  des="Learn programming by building real projects."
                  github="DezineLeo/programming-challenge"
                  version=""
                />
                <StyledSideProject
                  logo={logoDezine}
                  link="/dezine"
                  title="Dezine"
                  des="A less but better design system."
                  github="DezineLeo/Dezine"
                  version=""
                />
              </OtherProjects>
            </div>
            <Divider
              style={{ backgroundColor: StylesOf2019.grey, opacity: 0.5 }}
            />
            <div id="courses" className="section">
              <h1>Courses</h1>
              <p className="description">
                Stats of the courses and books that I consumed in the past 3
                years.
              </p>
              <div
                style={{
                  border: `1px solid ${StylesOf2019.grey}`,
                  borderRadius: 12,
                  padding: '24px 32px 32px 32px',
                  margin: '32px 0 42px 0',
                }}
              >
                <img src={graphCourses} alt="Graph of Courses" />
              </div>
            </div>
            <Divider
              style={{ backgroundColor: StylesOf2019.grey, opacity: 0.5 }}
            />
            <div id="awards" className="section">
              <h1>Awards</h1>
              <p className="description">
                The stuff that I strongly recommend.
              </p>
              <Awards>
                <img
                  src={awardNotion}
                  alt="Notion - Most powerful productivity app"
                />
                <img src={awardReact} alt="React - Most used technology" />
                <img src={awardElm} alt="Elm - Most interesting technology" />
              </Awards>
            </div>
            <Divider
              style={{ backgroundColor: StylesOf2019.grey, opacity: 0.5 }}
            />
            <div id="conclusion" className="section">
              <h1>Conclusion</h1>
              <p className="description">
                First of all, thank you for reading my personal yearly state
                report. Looking back for these days, there’re tons of resources
                we can reach, what we need to do is just burying our heads into
                the learning sand. Whatever we learn, it’ll connect the dots
                automatically.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-cond-bold)',
                  textAlign: 'right',
                }}
              >
                — Yang Jin
              </p>
            </div>
          </div>
        </Main>
      </Row>
    </StateOf2019>
    // <div
    //   style={{ backgroundColor: '#222429', minHeight: '100vh', width: '100vw' }}
    // >
    //   <div style={{ height: 420 }}>
    //     <ResponsiveBump
    //       data={data}
    //       margin={{ top: 40, right: 120, bottom: 40, left: 120 }}
    //       colors={distinctColors}
    //       inactiveLineWidth={5}
    //       theme={theme}
    //       enableGridX={true}
    //       enableGridY={false}
    //       axisTop={{
    //         tickSize: 0,
    //         tickPadding: 9,
    //       }}
    //       axisRight={null}
    //       axisBottom={{
    //         tickSize: 0,
    //         tickPadding: 9,
    //       }}
    //       axisLeft={null}
    //       startLabel={true}
    //       startLabelTextColor={{
    //         from: 'color',
    //         modifiers: [['brighter', 1]],
    //       }}
    //       startLabelPadding={20}
    //       endLabel={true}
    //       endLabelTextColor={{
    //         from: 'color',
    //         modifiers: [['brighter', 1]],
    //       }}
    //       endLabelPadding={20}
    //       pointComponent={CustomPoint}
    //       lineWidth={5}
    //       pointSize={36}
    //       pointBorderWidth={3}
    //       pointBorderColor={{ from: 'serie.color' }}
    //       activeLineWidth={8}
    //       activePointSize={42}
    //       activePointBorderWidth={4}
    //       inactivePointSize={0}
    //       inactivePointBorderWidth={2}
    //     />
    //   </div>
    // </div>
  )
}
