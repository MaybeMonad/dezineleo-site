import React from 'react';

// Components
import Link from 'gatsby-link';
import Img from "gatsby-image";

import '../assets/css/common.css';
import '../assets/css/work.css';

const WorkPage = ({ data }) => (
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
            thumbnail: {
              childImageSharp: { sizes }
            }
          } = post.node.frontmatter;
          const catItems = categories.map(cat => <b key={cat}>{cat}</b>);
          const tagItems = tags.map(tag => <li className="tag" key={tag}>{tag}</li>);

          return (
            <div className="project-card" key={index}>
              <Link to={path}>
                <div className="top">
                  <Img className="thumbnail" sizes={sizes} />
                </div>
                <div className="content">
                  <div className="time">{date}</div>
                  <h3>{title}</h3>
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
  query WorkIndexQuery {
    allMarkdownRemark(
      limit: 6
      sort: {
        fields: [frontmatter___date],
        order: DESC
      }
      filter: {
        frontmatter: {
          published: { eq: true }
          type: { eq: "project" }
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

export default WorkPage;
