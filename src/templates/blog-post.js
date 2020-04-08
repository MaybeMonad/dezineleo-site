import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
// import Img from 'gatsby-image'

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
    .tags {
      text-transform: uppercase;
      color: var(--font-grey);
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 12px;
      li {
        display: inline-block;
        background-color: var(--bg-grey);
        border-radius: 4px;
        padding: 4px 10px;
        margin-right: 12px;
      }
    }
    h1 {
      font-size: 2.8rem;
      margin: 12px 0;
    }
    .spoiler {
      font-size: 24px;
      font-family: var(--font-light);
      font-weight: 100;
      line-height: 1.4;
    }
    .post-info {
      display: block;
      margin: 28px 0 42px 0;
      font-size: 14px;
      color: var(--font-grey);
      border-top: 1px solid var(--border-grey);
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
    .info {
      margin-top: 18px;
      display: inline-block;
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
          {/* {post.frontmatter.thumbnail && post.frontmatter.type === 'topic' && (
            <img
              src={post.frontmatter.thumbnail.publicURL}
              alt=""
              style={{ width: 72 }}
            />
          )} */}
          <PostHeader>
            {post.frontmatter.tags && (
              <ul className="tags">
                {post.frontmatter.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
            <h1 style={{ color: 'var(--textTitle)', marginBottom: '0.42rem' }}>
              {post.frontmatter.title}
            </h1>
            <div className="spoiler">{post.frontmatter.spoiler}</div>
            {post.frontmatter.status === 'In Progress' && (
              <div className="info">
                🚧 <b>This post is in progress</b> – Last updated{' '}
                {post.frontmatter.updateDate}.
              </div>
            )}
            <div className="post-info">
              <img src={profilePic} alt="@dezineleo" />
              <div>
                <h4>Yang Jin</h4>
                {`${formatPostDate(post.frontmatter.date, lang)}`}
                {` / ${formatReadingTime(post.timeToRead)}`}
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
