import React from 'react';

// Components
import PostCard from '../components/postCard/postcard';

import '../assets/css/common.css';
import '../assets/css/blog.css';

const BlogPage = ({ data }) => (
  <div className="main-section">
    <div className="section">
      <div className="post-list flex jc-start">
        {data.allMarkdownRemark.edges.map((post, index) => {
          return (
            <PostCard post={post} key={index} />
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

export default BlogPage;
