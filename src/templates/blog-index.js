import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
// import Img from 'gatsby-image'

import MiniBio from '../components/MiniBio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import Lang from '../components/Lang'
import { formatPostDate, formatReadingTime } from '../utils/helpers'
import LogoDecon from '../../static/logo_decon.svg'
import LogoY from '../../static/logo_y.svg'
import LogoD from '../../static/logo_d.svg'
import LogoA from '../../static/logo_a.svg'
import LogoN from '../../static/logo_n.svg'
import JSHubLogo from '../../static/featured_projects/js_hub.svg'
import DeStaticRocket from '../../static/featured_projects/destatic.svg'
import MoreProjects01 from '../../static/featured_projects/more_01.svg'
import MoreProjects02 from '../../static/featured_projects/more_02.svg'
// import Panel from '../components/Panel'

const Section = props => {
  const { className, children, title, external } = props

  return (
    <div className={className}>
      <div className="heading">
        <h3>{title}</h3>
        {external}
      </div>
      {children}
    </div>
  )
}

const StyledSection = styled(Section)`
  margin: 32px 0 24px 0;
  .heading {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0 16px 0;
    width: 100%;
    padding: 0 0 16px 0;
    h3 {
      margin: 0;
    }
  }
`

const ArticleList = styled.main`
  padding: 12px;
  article {
    padding: 20px;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: var(--bg-grey);
    }
    h3 {
      margin-top: 0;
    }
    p {
      margin-bottom: 0;
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
  const experiments = get(props, 'data.allMarkdownRemark.edges').filter(
    ({ node }) => get(node, 'frontmatter.type') === 'experiment'
  )

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
      // display: grid;
      // grid-template-columns: auto auto auto auto auto;
      // grid-column-gap: 20px;
      // grid-row-gap: 20px;
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

  const Aside = styled.aside`
    padding: 24px 0;
    .hello {
      margin-right: 48px;
      max-width: 442px;
    }
    @media (max-width: 672px) {
      flex-direction: column;
      align-items: flex-start;
      .hello {
        margin: 0 0 32px 0;
      }
    }
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <Aside className="d-flex justify-between align-items-center">
        <div className="hello">
          <h1 style={{ margin: '0 0 8px 0' }}>
            Hello. <StyledHand>👋</StyledHand>
          </h1>
          <h3 style={{ margin: 0 }}>I'm a designer && maker.</h3>
          <p style={{ marginBottom: 14, fontSize: 14, lineHeight: '22px' }}>
            Back in the day, I was working as a WordPress theme developer. In
            2017, I came to Hangzhou to become a full-time web developer and UI
            designer.
          </p>
          <Links>
            <Link to="/about">#resume</Link>
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
      {/* <StyledSection
        title="Projects"
        external={
          <a className="btn" href="/projects" style={{ fontSize: 13 }}>
            All Projects
          </a>
        }
      >
        <StyledProjects
          data={projects.map(({ node }, index) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return {
              title,
              description: node.frontmatter.spoiler,
              link: node.fields.slug,
              github: node.frontmatter.github,
              version: node.frontmatter.version,
              site: node.frontmatter.site,
              thumbnail: node.frontmatter.thumbnail,
            }
          })}
        />
      </StyledSection> */}
      {/* <StyledSection
        title="Playground"
        external={
          <a className="btn" href="" style={{ fontSize: 13 }}>
            All Experiments
          </a>
        }
      >
        <StyledProjects
          data={experiments.map(({ node }, index) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return {
              title,
              description: node.frontmatter.spoiler,
              link: node.fields.slug,
              github: node.frontmatter.github,
            }
          })}
        />
      </StyledSection> */}
      <StyledSection
        title="Topics"
        external={
          <Lang>
            <li className={langKey === 'en' ? 'active' : ''}>
              <a href="/">En</a>
            </li>
            <li className={langKey === 'zh-hans' ? 'active' : ''}>
              <a href="/zh-hans">Zh</a>
            </li>
          </Lang>
        }
      >
        <ArticleList>
          {posts
            .filter(({ node }) => get(node, 'frontmatter.type') === 'topic')
            .map(({ node }, index) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <article key={node.fields.slug}>
                  <header>
                    <h3
                      style={{
                        fontSize: '1.36rem',
                        marginBottom: 0,
                        // marginTop: index === 0 ? 0 : '3.5rem',
                      }}
                    >
                      <Link
                        style={{
                          boxShadow: 'none',
                          color: 'var(--black)',
                          fontFamily: 'var(--font-bold)',
                        }}
                        to={node.fields.slug}
                        rel="bookmark"
                      >
                        {title}
                      </Link>
                    </h3>
                    <small
                      style={{
                        // fontFamily: systemFont,
                        // marginBottom: rhythm(1 / 4),
                        color: '#83858E',
                      }}
                    >
                      {formatPostDate(node.frontmatter.date, 'en')}
                      {` • ${formatReadingTime(node.timeToRead)}`}
                    </small>
                  </header>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.spoiler,
                    }}
                  />
                </article>
              )
            })}
        </ArticleList>
      </StyledSection>
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
