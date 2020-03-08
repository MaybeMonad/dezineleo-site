import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
// import moment from 'moment'
import dayjs from 'dayjs'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
// import { formatPostDate, formatReadingTime } from '../utils/helpers'
// import FullWidthWrapper from '../components/FullWidthWrapper'
import JSHub from '../../static/home/logo_js_hub.svg'
import DeStatic from '../../static/home/logo_destatic.svg'
import BreakElm from '../../static/home/logo_break_elm.svg'
import Decon from '../../static/home/logo_decon.svg'
// import HYG from '../../static/home/hyg.png'
import Intro from '../../static/home/intro.png'
// import IconLink from '../../static/icon_link.svg'
import IconCode from '../../static/icon_code.svg'
import NewsArrow from '../../static/news_arrow.svg'

const Section = props => {
  const { className, children, title, external, style } = props

  return (
    <div className={className} style={style}>
      <div className="heading">
        <h3 className="d-flex justify-between align-items-center">
          <img src={IconCode} alt="" />
          {title}
        </h3>
        {external}
      </div>
      {children}
    </div>
  )
}

const StyledSection = styled(Section)`
  margin: 24px 0 24px 0;
  .heading {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0 16px 0;
    width: 100%;
    padding: 0 0 8px 0;
    h3 {
      margin: 0;
      img {
        margin-right: 8px;
      }
    }
  }
`

const ArticleList = styled.main`
  margin: 0;
  article {
    padding: 18px 24px;
    transition: background-color 0.3s ease;
    border-radius: 8px;
    margin: 0 -24px;
    position: relative;
    z-index: 1;
    ::before {
      content: '';
      transition: all 0.32s ease;
      background-color: var(--bg-grey);
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
      align-items: center;
      justify-content: space-between;
    }
    h3 {
      position: relative;
      margin-top: 0;
      display: flex;
      align-items: center;
      font-size: 1.36rem;
      line-height: 1.67rem;
      margin-bottom: 0;
      img {
        width: 36px;
        min-width: 36px;
        height: 36px;
        margin-right: 12px;
      }
    }
    p {
      position: relative;
      margin-bottom: 0;
    }
  }
  @media (max-width: 672px) {
    overflow: hidden;
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
  // const projects = get(props, 'data.allMarkdownRemark.edges').filter(
  //   ({ node }) => get(node, 'frontmatter.type') === 'project'
  // )
  // const experiments = get(props, 'data.allMarkdownRemark.edges').filter(
  //   ({ node }) => get(node, 'frontmatter.type') === 'experiment'
  // )

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
        // font-family: var(--font-medium);
        display: inline-block;
        margin-bottom: 20px;
      }
      h3 {
        font-size: 18px;
        margin: 0 0 20px 0;
      }
      h1 {
        font-size: 32px;
      }
    }
    img.intro {
      max-width: 480px;
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
        margin-left: -30px;
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
      background-color: var(--bg-grey);
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
  `

  const SideProjects = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 48px 0;
    @media (max-width: 672px) {
      display: grid;
      grid-template-columns: calc(50% - 12px) calc(50% - 12px);
      grid-gap: 24px;
    }
    @media (max-width: 376px) {
      display: grid;
      grid-template-columns: 100%;
    }
  `

  const News = props => {
    const { className, style, img, title, link, date, totalLinks } = props
    return (
      <Link to={link} className={className} style={style}>
        <div className="news_header">
          <h3>
            Issue <span>{title}</span>
          </h3>
          <img src={NewsArrow} alt="" />
        </div>
        <img src={img} alt={title} />
        <div className="news_footer">
          <span className="news_date">{dayjs(date).format('MMM D, YYYY')}</span>
          <span className="links">{totalLinks} Links</span>
        </div>
      </Link>
    )
  }

  const StyledNews = styled(News)`
    border-radius: 12px;
    padding: 5px 12px 10px 12px;
    background-color: var(--black);
    color: white;
    display: block;
    .news_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        font-size: 16px;
        margin: 0 0 5px 0;
        span {
          color: #ffe293;
        }
      }
      img {
        width: 10px;
        margin: 0 0 5px 0;
      }
    }
    img {
      max-width: 100%;
      width: 100%;
    }
    .news_footer {
      span {
        font-size: 12px;
        line-height: 16px;
        margin: 0 10px 0 0;
        font-family: var(--font-medium);
        border-radius: 4px;
        color: var(--font-grey);
        background-color: #4a4a4a;
        padding: 3px 6px;
      }
    }
  `

  const MainContent = styled.div`
    display: grid;
    grid-template-columns: calc(75% - 56px) 25%;
    grid-gap: 56px;
    @media (max-width: 672px) {
      grid-template-columns: 100%;
      grid-gap: 0;
    }
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <Aside className="d-flex justify-between align-items-center">
        <div className="hello">
          <div className="notification">
            <span style={{ fontSize: 16 }}>🎯</span> Hunting for new job!
          </div>
          <h1 style={{ margin: '0 0 8px 0' }}>
            <span style={{ fontFamily: 'var(--font-medium)' }}>Hi, I'm</span>{' '}
            Yang Jin <StyledHand>👋</StyledHand>
          </h1>
          <h3
            style={{ fontFamily: 'var(--font-regular)', fontWeight: 'normal' }}
          >
            A designer && maker based in Hangzhou, China.
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
        <img className="intro" src={Intro} alt="About Yang Jin" />
      </Aside>
      <SideProjects>
        <StyledSideProject
          logo={BreakElm}
          link="/break-elm"
          title="Break Elm"
          des="Elm doc for Chinese"
          version=""
        />
        <StyledSideProject
          logo={JSHub}
          link="/javascript-hub"
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
      <MainContent>
        <StyledSection
          title="Latest"
          external={
            <Link to="/archive">
              <button className="btn btn-small btn-grey">View All</button>
            </Link>
          }
        >
          <ArticleList>
            {posts
              .filter(({ node }) => get(node, 'frontmatter.type') !== 'news')
              .map(({ node }, index) => {
                if (index < 7) {
                  const title =
                    get(node, 'frontmatter.title') || node.fields.slug
                  const newest =
                    dayjs(node.frontmatter.date) > dayjs().subtract(1, 'month')
                  return (
                    <Link
                      style={{
                        boxShadow: 'none',
                        color: 'var(--black)',
                        fontFamily: 'var(--font-bold)',
                      }}
                      to={node.fields.slug}
                      rel="bookmark"
                      key={title}
                    >
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
        </StyledSection>
        <StyledSection title="News">
          {posts
            .filter(({ node }) => get(node, 'frontmatter.type') === 'news')
            .map(({ node }, index) => {
              const { title, thumbnail, date, totalLinks } = node.frontmatter
              return (
                <StyledNews
                  link={node.fields.slug}
                  img={thumbnail.publicURL}
                  title={title}
                  date={date}
                  totalLinks={totalLinks}
                  key={title}
                />
              )
            })}
        </StyledSection>
      </MainContent>
      <Footer />
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
            title
            spoiler
            type
            github
            version
            site
            totalLinks
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
