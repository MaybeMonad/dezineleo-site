import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
// import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
// import Lang from '../components/Lang'
import { formatPostDate, formatReadingTime } from '../utils/helpers'
import FullWidthWrapper from '../components/FullWidthWrapper'
import JSHub from '../../static/featured_projects/jshub.png'
import DeStatic from '../../static/featured_projects/destatic.png'
import BreakElm from '../../static/featured_projects/break-elm.png'
import HYG from '../../static/featured_projects/hyg.png'
import DownloadIcon from '../../static/icon_download.svg'
import InspireIcon from '../../static/icon_inspire.svg'
import Avatar from '../../static/home/avatar.png'
import Coding from '../../static/home/coding.png'
import Illustrating from '../../static/home/illustrating.png'
import Dot from '../../static/dot.png'
import IconLink from '../../static/icon_link.svg'
import IconCode from '../../static/icon_code.svg'
// import Panel from '../components/Panel'

const Section = props => {
  const { className, children, title, external, style } = props

  return (
    <div className={className} style={style}>
      <div className="heading">
        <h3 className="d-flex justify-between align-items-center">
          <img src={IconCode} alt="" />
          {title}
        </h3>
        {external}
      </div>
      {children}
    </div>
  )
}

const StyledSection = styled(Section)`
  margin: 24px 0 24px 0;
  .heading {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0 16px 0;
    width: 100%;
    padding: 0 0 16px 0;
    h3 {
      margin: 0;
      img {
        margin-right: 8px;
      }
    }
  }
`

const ArticleList = styled.main`
  border-radius: 12px;
  padding: 18px;
  border: var(--border);
  box-shadow: var(--box-shadow);
  margin: 0;
  article {
    padding: 20px;
    transition: background-color 0.3s ease;
    border-radius: 8px;
    &:hover {
      background-color: var(--bg-grey);
    }
    h3 {
      margin-top: 0;
    }
    p {
      margin-bottom: 0;
    }
  }
`

const StyledHand = styled.span`
  animation-name: wavingHand;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes wavingHand {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
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
  // const projects = get(props, 'data.allMarkdownRemark.edges').filter(
  //   ({ node }) => get(node, 'frontmatter.type') === 'project'
  // )
  const experiments = get(props, 'data.allMarkdownRemark.edges').filter(
    ({ node }) => get(node, 'frontmatter.type') === 'experiment'
  )

  const Aside = styled.aside`
    padding: 48px 0;
    .hello {
      z-index: 2;
      max-width: 442px;
      position: relative;
      text-align: center;
      margin: 0 auto;
      h3 {
        font-size: 22px;
      }
      h1 {
        font-size: 32px;
      }
    }
    @media (max-width: 672px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 36px 1.3rem;
      .hello {
        h1 {
          font-size: 28px;
        }
        h3 {
          font-size: 18px;
        }
      }
    }
  `

  const Links = styled.div`
    a {
      margin-right: 20px;
      font-size: 16px;
      font-family: var(--font-bold);
      box-shadow: none;
      display: inline-flex;
      align-items: center;
      img {
        margin-right: 6px;
      }
    }
  `

  const Box = styled.div`
    border-radius: 12px;
    padding: 42px 36px;
    border: var(--border);
    box-shadow: var(--box-shadow);
  `

  const SideProject = props => {
    const { logo, link, title, des, github, version, className, style } = props

    return (
      <Link className={className} style={style} to={link}>
        <div className="d-flex justify-between align-items-center">
          <img src={logo} alt={title} />
          <img src={IconLink} alt={title} />
        </div>
        <div
          style={{
            height: 1,
            backgroundColor: 'var(--border-grey)',
            width: 'calc(100% + 36px)',
            display: 'block',
            margin: '18px -18px 0 -18px',
          }}
        ></div>
        <h2>
          {title}
          {version && <sup>{version}</sup>}
        </h2>
        <p>{des}</p>
        <div className="github">{github}</div>
      </Link>
    )
  }

  const StyledSideProject = styled(SideProject)`
    border-radius: 12px;
    padding: 18px;
    border: var(--border);
    box-shadow: var(--box-shadow);
    transition: box-shadow 0.3s ease 0s;
    :hover {
      box-shadow: var(--hover-box-shadow);
    }
    img {
      max-width: 30px;
      max-height: 24px;
    }
    h2 {
      font-size: 18px;
      margin-bottom: 0;
      sup {
        color: var(--brand);
        font-family: var(--font-regular);
        font-size: 10px;
        margin-left: 2px;
      }
    }
    p {
      font-size: 13px;
      color: var(--font-grey);
      margin: 0 0 24px 0;
      line-height: 16px;
      font-family: var(--font-regular);
    }
    .github {
      font-size: 12px;
      font-family: var(--font-regular);
    }
  `

  const SideProjects = styled.div`
    display: grid;
    grid-template-columns: calc(25% - 24px) calc(25% - 24px) calc(25% - 24px) calc(
        25% - 24px
      );
    grid-gap: 32px;
    @media (max-width: 672px) {
      grid-template-columns: calc(50% - 12px) calc(50% - 12px);
      grid-gap: 24px;
    }
    @media (max-width: 376px) {
      grid-template-columns: 100%;
    }
  `

  const Collective = props => {
    const { className, style, img, title, link, date, des } = props
    return (
      <Link to={link} className={className} style={style}>
        <img src={img} alt={title} />
        <div>
          <h3>{title}</h3>
          <p className="date">{date}</p>
          <p>{des}</p>
        </div>
      </Link>
    )
  }

  const StyledCollective = styled(Collective)`
    border-radius: 12px;
    padding: 18px;
    border: var(--border);
    box-shadow: var(--box-shadow);
    display: flex;
    align-items: flex-start;
    img {
      max-width: 72px;
      margin-right: 12px;
    }
    h3 {
      font-size: 16px;
      margin: 0;
    }
    p {
      font-size: 12px;
      line-height: 16px;
      margin: 0;
      font-family: var(--font-regular);
      &.date {
        color: var(--font-grey);
        line-height: 14px;
      }
    }
  `

  const MainContent = styled.div`
    display: grid;
    grid-template-columns: 60% calc(40% - 42px);
    grid-gap: 42px;
    @media (max-width: 672px) {
      grid-template-columns: 100%;
      grid-gap: 0;
    }
  `

  const AvatarImg = styled.img`
    max-width: 20%;
    @media (max-width: 672px) {
      max-width: 36%;
    }
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <FullWidthWrapper
        style={{ paddingBottom: 200, backgroundColor: 'var(--bg-grey)' }}
      >
        <Aside className="d-flex justify-between align-items-center">
          <div className="hello">
            <h1 style={{ margin: '0 0 8px 0' }}>
              <span style={{ fontFamily: 'var(--font-medium)' }}>Hi, I'm</span>{' '}
              Yang Jin <StyledHand>👋</StyledHand>
            </h1>
            <h3
              style={{ margin: '0 0 8px 0', fontFamily: 'var(--font-regular)' }}
            >
              A designer && maker based in Hangzhou, China.
            </h3>
            <Links>
              <Link to="/about" style={{ color: 'var(--brand)' }}>
                <img src={DownloadIcon} alt="Download" />
                My Resume
              </Link>
              <Link to="/what-i-use" style={{ color: 'var(--primary)' }}>
                <img src={InspireIcon} alt="Inspire" /> What I Use
              </Link>
            </Links>
          </div>
        </Aside>
      </FullWidthWrapper>
      <Box
        className="d-flex justify-between align-items-center"
        style={{
          marginTop: '-200px',
          backgroundColor: 'white',
          backgroundImage: `url(${Dot})`,
          backgroundSize: 'cover',
          backgroundPosition: '0 4px',
        }}
      >
        <img
          style={{ maxWidth: '32%' }}
          src={Illustrating}
          alt="Illustrating"
        />
        <AvatarImg src={Avatar} alt="Avatar" />
        <img style={{ maxWidth: '32%' }} src={Coding} alt="Coding" />
      </Box>
      <div style={{ textAlign: 'center', padding: '24px 0 0 0', fontSize: 14 }}>
        I’m available for UI design and web development. Feel free to contact me
        through{' '}
        <a href="mailto:dezineleo@gmail.com" style={{ color: 'var(--brand)' }}>
          dezineleo@gmail.com
        </a>
        .
      </div>
      <StyledSection
        title="Side Projects"
        external={<Link to="/projects">Browse All</Link>}
      >
        <SideProjects>
          <StyledSideProject
            logo={BreakElm}
            link="/break-elm"
            title="Break Elm"
            des="Based on official docs, I’ve created 3 real world demos."
            github="DezineLeo/Break-Elm"
            version=""
          />
          <StyledSideProject
            logo={JSHub}
            link="/javascript-hub"
            title="JS Hub"
            des="Another free JavaScript learning application."
            github="DezineLeo/JavaScript-Hub"
            version="v1.0.0"
          />
          <StyledSideProject
            logo={DeStatic}
            link="/destatic"
            title="DeStatic"
            des="Skyrocket your project without extra configuration."
            github="DezineLeo/DeStatic"
            version="v1.0.1"
          />
          <StyledSideProject
            logo={HYG}
            link="/hyg"
            title="HYG"
            des="A non-profit social platform for blind dating."
            github="DezineLeo/HYG"
            version="v2.0"
          />
        </SideProjects>
      </StyledSection>
      <MainContent>
        <StyledSection
          title="Topics"
          // external={
          //   <Lang>
          //     <li className={langKey === 'en' ? 'active' : ''}>
          //       <a href="/">En</a>
          //     </li>
          //     <li className={langKey === 'zh-hans' ? 'active' : ''}>
          //       <a href="/zh-hans">Zh</a>
          //     </li>
          //   </Lang>
          // }
        >
          <ArticleList style={{ padding: 18 }}>
            {posts
              .filter(({ node }) => get(node, 'frontmatter.type') === 'topic')
              .map(({ node }, index) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                return (
                  <article key={node.fields.slug}>
                    <header>
                      <h3
                        style={{
                          fontSize: '1.36rem',
                          marginBottom: 0,
                        }}
                      >
                        <Link
                          style={{
                            boxShadow: 'none',
                            color: 'var(--black)',
                            fontFamily: 'var(--font-bold)',
                          }}
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
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.spoiler,
                      }}
                    />
                  </article>
                )
              })}
          </ArticleList>
        </StyledSection>
        <StyledSection title="Weekly Collectives">
          {posts
            .filter(
              ({ node }) => get(node, 'frontmatter.type') === 'collective'
            )
            .map(({ node }, index) => {
              const { title, thumbnail, date, spoiler } = node.frontmatter
              return (
                <StyledCollective
                  link={node.fields.slug}
                  img={thumbnail.publicURL}
                  title={title}
                  date={date}
                  des={spoiler}
                />
              )
            })}
        </StyledSection>
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
