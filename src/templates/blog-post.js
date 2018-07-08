import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { briefIntro, siteInfo } from '../config/config';
import '../assets/css/blog.css';
import avatar from '../assets/imgs/avatars/avatar_01.jpg'

export default function Template({ data }) {
  const post = data.markdownRemark;
  const timeToRead = post.timeToRead;
  const {
    title,
    author,
    date,
    tags,
    excerpt,
    thumbnail: {
      childImageSharp: { sizes }
    }
  } = post.frontmatter;

  const tagList = tags.map(item => (
      <Link to={`/${item}`} key={item}>{item}</Link>
  ))

  return (
    <div className="section">
      <div className="blog-post">
        <Helmet
          title={title + ' | ' + siteInfo.title}
          meta={[
            {
              name: 'description',
              content: excerpt,
            },
            { name: 'keywords', content: tags },
          ]}
        />
        {/* <Link to="/blog">Go Back</Link>
        <hr /> */}
        <div className="author flex jc-start al-center">
          <img className="avatar" src={avatar} />
          <div className="author-info">
            <Link className="name" to="/about">{author}</Link>
            <div className="intro">{briefIntro}</div>
            <div className="date">{timeToRead} min read · {date}</div>
          </div>
        </div>
        <h1>{title}</h1>
        <Img className="featured-img" sizes={sizes} />
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="tags">Tagged with {tagList}</div>
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        path
        title
        author
        tags
        excerpt
        date(formatString: "MMMM DD, YYYY")
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 1600, maxHeight: 960) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
