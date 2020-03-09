import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
// import Img from 'gatsby-image'

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

  useEffect(() => {
    const selector = ['article h2', 'article h3']
    const nodes = document.querySelectorAll(selector)
    const config = {
      threshold: 0,
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id')
        const target = document.querySelector(`.toc li a[href="#${id}"]`)
        if (target) {
          if (entry.intersectionRatio > 0) {
            target.classList.add('active')
          } else {
            target.classList.remove('active')
          }
        }
      })
    }, config)

    nodes.forEach(section => {
      observer.observe(section)
    })

    // return () => {
    //   // cleanup
    // };
  }, [])

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

  const ProjectHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 40px);
    padding: 15px 20px;
    margin: 12px 0 32px 0;
    ${'' /* background-color: var(--primary-light); */}
    background-color: #fff5d9;
    border-radius: 8px;
    ${'' /* color: var(--primary); */}
    @media (max-width: 672px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      .left {
        margin-bottom: 12px;
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
      <main>
        <article>
          {post.frontmatter.thumbnail && post.frontmatter.type === 'topic' && (
            <img
              src={post.frontmatter.thumbnail.publicURL}
              alt=""
              style={{ width: 72 }}
            />
          )}
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {post.frontmatter.type === 'project' ? (
              <div style={{ width: '100%' }}>
                <ProjectHeader>
                  <div className="d-flex justify-start align-items-center left">
                    <img
                      style={{ maxWidth: 36, marginRight: 10 }}
                      src={post.frontmatter.logo?.publicURL}
                      alt={post.frontmatter.title}
                    />
                    <h3 style={{ margin: 0 }}>{post.frontmatter.title}</h3>
                  </div>
                  <div>
                    {post.frontmatter.site && (
                      <a
                        href={post.frontmatter.site}
                        target="_blank"
                        style={{ marginRight: 10 }}
                      >
                        <button className="btn btn-small">View</button>
                      </a>
                    )}
                    {post.frontmatter.github && (
                      <a href={post.frontmatter.github} target="_blank">
                        <button className="btn btn-small">GitHub</button>
                      </a>
                    )}
                  </div>
                </ProjectHeader>
                <div>
                  <h1
                    style={{
                      color: 'var(--textTitle)',
                      marginBottom: '0.42rem',
                    }}
                  >
                    {post.frontmatter.title}
                  </h1>
                  <p>{post.frontmatter.spoiler}</p>
                </div>
              </div>
            ) : (
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
                    color: 'rgba(0,0,0,.6)',
                    fontWeight: 'normal',
                  }}
                >
                  {formatPostDate(post.frontmatter.date, lang)}
                  {` / ${formatReadingTime(post.timeToRead)}`}
                </p>
              </div>
            )}
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
      <aside style={{ margin: '56px auto 0 auto', maxWidth: '46rem' }}>
        <Bio />
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
