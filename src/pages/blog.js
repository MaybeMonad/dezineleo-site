import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

import '../assets/css/common.css';
import '../assets/css/blog.css';

const BlogPage = ({ data }) => (
  <div className="main-section">
    <div className="section">
      <div className="post-list flex jc-start">
        {data.allMarkdownRemark.edges.map((post, index) => {
          const {
            title,
            author,
            date,
            path,
            categories,
            tags,
            excerpt,
            thumbnail: {
              childImageSharp: { sizes }
            }
          } = post.node.frontmatter;
          const timeToRead = post.node.timeToRead;
          const catItems = categories.map(cat => <b key={cat}>{cat}</b>);
          const tagItems = tags.map(tag => <li className="tag" key={tag}>{tag}</li>);

          return (
            <div className="post-card" key={index}>
              <Link to={path}>
                <div className="top">
                  <Img className="thumbnail" sizes={sizes} />
                </div>
                <div className="content">
                  <div className="time">{date}</div>
                  <h3>{title}</h3>
                  <small>{excerpt}</small>
                  <div className="time-to-read">{timeToRead} min read</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      limit: 6
      sort: {
        fields: [frontmatter___date],
        order: DESC
      }
      filter: {
        frontmatter: {
          published: { eq: true }
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

export default BlogPage;
