import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import styled from 'styled-components'
import { formatPostDate, formatReadingTime } from '../utils/helpers'

export default props => {
  const post = props.data.markdownRemark
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  let { previous, next, slug, translations } = props.pageContext
  const lang = post.fields.langKey

  // Replace original links with translated when available.
  let html = post.html

  const createLanguageLink = (slug, lang) => {
    const rawSlug = slug.replace(`${lang}/`, '')

    return targetLang =>
      targetLang === 'en' ? rawSlug : `${targetLang}${rawSlug}`
  }

  const languageLink = createLanguageLink(slug, lang)

  const Lang = styled.ul`
    display: flex;
    justify-content: between;
    align-items: center;
    list-style: none;
    margin: 0;
    color: var(--font-grey);
    li {
      margin: 0 0 0 8px;
      font-size: 13px;
      padding: 3px 6px;
      border-radius: 3px;
      &.active {
        background: var(--primary);
        a {
          color: white;
        }
      }
    }
  `

  const StyledLang = styled(Lang)`
    border: var(--border);
    border-radius: 3px;
    padding: 12px 16px;
    display: inline-flex;
    font-size: 14px;
  `

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        lang={lang}
        title={post.frontmatter.title}
        description={post.frontmatter.spoiler}
        slug={post.fields.slug}
      />
      <main>
        <article>
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <h1
                style={{ color: 'var(--textTitle)', marginBottom: '0.42rem' }}
              >
                {post.frontmatter.title}
              </h1>
              <p
                style={{
                  display: 'block',
                  marginTop: '0.3rem',
                  fontSize: 14,
                  color: 'var(--font-grey)',
                  fontWeight: 'normal',
                }}
              >
                {formatPostDate(post.frontmatter.date, lang)}
                {` • ${formatReadingTime(post.timeToRead)}`}
              </p>
            </div>
            {translations.length > 0 && (
              <StyledLang>
                Change Lang:
                <li className={lang === 'en' ? 'active' : ''}>
                  <Link to={languageLink('en')}>En</Link>
                </li>
                <li className={lang !== 'en' ? 'active' : ''}>
                  <Link to={languageLink('zh-hans')}>Zh</Link>
                </li>
              </StyledLang>
            )}
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
      <aside style={{ marginTop: 24 }}>
        <Bio />
        <nav>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </aside>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
        type
        github
        site
      }
      fields {
        slug
        langKey
      }
    }
  }
`
