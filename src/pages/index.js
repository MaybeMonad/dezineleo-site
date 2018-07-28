import React from 'react';

// Components
import Link from 'gatsby-link';
import PostCard from '../components/postCard';

import '../assets/css/common.css';
import '../assets/css/blog.css';
import '../assets/css/index.css';

const IndexPage = ({data}) => (
  <div className="section">
    <div className="about-leo">
      <h1>Hi There, This Is Leo,</h1>
      <p>based in Hangzhou, China.</p>
      <h1>Yet Another UI Designer.</h1>
      <p>Working as a web developer.</p>
    </div>
    <div className="post-list flex jc-start">
      {data.allMarkdownRemark.edges.map((post, index) => {
        if (index < 2) {
          return (
            <PostCard post={post} key={index} />
          );
        }
      })}
      {/* post list without thumbnail */}
      <div className="post-card no-thumbnail-list">
        {data.allMarkdownRemark.edges.map((post, index) => {
          const {
            title,
            path,
          } = post.node.frontmatter;
          const timeToRead = post.node.timeToRead;

          if (index > 1) {
            return (
              <Link to={path} className="flex al-center jc-start" key={index}>
                <div className="arrow-circle">
                  <svg width="38" height="38">
                    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="19" cy="19" r="18"></circle>
                  </svg>
                </div>
                <div className="order">{index - 1}</div>
                <div className="detail">
                  <h4>{title}</h4>
                  <p>{timeToRead} min read</p>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 5
      sort: {
        fields: [frontmatter___date],
        order: DESC
      }
      filter: {
        frontmatter: {
          published: { eq: true }
          type: { eq: "post" }
        }
      }
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            author
            excerpt
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 400, maxHeight: 240) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            categories
            tags
          }
        }
      }
    }
  }
`;

export default IndexPage;
