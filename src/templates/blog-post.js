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
import dayjs from 'dayjs'

import Alarm from '../../static/icon_alarm.svg'

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

  const Deadline = styled.div`
    background-color: var(--bg-grey);
    position: relative;
    display: inline-block;
    padding: 6px 14px 6px 12px;
    border-radius: 4px;
    overflow: hidden;
    color: var(--font-grey);
    .deadline {
      color: var(--black);
      margin-left: 4px;
    }
    .progress {
      position: absolute;
      left: 0;
      top: 0;
      background-color: #e1e1e1;
      display: inline-block;
      height: 100%;
    }
    p {
      position: relative;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        margin: -3px 6px 0 0;
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
          {post.frontmatter.thumbnail &&
            post.frontmatter.type === 'challenge' && (
              <img
                src={post.frontmatter.cover.publicURL}
                alt=""
                style={{ width: '100%' }}
              />
            )}
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
                {`Pulished: ${formatPostDate(post.frontmatter.date, lang)}`}
                {post.frontmatter.updateDate &&
                  ` / Updated: ${formatPostDate(
                    post.frontmatter.updateDate,
                    lang
                  )}`}
                {` / ${formatReadingTime(post.timeToRead)}`}
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
          {post.frontmatter.status === 'In Progress' && (
            <div className="info">
              🚧 <b>This post is in progress</b> – Last updated{' '}
              {post.frontmatter.updateDate}.
            </div>
          )}
          {post.frontmatter.deadline && (
            <Deadline>
              <span
                className="progress"
                style={{
                  width: `${(dayjs().diff(dayjs(post.frontmatter.date), 'day') *
                    100) /
                    dayjs(post.frontmatter.deadline).diff(
                      dayjs(post.frontmatter.date),
                      'day'
                    )}%`,
                }}
              ></span>
              <p>
                <img src={Alarm} alt="" />
                Deadline:{' '}
                <span className="deadline">{post.frontmatter.deadline}</span>
              </p>
            </Deadline>
          )}
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
        github
        site
        status
        deadline(formatString: "MMMM DD, YYYY")
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
