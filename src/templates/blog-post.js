import React from 'react';
import Link from 'gatsby-link';
import { briefIntro } from '../config/config';
import '../assets/css/blog.css';

export default function Template({ data }) {
  const post = data.markdownRemark;
  const { title, author, date } = post.frontmatter;

  return (
    <div className="blog-post">
      {/* <Link to="/blog">Go Back</Link>
      <hr /> */}
      <h4 className="post-info">Posted by <Link to="/about">{author}</Link> on {date}</h4>
      <h1>{title}</h1>
      <div className="brief-intro">{briefIntro}</div>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`;
