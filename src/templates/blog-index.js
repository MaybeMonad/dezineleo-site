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
// import Panel from '../components/Panel'

const Projects = props => {
  const { className, data } = props

  return (
    <div className={className}>
      {data.map(p => (
        <div className="project-card" key={p.title}>
          <div className="project-content">
            <h4>
              <Link to={p.link} key={p.title}>
                {p.title}
              </Link>
              {p.version && <sup>{p.version}</sup>}
            </h4>
            <p className="project-description">{p.description}</p>
            {p.thumbnail && (
              <img
                style={{
                  margin: '20px 0 10px 0',
                  maxWidth: '100%',
                  width: '100%',
                }}
                src={p.thumbnail.publicURL}
              />
            )}
          </div>
          <div className="project-links">
            {p.site ? (
              <a href={p.site} target="_blank">
                Live
              </a>
            ) : (
              <Link to={p.link}>Intro</Link>
            )}
            {p.github && (
              <a href={p.github || ''} target="_blank">
                GitHub
              </a>
            )}
            {/* {p.version && <span className="project-version">{p.version}</span>} */}
          </div>
        </div>
      ))}
    </div>
  )
}

const StyledProjects = styled(Projects)`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  width: calc(100% - 40px);
  grid-gap: 20px;
  .project-card {
    border: var(--border);
    padding: 16px 20px;
    display: inline-block;
    box-shadow: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    :first-child {
      margin-left: 0;
    }
    :hover {
      box-shadow: 0 0 0 3px var(--black);
      border-color: var(--black);
      // cursor: pointer;
    }
    h4 {
      text-transform: none;
      letter-spacing: 0;
      margin: 0 0 2px 0;
      font-size: 18px;
      a {
        font-family: var(--font-bold);
        box-shadow: none;
      }
      sup {
        margin-left: 4px;
        font-size: 12px;
        font-style: normal;
        font-family: var(--font-light);
      }
    }
    .project-version {
      font-size: 12px;
      color: white;
      font-family: var(--font-light);
      background-color: var(--black);
      border-radius: 10px;
      padding: 1px 5px;
    }
    p {
      margin: 0;
      color: var(--font-grey);
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .project-links {
      border-top: var(--border);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      width: 100%;
      margin: 16px 0 0 -20px;
      padding: 8px 20px 0 20px;
      a {
        margin-right: 12px;
        font-size: 13px;
      }
    }
  }
  @media (max-width: 672px) {
    grid-template-columns: 100%;
    width: 100%;
  }
`

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
  const projects = get(props, 'data.allMarkdownRemark.edges').filter(
    ({ node }) => get(node, 'frontmatter.type') === 'project'
  )
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
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <aside
        className="d-flex justify-between align-items-center"
        style={{ padding: '24px 0' }}
      >
        <div style={{ marginRight: 48, maxWidth: 442 }}>
          <h1 style={{ margin: '0 0 8px 0' }}>
            Hello. <StyledHand>👋</StyledHand>
          </h1>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-medium)' }}>
            I'm a designer && maker.
          </h3>
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
      </aside>
      <Logos>
        <img src={LogoDecon} alt="Decon" />
        <img src={LogoY} alt="Y" />
        <img src={LogoD} alt="D" />
        <img src={LogoA} alt="A" />
        <img src={LogoN} alt="N" />
      </Logos>
      <StyledSection
        title="Projects"
        external={
          <a className="btn" href="/projects" style={{ fontSize: 13 }}>
            All Projects
          </a>
        }
      >
        {/* <StyledProjects data={projects} /> */}
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
      </StyledSection>
      <StyledSection
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
      </StyledSection>
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
