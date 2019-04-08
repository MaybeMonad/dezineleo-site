import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import { formatPostDate, formatReadingTime } from '../utils/helpers'
import { rhythm } from '../utils/typography'
import Panel from '../components/Panel'
import systemFont from '../utils/typography'

class BlogIndexTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const langKey = this.props.pageContext.langKey

    const posts = get(this, 'props.data.allMarkdownRemark.edges').filter(
      ({ node }) => node.fields.langKey === langKey
    )

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <aside>
          <Bio />
        </aside>
        <h3>Projects</h3>

        <h3>Posts</h3>
        <main>
          {langKey !== 'en' && <Panel>仔细看，这不是翻译，也许有彩蛋。</Panel>}

          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      fontFamily: `ubuntu_lightregular, ${systemFont}`,
                      fontSize: rhythm(0.85),
                      marginBottom: rhythm(1 / 4),
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
                      fontFamily: `ubuntu_lightregular, ${systemFont}`,
                      marginBottom: rhythm(1 / 4),
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
        <Footer />
      </Layout>
    )
  }
}

export default BlogIndexTemplate

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
