import React from 'react';
import Link from 'gatsby-link';
import { briefIntro } from '../config/config';
import '../assets/css/blog.css';

export default function Template({ data }) {
  const post = data.markdownRemark;
  const { title, author, date } = post.frontmatter;

  return (
    <div className="blog-post">
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{title}</h1>
      <h4>
        Posted by {author} on {date}
      </h4>
      <div className="brief-intro">{briefIntro}</div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
