import React from 'react';
import Link from 'gatsby-link';

// Utilities
import kebabCase from 'lodash/kebabCase';

import '../../assets/css/common.css';
import './tag.css';

const Tag = ({tag}) => (
  <li className="tag">
    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
      {tag.fieldValue} <span>/ {tag.totalCount}</span>
    </Link>
  </li>
);

export default Tag;