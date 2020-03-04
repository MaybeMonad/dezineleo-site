import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import dayjs from 'dayjs'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
// import Footer from '../components/Footer'

const Archive = styled.div`
  border-bottom: 1px solid var(--border-grey);
  .post {
    margin-bottom: 32px;
    img {
      width: 36px;
      min-width: 36px;
      margin-right: 12px;
    }
    h3,
    p {
      margin: 0;
      line-height: 1.2;
      transition: color 0.32s ease;
    }
    p {
      font-family: var(--font-regular);
      color: var(--font-grey);
      font-size: 14px;
      margin-top: 4px;
    }
    &:hover {
      h3 {
        color: var(--primary);
      }
    }
  }
`

const Posts = props => {
  const { className, data } = props

  const years = Array.from(new Set(data.map(e => dayjs(e.date).year())))
  const archive = years.map(y => ({
    year: y,
    posts: data.filter(d => dayjs(d.date).year() === y),
  }))

  console.log(archive)

  return (
    <div className={className}>
      {archive.map(a => (
        <Archive>
          <h2 className="year">{a.year}</h2>
          {a.posts.map(p => (
            <Link to={p.link}>
              <div className="post d-flex justify-start align-items-start">
                <img src={p.thumbnail?.publicURL} alt={p.title} />
                <div className="post-title">
                  <h3>{p.title}</h3>
                  <p>{p.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </Archive>
      ))}
    </div>
  )
}

const StyledPosts = styled(Posts)`
  max-width: 48rem;
  margin: 0 auto;
`

export default props => {
  const {
    pageContext: { langKey },
    location,
  } = props
  const siteTitle = get(props, 'props.data.site.siteMetadata.title')
  const posts = get(props, 'data.allMarkdownRemark.edges')

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <StyledPosts
        data={posts.map(({ node }, index) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return {
            title,
            description: node.frontmatter.spoiler,
            link: node.fields.slug,
            github: node.frontmatter.github,
            version: node.frontmatter.version,
            site: node.frontmatter.site,
            thumbnail: node.frontmatter.thumbnail,
            date: node.frontmatter.date,
          }
        })}
      />
      {/* <Footer /> */}
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
