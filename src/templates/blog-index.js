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

const projects = [
  {
    title: 'De Design',
    description: 'Minimalist design system',
    link: '/de-design-system',
  },
  {
    title: 'De Components',
    description: 'Curated React UI Components.',
    link: 'https://github.com/DezineLeo/de-design',
  },
  {
    title: 'De HTML Starter',
    description: 'A stater HTML Template using Pug, Sass, Webpack, Gulp.',
    link: 'https://github.com/DezineLeo/DeHTML',
  },
]

const Projects = props => {
  const { className, data } = props

  return (
    <div className={className}>
      {data.map(p => (
        <a href={p.link} target="_blank" key={p.title}>
          <h4>{p.title}</h4>
          <p>{p.description}</p>
        </a>
      ))}
    </div>
  )
}

const StyledProjects = styled(Projects)`
  display: flex;
  a {
    border: var(--border);
    border-radius: 4px;
    padding: 16px 20px;
    display: inline-block;
    width: calc(33.33% - 8px);
    box-shadow: none;
    margin-left: 12px;
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
      font-family: 'ubuntu_lightregular';
    }
    p {
      margin: 0;
      color: var(--font-grey);
      font-size: 13px;
    }
  }
  @media (max-width: 672px) {
    flex-direction: column;
    a {
      width: calc(100% - 40px);
      margin: 0 0 12px 0;
    }
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
        title="Projects"
        external={
          <a href="" style={{ fontSize: 13 }}>
            All Projects
          </a>
        }
      >
        <StyledProjects data={projects} />
      </StyledSection>
      <StyledSection
        title="Posts"
        external={
          <Lang>
            <li className={langKey === 'en' ? 'active' : ''}>
              <a href="/">En</a>
            </li>
            <li className={langKey !== 'en' ? 'active' : ''}>
              <a href="/zh-hans">Zh</a>
            </li>
          </Lang>
        }
      >
        <main>
          {langKey !== 'en' && <Panel>仔细看，这不是翻译，也许有彩蛋。</Panel>}

          {posts.map(({ node }, index) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      // fontFamily: systemFont,
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
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
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
          }
        }
      }
    }
  }
`
