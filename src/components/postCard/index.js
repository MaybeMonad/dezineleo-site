import React from 'react';

// Components
import Link from 'gatsby-link';
import Img from "gatsby-image";

import '../../assets/css/common.css';
import '../../assets/css/blog.css';
import './index.css';

const PostCard = ({post}) => {
  const {
    title,
    date,
    path,
    excerpt,
    thumbnail: {
      childImageSharp: { sizes }
    }
  } = post.node.frontmatter;
  const timeToRead = post.node.timeToRead;

  return (
    <div className="post-card">
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
  )
}

export default PostCard;
