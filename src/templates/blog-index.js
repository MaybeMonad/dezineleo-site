import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import dayjs from 'dayjs'
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

import Layout from '../components/Layout'
import FullWidthWrapper from '../components/FullWidthWrapper'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import JSHub from '../../static/home/logo_js_hub.svg'
import DeStatic from '../../static/home/logo_destatic.svg'
import BreakElm from '../../static/home/logo_break_elm.svg'
import Decon from '../../static/home/logo_decon.svg'
import Top from '../../static/home/top.jpg'
import Alarm from '../../static/icon_alarm.svg'
// import IconCode from '../../static/icon_code.svg'

const ArticleList = styled.main`
  margin: 0 0 24px 0;
  background-color: transparent;
  &.notebook {
    display: grid;
    grid-template-columns: calc(33.33% - 21px) calc(33.33% - 21px) calc(
        33.33% - 21px
      );
    grid-gap: 32px;
    grid-auto-rows: 1fr;
    article {
      border: 1px solid var(--border-grey);
      margin: 0;
      height: calc(100% - 36px);
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      header {
        flex-direction: column;
        img {
          margin: 0 0 8px 0;
          width: 48px;
          min-width: 48px;
        }
        h3 {
          margin: 0;
          line-height: 1.4;
          word-break: break-word;
        }
      }
      p {
        &.date {
          color: var(--font-grey);
          font-size: 12px;
        }
      }
    }
  }
  &.challenges {
    margin: 0 0 24px 0;
    article {
      border: 1px solid var(--border-grey);
      margin: 0;
      header {
        align-items: center;
        h3 {
          margin: 0;
          display: flex;
          align-items: center;
        }
      }
    }
  }
  article {
    padding: 18px 24px;
    transition: background-color 0.3s ease;
    border-radius: 8px;
    margin: 0 -24px 20px -24px;
    position: relative;
    z-index: 1;
    ::before {
      content: '';
      transition: all 0.32s ease;
      background-color: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
      border-radius: 8px;
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0;
      height: 0;
      z-index: 0;
    }
    :hover::before {
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
    header {
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      img {
        margin-right: 30px;
        width: 60px;
        min-width: 60px;
        height: 60px;
      }
      .article-info {
        h3 {
          position: relative;
          margin-top: 0;
          display: flex;
          align-items: center;
          font-size: 1.36rem;
          line-height: 1.67rem;
          margin-bottom: 0;
        }
        .spoiler {
          font-size: 16px;
          font-weight: 300;
          font-family: var(--font-regular);
          margin: 0;
        }
        .badge,
        .wip {
          border-radius: 3px;
          padding: 3px 8px;
          font-size: 12px;
          margin-top: 8px;
          display: inline-block;
        }
        .badge {
          color: var(--primary);
          text-transform: uppercase;
          margin-right: 12px;
          &.Featured {
            background-color: rgb(0, 153, 255, 0.12);
          }
        }
        .wip {
          background-color: var(--bg-grey);
          color: var(--font-grey);
          font-weight: 300;
          font-family: var(--font-regular);
          strong {
            font-family: var(--font-medium);
            font-weight: 500;
          }
        }
      }
    }
    p {
      position: relative;
      margin-bottom: 0;
    }
  }
  @media (max-width: 672px) {
    overflow: hidden;
    &.notebook {
      grid-template-columns: 100%;
      ${'' /* grid-gap: 0; */}
    }
    article {
      header {
        flex-direction: row;
        h3 {
          font-size: 1.2rem;
        }
      }
    }
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

export default props => {
  const {
    pageContext: { langKey },
    location,
  } = props
  const siteTitle = get(props, 'props.data.site.siteMetadata.title')
  const posts = get(props, 'data.allMarkdownRemark.edges').filter(
    ({ node }) => node.fields.langKey === langKey
  )

  const Aside = styled.aside`
    padding: 36px 0 48px 0;
    .hello {
      z-index: 2;
      max-width: 480px;
      position: relative;
      text-align: left;
      .notification {
        background-color: #fff5d9;
        padding: 10px 12px;
        border-radius: 3px;
        font-size: 12px;
        line-height: 12px;
        display: inline-block;
        margin-bottom: 20px;
      }
      h3 {
        font-size: 18px;
        margin: 0 0 20px 0;
      }
      h1 {
        font-size: 42px;
        margin: 0 0 8px 0;
      }
    }
    img.intro {
      max-width: 360px;
      margin-right: -20px;
      padding-top: 30px;
    }
    @media (max-width: 672px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 36px 0;
      .hello {
        h1 {
          font-size: 28px;
        }
        h3 {
          font-size: 16px;
        }
      }
      img.intro {
        max-width: 100%;
        margin-right: 0px;
        margin-left: -20px;
      }
    }
  `

  const Links = styled.div`
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
      }
    }
  `

  const SideProject = props => {
    const { logo, link, title, des, github, version, className, style } = props

    return (
      <Link className={className} style={style} to={link}>
        <img src={logo} alt={title} />
        <div className="project-intro">
          <h2>
            {title}
            {/* {version && <sup>{version}</sup>} */}
          </h2>
          <p>{des}</p>
        </div>
      </Link>
    )
  }

  const StyledSideProject = styled(SideProject)`
    box-shadow: none;
    transition: box-shadow 0.3s ease 0s;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    z-index: 1;
    ::before {
      content: '';
      transition: all 0.28s ease;
      background-color: var(--bg-light);
      border-radius: 8px;
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0;
      height: 0;
      z-index: 0;
    }
    :hover::before {
      width: calc(100% + 40px);
      height: calc(100% + 40px);
      left: -20px;
      top: -20px;
    }
    img {
      max-width: 48px;
      margin-right: 14px;
      position: relative;
    }
    h2 {
      position: relative;
      font-size: 18px;
      margin: 0;
      text-transform: uppercase;
      sup {
        color: var(--brand);
        font-family: var(--font-regular);
        font-size: 10px;
        margin-left: 2px;
      }
    }
    p {
      position: relative;
      font-size: 13px;
      color: var(--font-grey);
      margin: 0;
      line-height: 16px;
      font-family: var(--font-regular);
    }
    @media (max-width: 376px) {
      flex-direction: column;
      align-items: flex-start;
      background-color: var(--primary-light);
      border-radius: 8px;
      padding: 20px;
      img {
        max-width: 36px;
        margin-bottom: 12px;
      }
      h2 {
        font-size: 15px;
      }
      p {
        font-size: 12px;
      }
    }
  `

  const SideProjects = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 72px 0;
    @media (max-width: 672px) {
      display: grid;
      grid-template-columns: calc(50% - 12px) calc(50% - 12px);
      grid-gap: 24px;
    }
  `

  const MainContent = styled.div`
    display: grid;
    grid-template-columns: calc(75% - 56px) 25%;
    grid-gap: 56px;
    margin: 0 auto 24px auto;
    padding: 56px 0 0 0;
    max-width: 56rem;
    @media (max-width: 672px) {
      grid-template-columns: 100%;
      grid-gap: 0;
      padding: 56px 24px;
    }
  `

  const Deadline = styled.div`
    background-color: var(--bg-grey);
    position: relative;
    display: inline-block;
    padding: 6px 14px 6px 12px;
    border-radius: 4px;
    overflow: hidden;
    color: var(--font-grey);
    img {
      width: 20px !important;
      height: 20px !important;
      min-width: 20px !important;
      margin-right: 10px !important;
    }
    .deadline {
      color: var(--black);
      margin-left: 4px;
    }
    .progress {
      position: absolute;
      left: 0;
      top: 0;
      background-color: #e1e1e1;
      display: inline-block;
      height: 100%;
    }
    p {
      position: relative;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 12px;
      img {
        margin: -3px 6px 0 0;
      }
    }
  `

  const [currentTab, setCurrentTab] = useState('Topics')

  const tabs = {
    Topics: (
      <ArticleList>
        {posts
          .filter(({ node }) => get(node, 'frontmatter.type') === 'topic')
          .map(({ node }, index) => {
            if (index < 7) {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              const spoiler = get(node, 'frontmatter.spoiler') || ''
              const status = get(node, 'frontmatter.status') || ''
              const badge = get(node, 'frontmatter.badge') || ''
              const newest =
                dayjs(node.frontmatter.date) > dayjs().subtract(1, 'month')
              return (
                <Link to={node.fields.slug} rel="bookmark" key={title}>
                  <article key={node.fields.slug}>
                    <header>
                      <div className="d-flex">
                        {node.frontmatter.thumbnail && (
                          <img
                            src={node.frontmatter.thumbnail.publicURL}
                            alt={title}
                          />
                        )}
                        <div className="article-info">
                          <h3>{title}</h3>
                          {spoiler && <p className="spoiler">{spoiler}</p>}
                          {badge && (
                            <span className={`badge ${badge}`}>{badge}</span>
                          )}
                          {status === 'In Progress' && (
                            <span className="wip">
                              <strong>WIP</strong> - Updated on{' '}
                              {node.frontmatter.updateDate}
                            </span>
                          )}
                        </div>
                      </div>
                      {newest && (
                        <div className="alert">
                          <div className="new">New!</div>
                        </div>
                      )}
                    </header>
                  </article>
                </Link>
              )
            }
          })}
      </ArticleList>
    ),
    Notes: (
      <ArticleList className="notebook">
        {posts
          .filter(({ node }) => get(node, 'frontmatter.type') === 'note')
          .map(({ node }, index) => {
            if (index < 9) {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              const newest =
                dayjs(node.frontmatter.date) > dayjs().subtract(1, 'month')
              return (
                <Link to={node.fields.slug} rel="bookmark" key={title}>
                  <article key={node.fields.slug}>
                    <header>
                      {node.frontmatter.thumbnail && (
                        <img
                          src={node.frontmatter.thumbnail.publicURL}
                          alt={title}
                        />
                      )}
                      <h3>{title}</h3>
                      {/* {newest && (
                        <div className="alert">
                          <div className="new">New!</div>
                        </div>
                      )} */}
                    </header>
                    <p className="date">{node.frontmatter.date}</p>
                  </article>
                </Link>
              )
            }
          })}
      </ArticleList>
    ),
    Challenges: (
      <ArticleList className="challenges">
        {posts
          .filter(({ node }) => get(node, 'frontmatter.type') === 'challenge')
          .map(({ node }, index) => {
            if (index < 7) {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <Link to={node.fields.slug} rel="bookmark" key={title}>
                  <article key={node.fields.slug}>
                    <header>
                      <h3>
                        {node.frontmatter.thumbnail && (
                          <img
                            src={node.frontmatter.thumbnail.publicURL}
                            alt={title}
                          />
                        )}
                        {title}
                      </h3>
                      <Deadline>
                        <span
                          className="progress"
                          style={{
                            width: `${(dayjs().diff(
                              dayjs(node.frontmatter.date),
                              'day'
                            ) *
                              100) /
                              dayjs(node.frontmatter.deadline).diff(
                                dayjs(node.frontmatter.date),
                                'day'
                              )}%`,
                          }}
                        ></span>
                        <p>
                          <img src={Alarm} alt="" />
                          Deadline:{' '}
                          <span className="deadline">
                            {node.frontmatter.deadline}
                          </span>
                        </p>
                      </Deadline>
                    </header>
                  </article>
                </Link>
              )
            }
          })}
      </ArticleList>
    ),
  }

  const TabSection = styled.div`
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 24px;
      li {
        cursor: pointer;
        margin-right: 24px;
        text-transform: uppercase;
        font-size: 16px;
        padding: 3px 12px;
        border-radius: 4px;
        font-family: var(--font-medium);
        position: relative;
        z-index: 1;
        transition: all 0.32s ease;
        span {
          position: relative;
          z-index: 1;
        }
        :active {
          transform: scale(0.9);
        }
        ::before {
          content: '';
          transition: all 0.32s ease;
          background-color: var(--bg-grey);
          border-radius: 4px;
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;
          z-index: 0;
        }
        :hover::before {
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
        }
        &.active {
          font-weight: 700;
          background-color: var(--primary);
          color: white;
          ::before {
            background-color: var(--primary);
          }
        }
      }
    }
  `

  const Activities = styled.div`
    h3 {
      margin: 0 0 24px 0;
      font-size: 16px;
      text-transform: uppercase;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        display: flex;
        a {
          color: var(--primary);
        }
        &:first-child {
          .activity-dot {
            &:before {
              box-shadow: 0 0 0 4px rgb(0, 153, 255, 0.12);
            }
          }
        }
        .activity-dot {
          position: relative;
          border-color: var(--bg-grey);
          padding: 0 0.5rem;
          &:before,
          &:after {
            content: '';
            position: absolute;
            border-color: inherit;
            border-width: 2px;
            border-style: solid;
            border-radius: 50%;
            width: 8px;
            height: 8px;
            top: 14px;
            left: 50%;
            transform: translateX(-50%);
          }
          &:before {
            border-color: var(--primary);
            z-index: 1;
          }
          &:after {
            width: 0;
            height: auto;
            top: 32px;
            bottom: -16px;
            border-right-width: 0;
            border-top-width: 0;
            border-bottom-width: 0;
            border-radius: 0;
            z-index: 0;
          }
        }
        .activity-body {
          padding: 0 0 0.25rem 1rem;
          p {
            margin: 10px 0 0 0;
            font-size: 14px;
            font-weight: 500;
            font-family: var(--font-medium);
            line-height: 1.5;
          }
          .date {
            font-size: 12px;
            color: var(--font-grey);
            font-family: var(--font-regular);
          }
        }
      }
    }
  `

  const activities = [
    {
      content:
        'New version of this site is released, checkout the <a href="https://github.com/DezineLeo/dezineleo-site" target="_blank">Source</a>.',
      date: '2020-04-08',
    },
    {
      content:
        'Become a Dribbble player. Visit my <a href="https://dribbble.com/dezineleo" target="_blank">Dribbble Page</a>.',
      date: '2018-08-01',
    },
    {
      content: 'Site is alive!',
      date: '2018-07-01',
    },
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <Aside className="d-flex justify-between align-items-center">
        <div className="hello">
          <div className="notification">
            <span style={{ fontSize: 16 }}>🎯</span> Hunting for new job!
          </div>
          <h1>
            <span style={{ fontFamily: 'var(--font-medium)' }}>Hi, I'm</span>{' '}
            Yang Jin <StyledHand>👋</StyledHand>
          </h1>
          <h3
            style={{ fontFamily: 'var(--font-regular)', fontWeight: 'normal' }}
          >
            A Web Developer / UI Designer / Illustrator / English Teacher based
            in Hangzhou, China.
          </h3>
          <Links>
            <Link to="/about">
              <button className="btn">My Resume</button>
            </Link>
            <Link to="/2019">
              <button className="btn btn-grey">2019 Report</button>
            </Link>
          </Links>
        </div>
        <img className="intro" src={Top} alt="About Yang Jin" />
      </Aside>
      <SideProjects>
        <StyledSideProject
          logo={BreakElm}
          link="/projects/break-elm"
          title="Break Elm"
          des="Elm doc for Chinese"
          version=""
        />
        <StyledSideProject
          logo={JSHub}
          link="/projects/javascript-hub"
          title="JS Hub"
          des="Learn JavaScript"
          version="v1.0.0"
        />
        <StyledSideProject
          logo={DeStatic}
          link="/destatic"
          title="DeStatic"
          des="Pug-based starter"
          version="v1.0.1"
        />
        <StyledSideProject
          logo={Decon}
          link="/decon"
          title="Decon"
          des="Icon System"
          version="v1.0"
        />
      </SideProjects>
      <FullWidthWrapper
        style={{ backgroundColor: 'var(--bg-light)', border: 'none' }}
      >
        <MainContent>
          <TabSection>
            <ul>
              {Object.keys(tabs).map(t => (
                <li
                  key={t}
                  className={currentTab === t ? 'active' : ''}
                  onClick={() => setCurrentTab(t)}
                >
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            {tabs[currentTab]}
          </TabSection>
          <Activities>
            <h3>Activities</h3>
            <ul>
              {activities.map(a => (
                <li key={a.content}>
                  <div className="activity-dot"></div>
                  <div className="activity-body">
                    <p dangerouslySetInnerHTML={{ __html: a.content }} />
                    <p className="date">{dayjs(a.date).from(dayjs())}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Activities>
        </MainContent>
        <Footer style={{ maxWidth: '56rem', margin: '0 auto' }} />
      </FullWidthWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            updateDate(formatString: "MMMM DD, YYYY")
            status
            title
            spoiler
            badge
            type
            github
            version
            site
            totalLinks
            deadline(formatString: "MMMM DD, YYYY")
            thumbnail {
              publicURL
              name
            }
          }
        }
      }
    }
  }
`
