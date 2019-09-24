import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import Lang from '../components/Lang'
import { formatPostDate, formatReadingTime } from '../utils/helpers'
import Panel from '../components/Panel'

const Projects = props => {
  const { className, data } = props

  return (
    <div className={className}>
      {data.map(p => (
        <div className="project-card" key={p.title}>
          <div className="project-content">
            <h4>{p.title}</h4>
            <p className="project-description">{p.description}</p>
          </div>
          <div className="project-links">
            <Link to={p.link} key={p.title}>
              Intro
            </Link>
            {p.github && <a href={p.github || ''}>GitHub</a>}
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
  width: calc(100% - 24px);
  grid-gap: 12px;
  .project-card {
    border: var(--border);
    background-color: white;
    border-radius: 6px;
    padding: 16px 20px;
    display: inline-block;
    box-shadow: none;
    transition: border-color 0.3s ease, box-shadow 0.4s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    :first-child {
      margin-left: 0;
    }
    :hover {
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.06);
      border-color: var(--black);
      cursor: pointer;
      .project-links {
        border-color: var(--black);
      }
    }
    h4 {
      text-transform: none;
      letter-spacing: 0;
      margin: 0 0 8px 0;
      font-family: 'ubunturegular';
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
      font-size: 13px;
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
    margin: 28px 0 16px 0;
    width: 100%;
    // border-bottom: var(--border);
    padding: 0 0 16px 0;
    h3 {
      margin: 0;
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

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <aside>
        <Bio />
      </aside>
      <StyledSection
        title="Projects"
        external={
          <a href="/projects" style={{ fontSize: 13 }}>
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
            }
          })}
        />
      </StyledSection>
      <StyledSection
        title="Playground"
        external={
          <a href="" style={{ fontSize: 13 }}>
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
        <main>
          {posts
            .filter(({ node }) => get(node, 'frontmatter.type') === 'topic')
            .map(({ node }, index) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <article key={node.fields.slug}>
                  <header>
                    <h3
                      style={{
                        fontFamily: 'ubunturegular',
                        fontSize: '1.36rem',
                        marginBottom: 0,
                        marginTop: index === 0 ? 0 : '3.5rem',
                      }}
                    >
                      <Link
                        style={{ boxShadow: 'none' }}
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
        </main>
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
          }
        }
      }
    }
  }
`
