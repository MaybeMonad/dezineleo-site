import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
// import Lang from '../components/Lang'
// import { formatPostDate, formatReadingTime } from '../utils/helpers'
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
            {/* {p.thumbnail && (
              <img
                style={{
                  margin: '20px 0 10px 0',
                  maxWidth: '100%',
                  width: '100%',
                }}
                src={p.thumbnail.publicURL}
              />
            )} */}
          </div>
          <div className="project-links">
            {p.site ? (
              <a href={p.site} target="_blank">
                Live
              </a>
            ) : (
              <Link to={p.link}>Read More</Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

const StyledProjects = styled(Projects)`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  width: calc(100% - 80px);
  grid-gap: 40px;
  .project-card {
    // border: var(--border);
    background-color: var(--dark-1);
    border-radius: 16px;
    padding: 32px 32px;
    display: inline-block;
    box-shadow: none;
    transition: border-color 0.15s ease, transform 0.25s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    :first-child {
      margin-left: 0;
    }
    :hover {
      // box-shadow: 0 0 0 3px var(--dark-3);
      transform: scale(1.1);
      border-color: var(--black);
      // cursor: pointer;
    }
    h4 {
      text-transform: none;
      letter-spacing: 0;
      margin: 0 0 2px 0;
      font-size: 21px;
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
      // border-top: var(--border);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      width: 100%;
      margin: 16px 0 0 -20px;
      padding: 8px 20px 0 20px;
      a {
        margin-right: 12px;
        font-size: 13px;
        background-color: var(--dark-2);
        padding: 6px 15px;
        border-radius: 4px;
        :hover {
          background-color: var(--dark-3);
        }
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
  margin: 0 0 56px 0;
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
  const projects = get(props, 'data.allMarkdownRemark.edges').filter(
    ({ node }) => get(node, 'frontmatter.type') === 'note'
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      {/* <aside>
        <Bio />
      </aside> */}
      <StyledSection
        title="All Notes"
        // external={
        //   <a className="btn" href="/projects" style={{ fontSize: 13 }}>
        //     All Projects
        //   </a>
        // }
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
