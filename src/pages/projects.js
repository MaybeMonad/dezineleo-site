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
        <Link to={p.link} key={p.title}>
          <h4>{p.title}</h4>
          <p>{p.description}</p>
        </Link>
      ))}
    </div>
  )
}

const StyledProjects = styled(Projects)`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  width: calc(100% - 24px);
  grid-gap: 12px;
  a {
    border: var(--border);
    border-radius: 4px;
    padding: 16px 20px;
    display: inline-block;
    box-shadow: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    :first-child {
      margin-left: 0;
    }
    :hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
      border-color: var(--black);
    }
    h4 {
      text-transform: none;
      letter-spacing: 0;
      margin: 0 0 8px 0;
      font-family: 'ubunturegular';
    }
    p {
      margin: 0;
      color: var(--font-grey);
      font-size: 13px;
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

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <aside>
        <Bio />
      </aside>
      <StyledSection
        title="All Projects"
        // external={
        //   <Lang>
        //     <li className={langKey === 'en' ? 'active' : ''}>
        //       <a href="/">En</a>
        //     </li>
        //     <li className={langKey === 'zh-hans' ? 'active' : ''}>
        //       <a href="/zh-hans">Zh</a>
        //     </li>
        //   </Lang>
        // }
      >
        <main>
          <StyledProjects
            data={posts
              .filter(({ node }) => get(node, 'frontmatter.type') === 'project')
              .map(({ node }, index) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                return {
                  title,
                  description: node.frontmatter.spoiler,
                  link: node.fields.slug,
                }
              })}
          />
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
          }
        }
      }
    }
  }
`
