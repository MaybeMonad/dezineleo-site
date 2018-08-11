import React from 'react';
import Link from 'gatsby-link';

// Utilities
import kebabCase from 'lodash/kebabCase';

import '../../assets/css/common.css';
import './tags.css';

const Tags = ({tags}) => (
  <div className="tags">
    <ul>
      {tags.map(tag => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} <span>/ {tag.totalCount}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;