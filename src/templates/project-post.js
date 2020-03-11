import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
// import Img from 'gatsby-image'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import styled from 'styled-components'
import Footer from '../components/Footer'
import { formatPostDate } from '../utils/helpers'

export default props => {
  const post = props.data.markdownRemark
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  let { slug, translations } = props.pageContext
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
      &.active {
        background: var(--black);
        a {
          color: white;
        }
      }
    }
  `

  const StyledLang = styled(Lang)`
    border: var(--border);
    padding: 12px 16px;
    display: inline-flex;
    font-size: 14px;
  `

  const Cover = styled.img`
    max-width: 120%;
    border-radius: 12px;
    margin: 24px 0 32px -10%;
    // box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    //   0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    //   0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    //   0 100px 80px rgba(0, 0, 0, 0.07);
  `

  const Project = styled.main`
    max-width: 52rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .sidebar {
      max-width: 180px;
      min-width: 180px;
      padding-left: 80px;
      position: sticky;
      top: 2rem;
      .price {
        font-family: var(--font-bold);
        font-size: 42px;
      }
      button {
        width: 100%;
        margin-bottom: 14px;
      }
      h3 {
        border-bottom: 1px solid var(--border-grey);
        font-size: 15px;
      }
      p {
        font-size: 13px;
      }
      ul {
        &.compatible_ul {
          list-style: none;
          padding: 0;
          margin: 0;
          li {
            &::before {
              margin-right: 0.3rem;
              content: '✅';
            }
          }
        }
        li {
          font-size: 13px;
        }
      }
    }
    article {
      padding: 20px 0 0 0;
    }
    header {
      h1 {
        margin: 0;
        font-size: 42px;
      }
      p {
        margin: 12px 0 0 0;
        &.version {
          font-size: 12px;
          color: var(--font-grey);
          margin-top: 5px;
        }
      }
      ul {
        &.tags {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: flex-start;
          li {
            background-color: var(--bg-grey);
            color: var(--font-grey);
            font-size: 12px;
            font-family: var(--font-medium);
            padding: 2px 8px;
            border-radius: 4px;
            margin-right: 12px;
          }
        }
      }
    }
  `

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        lang={lang}
        title={post.frontmatter.title}
        description={post.frontmatter.spoiler}
        slug={post.fields.slug}
      />
      <Cover
        className="cover"
        src={post.frontmatter.cover.publicURL}
        alt={post.frontmatter.title}
      />
      <Project>
        <div className="main_content">
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div className="d-flex justify-start align-items-start">
              <img
                style={{ maxWidth: 42, margin: '40px 20px 0 0' }}
                src={post.frontmatter.logo?.publicURL}
                alt={post.frontmatter.title}
              />
              <div>
                <ul className="tags">
                  {post.frontmatter.tags.map(t => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <h1>{post.frontmatter.title}</h1>
                <p>{post.frontmatter.spoiler}</p>
                <p className="version">
                  Version: {post.frontmatter.version} / Last update:{' '}
                  {post.frontmatter.updateDate}
                </p>
              </div>
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
          <article>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </div>
        <div className="sidebar">
          <div className="price">{post.frontmatter.price}</div>
          {post.frontmatter.github && (
            <a href={post.frontmatter.github} target="_blank">
              <button className="btn btn-primary btn-large">Source Code</button>
            </a>
          )}
          {post.frontmatter.site && (
            <a href={post.frontmatter.site} target="_blank">
              <button className="btn btn-grey btn-large">Live Preview</button>
            </a>
          )}
          <h3>Compatible With</h3>
          <ul className="compatible_ul">
            {post.frontmatter.compatibility.map(c => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <h3>Last Update</h3>
          <p>{post.frontmatter.updateDate}</p>
          <h3>Created</h3>
          <p>{post.frontmatter.date}</p>
          <h3>Version</h3>
          <p>{post.frontmatter.version}</p>
        </div>
      </Project>
      <aside style={{ margin: '56px auto 48px auto', maxWidth: '52rem' }}>
        <Bio />
      </aside>
      <Footer style={{ margin: '0 auto', maxWidth: '52rem' }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
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
        version
        updateDate(formatString: "MMMM DD, YYYY")
        price
        compatibility
        tags
        cover {
          publicURL
          name
        }
        thumbnail {
          publicURL
          name
        }
        logo {
          publicURL
          name
        }
      }
      fields {
        slug
        langKey
      }
    }
  }
`
