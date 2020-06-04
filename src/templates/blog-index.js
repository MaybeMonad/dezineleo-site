import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import dayjs from 'dayjs'
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

import Layout from '../components/Layout'
import FullWidthWrapper from '../components/FullWidthWrapper'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import IntroCard from '../components/IntroCard'
import Avatar from '../../static/avatar.png'
import Star from '../../static/icon_star.svg'

const ArticleList = styled.main`
  margin: 0 0 24px 0;
  background-color: transparent;
  &.notebook {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
    grid-auto-rows: 1fr;
    article {
      border: var(--border);
      // background-color: var(--dark-1);
      margin: 0;
      height: calc(100% - 36px);
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      max-width: none;
      header {
        flex-direction: column;
        img {
          margin: 0 0 8px 0;
          width: 48px;
          min-width: 48px;
        }
        h3 {
          margin: 0;
          line-height: 1.4;
          word-break: break-word;
        }
      }
      p {
        &.date {
          color: var(--font-grey);
          font-size: 12px;
        }
      }
    }
  }
  &.challenges {
    margin: 0 0 24px 0;
    article {
      border: var(--border);
      margin: 0;
      max-width: none;
      header {
        align-items: center;
        h3 {
          margin: 0;
          display: flex;
          align-items: center;
        }
      }
    }
  }
  article {
    padding: 18px 24px;
    transition: background-color 0.3s ease;
    border-radius: 8px;
    margin: 0 -24px 20px -24px;
    position: relative;
    z-index: 1;
    max-width: none;
    ::before {
      content: '';
      transition: all 0.32s ease;
      background-color: var(--bg-grey);
      // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
      border-radius: 8px;
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0;
      height: 0;
      z-index: 0;
    }
    :hover {
      &::before {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }
    }
    header {
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      img {
        margin-right: 30px;
        width: 60px;
        min-width: 60px;
        height: 60px;
      }
      .article-info {
        h3 {
          position: relative;
          margin-top: 0;
          // display: flex;
          align-items: center;
          font-size: 1.36rem;
          line-height: 1.67rem;
          margin-bottom: 6px;
          .new {
            font-weight: 300;
            margin-left: 3px;
            font-size: 13px;
            color: var(--primary);
          }
        }
        .spoiler {
          font-size: 16px;
          font-weight: 300;
          margin: 0;
        }
        .release-date {
          font-size: 13px;
          // font-size: 1rem;
          margin-bottom: 8px;
          color: var(--font-grey);
          display: inline-block;
          font-weight: 300;
          transition: all 0.32s ease;
        }
      }
    }
    p {
      position: relative;
      margin-bottom: 0;
    }
  }
  @media (max-width: 672px) {
    overflow: hidden;
    &.notebook {
      grid-template-columns: 100%;
      ${'' /* grid-gap: 0; */}
    }
    article {
      header {
        flex-direction: row;
        .article-info {
          h3 {
            font-size: 1.2rem;
          }
          p.spoiler {
            font-size: 14px;
            line-height: 20px;
            margin-top: 8px;
          }
        }
        img {
          max-width: 48px;
          min-width: 48px;
          width: 48px;
          height: 48px;
          margin-right: 24px;
        }
      }
    }
  }
`

// const Projects = styled.div`
//   padding: 48px 0 0 36px;
//   h3 {
//     color: var(--dark-3);
//     text-transform: uppercase;
//     margin: 0 0 32px 0;
//   }
//   ul {
//     padding: 0;
//     li {
//       display: inline-block;
//       list-style: none;
//       margin: 0 0 42px 0;
//       padding: 0;
//       .lang {
//         text-transform: uppercase;
//         color: var(--font-grey);
//         font-size: 12px;
//       }
//       h2 {
//         margin: 0;
//         font-size: 1.2rem;
//         color: var(--light);
//         line-height: 1.4;
//         margin-bottom: 6px;
//       }
//       p {
//         margin: 2px 0 14px 0;
//         font-size: 13px;
//         color: var(--dark-3);
//         line-height: 1.4;
//         font-weight: normal;
//         font-family: var(--font-regular);
//       }
//       .stars {
//         color: var(--dark-3);
//         font-size: 15px;
//         font-family: var(--font-bold);
//         img {
//           margin-right: 6px;
//         }
//       }
//     }
//   }
//   @media (max-width: 672px) {
//     padding: 48px 0 0 0;
//   }
// `

export default props => {
  const {
    pageContext: { langKey },
    location,
  } = props
  const siteTitle = get(props, 'props.data.site.siteMetadata.title')
  const posts = get(props, 'data.allMarkdownRemark.edges').filter(
    ({ node }) => node.fields.langKey === langKey
  )

  const Aside = styled.aside`
    padding: 36px 0 48px 0;
    @media (max-width: 672px) {
      grid-template-columns: 1fr;
      flex-direction: column;
      align-items: flex-start;
      padding: 36px 0;
    }
  `

  const MainContent = styled.div`
    display: grid;
    // grid-template-columns: 2fr 1fr;
    // grid-gap: 36px;
    margin: 0 auto;
    padding: 0;
    max-width: var(--max-content-width);
    @media (max-width: 672px) {
      grid-template-columns: 100%;
      grid-gap: 0;
      padding: 56px 0px 0 0;
    }
  `

  // const Deadline = styled.div`
  //   background-color: var(--bg-grey);
  //   position: relative;
  //   display: inline-block;
  //   padding: 6px 14px 6px 12px;
  //   border-radius: 4px;
  //   overflow: hidden;
  //   color: var(--font-grey);
  //   img {
  //     width: 20px !important;
  //     height: 20px !important;
  //     min-width: 20px !important;
  //     margin-right: 10px !important;
  //   }
  //   .deadline {
  //     color: var(--black);
  //     margin-left: 4px;
  //   }
  //   .progress {
  //     position: absolute;
  //     left: 0;
  //     top: 0;
  //     background-color: #e1e1e1;
  //     display: inline-block;
  //     height: 100%;
  //   }
  //   p {
  //     position: relative;
  //     margin: 0;
  //     padding: 0;
  //     display: flex;
  //     justify-content: flex-start;
  //     align-items: center;
  //     font-size: 12px;
  //     img {
  //       margin: -3px 6px 0 0;
  //     }
  //   }
  // `

  const [currentTab, setCurrentTab] = useState('Topics')

  const tabs = {
    Topics: (
      <ArticleList>
        {posts
          .filter(
            ({ node }) =>
              get(node, 'frontmatter.type') === 'topic' &&
              get(node, 'frontmatter.status') !== 'In Progress'
          )
          .map(({ node }, index) => {
            if (index < 7) {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              const spoiler = get(node, 'frontmatter.spoiler') || ''
              const status = get(node, 'frontmatter.status') || ''
              const badge = get(node, 'frontmatter.badge') || ''
              const newest =
                dayjs(node.frontmatter.date) > dayjs().subtract(1, 'month')
              return (
                <Link to={node.fields.slug} rel="bookmark" key={title}>
                  <article key={node.fields.slug}>
                    <header>
                      <div className="d-flex">
                        {/* {node.frontmatter.thumbnail && (
                          <img
                            // src={node.frontmatter.thumbnail.publicURL}
                            src={IconBooks}
                            alt={title}
                          />
                        )} */}
                        <div className="article-info">
                          <span className="release-date">
                            {node.frontmatter.date}
                          </span>
                          <h3>
                            {title}
                            {newest && <sup className="new">New!</sup>}
                          </h3>
                          {spoiler && <p className="spoiler">{spoiler}</p>}
                          {/* {badge && (
                            <span className={`badge ${badge}`}>{badge}</span>
                          )} */}
                        </div>
                      </div>
                    </header>
                  </article>
                </Link>
              )
            }
          })}
      </ArticleList>
    ),
    Notes: (
      <ArticleList className="notebook">
        {posts
          .filter(({ node }) => get(node, 'frontmatter.type') === 'note')
          .map(({ node }, index) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            {
              /* const newest =
              dayjs(node.frontmatter.date) > dayjs().subtract(1, 'month') */
            }
            return (
              <Link to={node.fields.slug} rel="bookmark" key={title}>
                <article key={node.fields.slug}>
                  <header>
                    {/* {node.frontmatter.thumbnail && (
                      <img
                        src={node.frontmatter.thumbnail.publicURL}
                        alt={title}
                      />
                    )} */}
                    <h3>{title}</h3>
                    {/* {newest && (
                      <div className="alert">
                        <div className="new">New!</div>
                      </div>
                    )} */}
                  </header>
                  <p className="date">{node.frontmatter.date}</p>
                </article>
              </Link>
            )
          })}
      </ArticleList>
    ),
    // Challenges: (
    //   <ArticleList className="challenges">
    //     {posts
    //       .filter(({ node }) => get(node, 'frontmatter.type') === 'challenge')
    //       .map(({ node }, index) => {
    //         if (index < 7) {
    //           const title = get(node, 'frontmatter.title') || node.fields.slug
    //           return (
    //             <Link to={node.fields.slug} rel="bookmark" key={title}>
    //               <article key={node.fields.slug}>
    //                 <header>
    //                   <h3>
    //                     {node.frontmatter.thumbnail && (
    //                       <img
    //                         src={node.frontmatter.thumbnail.publicURL}
    //                         alt={title}
    //                       />
    //                     )}
    //                     {title}
    //                   </h3>
    //                   <Deadline>
    //                     <span
    //                       className="progress"
    //                       style={{
    //                         width: `${(dayjs().diff(
    //                           dayjs(node.frontmatter.date),
    //                           'day'
    //                         ) *
    //                           100) /
    //                           dayjs(node.frontmatter.deadline).diff(
    //                             dayjs(node.frontmatter.date),
    //                             'day'
    //                           )}%`,
    //                       }}
    //                     ></span>
    //                     <p>
    //                       <img src={Alarm} alt="" />
    //                       Deadline:{' '}
    //                       <span className="deadline">
    //                         {node.frontmatter.deadline}
    //                       </span>
    //                     </p>
    //                   </Deadline>
    //                 </header>
    //               </article>
    //             </Link>
    //           )
    //         }
    //       })}
    //   </ArticleList>
    // ),
  }

  const TabSection = styled.div`
    // border-right: var(--border);
    padding: 48px 32px 0 0;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 24px;
      li {
        cursor: pointer;
        margin-right: 16px;
        text-transform: uppercase;
        font-size: 16px;
        padding: 1px 16px;
        font-weight: 700;
        border-radius: 4px;
        position: relative;
        z-index: 1;
        transition: all 0.32s ease;
        font-size: 14px;
        span {
          position: relative;
          z-index: 1;
        }
        :active {
          transform: scale(0.9);
        }
        ::before {
          content: '';
          transition: all 0.32s ease;
          background-color: var(--bg-grey);
          border-radius: 4px;
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;
          z-index: 0;
        }
        :hover {
          &::before {
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
          }
        }
        &.active {
          // font-weight: 700;
          background-color: var(--black);
          color: white;
          ::before {
            background-color: var(--black);
          }
        }
      }
    }
    @media (max-width: 672px) {
      padding: 0;
      border-right: none;
      border-bottom: var(--border);
    }
  `

  // const projects = [
  //   {
  //     lang: 'Vue',
  //     name: 'Break Elm',
  //     desc: 'A Chinese version of Elm docs.',
  //     stars: 0,
  //     link: '/projects/break-elm',
  //   },
  //   {
  //     lang: 'Svelte',
  //     name: 'JavaScript Hub',
  //     desc:
  //       'A sweet and free JavaScript learning application for JavaScript lovers.',
  //     stars: 0,
  //     link: '/projects/javascript-hub',
  //   },
  //   {
  //     lang: 'Pug',
  //     name: 'DeStatic',
  //     desc: 'A starter HTML Template using Pug, Sass, Webpack, Gulp.',
  //     stars: 0,
  //     link: '/destatic',
  //   },
  // ]

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <Aside>
        <IntroCard
          avatar={Avatar}
          title="Hi, I'm Yang Jin."
          intro="A Web Developer / UI Designer / Illustrator / English Teacher based in Hangzhou, China."
          extra={
            <div
              style={{
                color: 'var(--dark-4)',
                fontFamily: 'var(--font-heading)',
                fontSize: 22,
                marginTop: 40,
              }}
            >
              Ever since I was a child, I have always been passionate about{' '}
              <span style={{ color: 'var(--light)' }}>illustrating</span> and{' '}
              <span style={{ color: 'var(--light)' }}>computer-like stuff</span>
              . However, I chose to study English instead of CS to become a{' '}
              <span style={{ color: 'var(--light)' }}>
                self-taught web developer
              </span>
              .
            </div>
          }
        />
      </Aside>
      {/* <BlockContainer
        display="grid"
        column={3}
        className="vertical justify-start"
      >
        <LinkBlock
          icon={IconProjects}
          iconSize={36}
          title="PROJECTS"
          // des="What I'm building"
          link="/projects"
        />
        <LinkBlock
          icon={IconNotes}
          iconSize={36}
          title="NOTES"
          // des="What I'm learning"
          link="/notes"
        />
        <LinkBlock
          icon={IconBooks}
          iconSize={36}
          title="BOOKS"
          // des="What I'm reading"
          link="/books"
        />
      </BlockContainer> */}
      <FullWidthWrapper
        style={{
          backgroundColor: 'none',
          border: 'var(--border)',
          borderWidth: '1px 0 0 0',
        }}
      ></FullWidthWrapper>
      <MainContent>
        <TabSection>
          <ul>
            {Object.keys(tabs).map(t => (
              <li
                key={t}
                className={currentTab === t ? 'active' : ''}
                onClick={() => setCurrentTab(t)}
              >
                <span>{t}</span>
              </li>
            ))}
          </ul>
          {tabs[currentTab]}
        </TabSection>
        {/* <Projects>
          <h3>Featured Projects</h3>
          <ul>
            {projects.map(p => (
              <li key={p.name}>
                <Link to={p.link}>
                  <div className="lang">{p.lang}</div>
                  <h2>{p.name}</h2>
                  <p>{p.desc}</p>
                  <div className="stars">
                    <img src={Star} alt="" />
                    {p.stars}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Projects> */}
      </MainContent>
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
            updateDate(formatString: "MMMM DD, YYYY")
            status
            title
            spoiler
            badge
            type
            github
            version
            site
            totalLinks
            deadline(formatString: "MMMM DD, YYYY")
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
