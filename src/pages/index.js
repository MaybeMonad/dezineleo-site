import React from 'react';

// Components
import PostCard from '../components/postCard/postcard';
import Tag from '../components/tag/tag';

import '../assets/css/common.css';
import '../assets/css/blog.css';
import '../assets/css/index.css';
import Portfolio from '../assets/imgs/index/portfolio.svg';
import Triangle from '../assets/imgs/index/triangle.svg';

const IndexPage = ({data}) => (
  <div className="section home-page">
    <div className="about-leo flex jc-start">
      <hr />
      <div className="">
        <h1>Hi, I am Leo,</h1>
        <h1>enthusing about learning</h1>
        <h1>and working as a Web Developer.</h1>
        <p>Currently, I’m living in Hangzhou, China.</p>
      </div>
    </div>
    <div className="post-list flex jc-start">
      {data.allMarkdownRemark.edges.map((post, index) => {
        if (index < 6)
          return (<PostCard post={post} key={index} />)
      })}
    </div>
    <div className="portfolio flex flex-wrap jc-around al-center">
      <img className="left h-col-6" src={Portfolio} />
      <div className="right">
        <div className="as-designer">
          <h2>UI/Graphic Designer</h2>
          <p>I also do some design stuff.</p>
          <hr />
        </div>
        <img src={Triangle} />
      </div>
    </div>
    {/* <div className="flex jc-between">
      <div className="tags">
        <ul className="flex flex-wrap">
        {
          data.allMarkdownRemark.group.map(tag => {
            if (tag.totalCount > 1)
              return ( <Tag tag={tag} key={tag.fieldValue} /> )
          })
        }
        </ul>
      </div>
    </div> */}
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
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
            categories
            tags
          }
        }
      }
    }
  }
`;

export default IndexPage;
