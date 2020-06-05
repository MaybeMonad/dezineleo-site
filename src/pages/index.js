// @flow
import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';

import { siteMetadata } from '../../gatsby-config';
import { COLORS, BREAKPOINTS } from '../constants';

import App from '../components/App';
import Paragraph from '../components/Paragraph';
import Divider from '../components/Divider';
// import Em from '../components/Em';
import TextLink from '../components/TextLink';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import IndexPost from '../components/IndexPost';
// import SectionHeading from '../components/SectionHeading';
// import NewsletterSignup from '../components/NewsletterSignup';
// import Spacer from '../components/Spacer';
import WavingHand from '../components/WavingHand'

import Avatar from '../assets/avatar.svg'

type PostData = {
  id: string,
  path: string,
  title: string,
  abstract: string,
  isPublished: boolean,
  publishedOn: string,
};

const IndexPage = ({ data }) => {
  const posts = getPosts(data);

  return (
    <App>
      <Wrapper>
        <Helmet title={siteMetadata.title} />
        <MaxWidthWrapper style={{ padding: 0 }}>
          <Header>
            <h1>
              <Link to={'/'} style={{ position: 'relative' }}>
                <img src={Avatar} alt="Yang Jin" />
                <span>
                  Dezine Leo
                </span>
                {/* <span className="version">v2.4</span> */}
              </Link>
            </h1>
            <nav>
              <Link to={'/'}>Home</Link>
              <Link to={'/archive'}>Archive</Link>
              <Link to={'/about'}>About</Link>
            </nav>
          </Header>
        </MaxWidthWrapper>
        <BorderWrapper>
          <InnerWrapper>
            <Title>Hi, Hey, Hello! <WavingHand>👋</WavingHand></Title>
            <Paragraph>
              Hi, I'm{' '}
              <TextLink href="https://www.twitter.com/dezineleo">
                Yang Jin
              </TextLink>
              . I'm a staff frontend developer located at Hangzhou, China.
            </Paragraph>

            <Paragraph>
              Ever since I was a child, I have always been passionate about illustrating and computer-like stuff. However, I chose to study English instead of CS to become a self-taught web developer.
            </Paragraph>

            <Divider />

            {posts.map(post => (
              <IndexPost
                key={post.id}
                id={post.id}
                path={post.path}
                title={post.title}
                abstract={post.abstract}
                publishedOn={post.publishedOn}
              />
            ))}

            {/* <Divider />

            <NewsletterWrapper>
              <SectionHeading anchorId="join">
                Join the Newsletter 🗞
              </SectionHeading>

              <Spacer size={20} />

              <Paragraph>
                If you've enjoyed my posts and don't want to miss the next one,
                you should sign up for the newsletter! It's my favourite way to
                communicate with my readers, and I send it quite sparingly
                (whenever I post something new, which appears to be about 4
                times a year).
              </Paragraph>

              <NewsletterSignup id="homepage" hideDisclaimer={true} />
            </NewsletterWrapper> */}
          </InnerWrapper>
        </BorderWrapper>
      </Wrapper>
    </App>
  );
};

const sortDatesDescending = (a, b) => {
  return a.publishedOn > b.publishedOn ? -1 : 1;
};

const getPosts = (data: any): Array<PostData> =>
  data.allSitePage.edges
    .map(edge => {
      const { node } = edge;

      // Not all site pages are posts.
      // We can identify posts because they have frontmatter.
      const isAPost = node && node.context && !!node.context.frontmatter;

      if (!isAPost) {
        return null;
      }

      // Don't show unpublished posts!
      if (!node.context.frontmatter.isPublished) {
        return null;
      }

      return {
        id: node.id,
        path: node.path,
        title: node.context.frontmatter.title,
        publishedOn: node.context.frontmatter.publishedOn,
        abstract: node.context.frontmatter.abstract,
      };
    })
    .filter(post => !!post)
    .sort(sortDatesDescending);

export const query = graphql`
  query AllPosts {
    allSitePage {
      edges {
        node {
          id
          path
          context {
            frontmatter {
              title
              isPublished
              publishedOn
              abstract
            }
          }
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  padding: 10px;

  @media ${BREAKPOINTS.sm} {
    padding: 6px;
  }
`;

const BorderWrapper = styled.div`
  position: relative;
  background: #fff;

  // @media ${BREAKPOINTS.sm} {
  //   padding: 10vh 0 5vh;
  // }
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  position: relative;
  padding: 40px 0;
  color: ${COLORS.gray[900]};
`;

const Title = styled.h1`
  margin-bottom: 48px;
  font-size: 2.8rem;
  font-weight: 900;
  // letter-spacing: -2.4px;

  @media ${BREAKPOINTS.sm} {
    font-size: 3.5rem;
    letter-spacing: -1px;
  }
`;

// const NewsletterWrapper = styled.div`
//   background: ${COLORS.gray[50]};
//   padding: 48px;
// `;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 0;
  transition: all 0.24s ease;
  padding: 20px 0;
  margin: 0 auto;
  h1 {
    margin: 0;
    a {
      box-shadow: none;
      text-decoration: none;
      color: var(--black);
      display: inherit;
      font-size: 21px;
      margin-right: 20px;
      tansition: color 0.2s ease;
      display: flex;
      align-items: center;
    }
    img {
      max-width: 36px;
      margin-right: 8px;
      border-radius: 100%;
    }
    span {
      padding-bottom: 4px;
    }
  }
  .version {
    background-color: var(--primary);
    border-radius: 4px;
    border-bottom-left-radius: 0;
    padding: 1px 4px;
    font-size: 12px;
    color: white;
    position: absolute;
    right: -38px;
    top: 0;
  }
  nav {
    border-radius: 100px;
    font-family: 'Bree Serif';
    a {
      padding: 4px 16px 6px 16px;
      border-radius: 3px;
      box-shadow: none;
      font-size: 1rem;
      font-weight: 700;
      margin-left: 12px;
      color: ${COLORS.gray[900]};
      text-decoration: none;
      transition: background-color 400ms ease;
      :hover {
        background-color: ${COLORS.gray[100]};
      }
      :active {
        background-color: ${COLORS.gray[200]};
      }
    }
  }
  @media (max-width: 672px) {
    padding: 0 0;
    left: 0;
    nav {
      padding: 0;
      a {
        padding: 8px 0 8px 20px;
        // font-size: 14px;
        &:first-child {
          display: none;
        }
      }
    }
  }
`

export default IndexPage;
