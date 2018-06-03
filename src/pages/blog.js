import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

import '../assets/css/common.css';
import '../assets/css/blog.css';

const BlogPage = ({ data }) => (
  <div className="post-list flex jc-start al-center">
    {data.allMarkdownRemark.edges.map((post, index) => {
      const {
        title,
        author,
        date,
        path,
        thumbnail: {
          childImageSharp: { sizes }
        }
      } = post.node.frontmatter;

      return (
        <div className="post-card" key={index}>
          <Img className="thumbnail" sizes={sizes} />
          <h3>{title}</h3>
          <small>Posted by {author} on{' '} {date}</small>
          <Link to={path} className="btn read-more">Read More</Link>
        </div>
      );
    })}
  </div>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 400, maxHeight: 240) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
