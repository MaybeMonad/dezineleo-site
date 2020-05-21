import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
// import Img from 'gatsby-image'
import Prism from 'prismjs'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import styled from 'styled-components'
import Footer from '../components/Footer'
import { formatPostDate, formatReadingTime } from '../utils/helpers'
import profilePic from '../assets/avatar.png'

export default props => {
  const post = props.data.markdownRemark
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  // let { previous, next, slug, translations } = props.pageContext
  const lang = post.fields.langKey

  useEffect(() => {
    Prism.highlightAll()
  }, [post])

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

  // const createLanguageLink = (slug, lang) => {
  //   const rawSlug = slug.replace(`${lang}/`, '')

  //   return targetLang =>
  //     targetLang === 'en' ? rawSlug : `${targetLang}${rawSlug}`
  // }

  // const languageLink = createLanguageLink(slug, lang)

  // const Lang = styled.ul`
  //   display: flex;
  //   justify-content: between;
  //   align-items: center;
  //   list-style: none;
  //   margin: 0;
  //   color: var(--font-grey);
  //   li {
  //     margin: 0 0 0 8px;
  //     font-size: 13px;
  //     padding: 3px 6px;
  //     &.active {
  //       background: var(--black);
  //       a {
  //         color: white;
  //       }
  //     }
  //   }
  // `

  // const StyledLang = styled(Lang)`
  //   border: var(--border);
  //   padding: 12px 16px;
  //   display: inline-flex;
  //   font-size: 14px;
  // `

  const PostHeader = styled.header`
    width: 72rem;
    margin: 0 0 0 -18rem;
    h1 {
      font-size: 2.8rem;
      margin: 12px 0;
      text-align: center;
    }
    .spoiler {
      font-size: 24px;
      font-family: var(--font-light);
      font-weight: 200;
      line-height: 1.4;
      text-align: center;
    }
    .cover {
      max-width: 100%;
      margin: 36px 0 0 0;
      display: block;
      border-radius: 6px;
    }
    .post-info {
      border-bottom: var(--border);
      display: flex;
      justify-content: space-between;
      margin: 0 0 64px 0;
      align-items: center;
      .author {
        display: block;
        font-size: 14px;
        color: var(--font-grey);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        line-height: 1;
        padding: 16px 0;
        font-size: 12px;
        h4 {
          margin: 0 0 5px 0;
          color: var(--black);
          text-transform: uppercase;
          font-size: 13px;
        }
        img {
          width: 36px;
          height: 36px;
          border-radius: 100px;
          margin-right: 12px;
        }
      }
      .more {
        .tags {
          text-transform: uppercase;
          color: var(--primary);
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 12px;
          li {
            display: inline-block;
            background-color: rgb(0, 153, 255, 0.12);
            border-radius: 4px;
            padding: 4px 10px;
            margin: 0 12px 0 0;
            font-family: var(--font-medium);
          }
        }
        .info {
          margin-top: 0;
          display: inline-block;
          font-size: 12px;
          border-radius: 4px;
          padding: 4px 10px;
          color: var(--black);
        }
      }
    }
    @media (max-width: 672px) {
      max-width: 100%;
      margin: 0;
      h1,
      .spoiler {
        text-align: left;
      }
      h1 {
        font-size: 2rem;
      }
      .spoiler {
        font-size: 18px;
      }
      .post-info {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 36px;
        .more {
          .tags {
            li {
              margin: 0 12px 12px 0;
            }
          }
        }
      }
      .info {
        font-size: 14px;
        margin-bottom: 16px;
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
          <PostHeader>
            <h1 style={{ color: 'var(--textTitle)', marginBottom: '0.42rem' }}>
              {post.frontmatter.title}
            </h1>
            <div className="spoiler">{post.frontmatter.spoiler}</div>
            {post.frontmatter.cover && (
              <img
                className="cover"
                src={post.frontmatter.cover.publicURL}
                alt={post.frontmatter.title}
              />
            )}
            <div className="post-info">
              <div className="author">
                <img src={profilePic} alt="@dezineleo" />
                <div>
                  <h4>Yang Jin</h4>
                  {`${formatPostDate(post.frontmatter.date, lang)}`}
                  {` / ${formatReadingTime(post.timeToRead)}`}
                </div>
              </div>
              <div className="more">
                {post.frontmatter.tags && (
                  <ul className="tags">
                    {post.frontmatter.tags.map(tag => (
                      <li key={tag}>{tag}</li>
                    ))}
                    {post.frontmatter.status === 'In Progress' && (
                      <div className="info">
                        🚧 <b>WIP</b> – Last updated{' '}
                        {post.frontmatter.updateDate}.
                      </div>
                    )}
                  </ul>
                )}
              </div>
            </div>
            {/* {translations.length > 0 && (
              <StyledLang>
                Change Lang:
                <li className={lang === 'en' ? 'active' : ''}>
                  <Link to={languageLink('en')}>En</Link>
                </li>
                <li className={lang !== 'en' ? 'active' : ''}>
                  <Link to={languageLink('zh-hans')}>Zh</Link>
                </li>
              </StyledLang>
            )} */}
          </PostHeader>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
      <aside style={{ margin: '56px auto 48px auto', maxWidth: '46rem' }}>
        <Bio />
      </aside>
      <Footer style={{ margin: '0 auto', maxWidth: '46rem' }} />
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
        updateDate(formatString: "MMMM DD, YYYY")
        spoiler
        type
        status
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
