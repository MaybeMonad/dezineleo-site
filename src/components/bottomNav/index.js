import React from 'react';
import Link from 'gatsby-link';

import '../../assets/css/common.css';
import './index.css';

const BottomNav = ({ bottomMenu }) => {
  const navItems = bottomMenu.map(({name, path}) => 
    <li key={name}><Link to={path}>{name}</Link></li>
  );

  return (
    <div className="bottom-nav flex jc-between al-center">
      {navItems}
    </div>
  )
}

export default BottomNav;
