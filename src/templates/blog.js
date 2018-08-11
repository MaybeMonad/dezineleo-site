import React, { Component } from 'react';
import Link from "gatsby-link";

// Components
import PostCard from '../components/postCard/postcard';

import '../assets/css/common.css';
import '../assets/css/blog.css';

const NavLink = props => {
  if (!props.test) {
    return <Link className="nav positive" to={props.url}>{props.text}</Link>;
  } else {
    return <span className="nav negative">{props.text}</span>;
  }
};

const BlogPage = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <div className="main-section">
      <div className="section">
        <div className="post-list flex jc-start">
          {group.map((post, index) => {
            if (post.node.frontmatter.type === 'post')
              return (
                <PostCard post={post} key={index} />
              );
          })}
        </div>
        <div className="pagination flex al-center jc-between">
          <NavLink test={first} url={`/blog/${previousUrl}`} text="Previous" />        
          <NavLink test={last} url={`/blog/${nextUrl}`} text="Next" />
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
