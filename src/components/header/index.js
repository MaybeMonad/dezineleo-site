import React from 'react';
import Link from 'gatsby-link';
import Logo from '../../assets/imgs/logo.svg';

import '../../assets/css/common.css';
import './index.css';

const Header = ({leftMenu, rightMenu}) => {
  const leftMenuItems = leftMenu.map(({name, path}, index) => 
    <li key={index}><Link to={path}>{name}</Link></li>
  );

  const rightMenuItems = rightMenu.map(({name, path}, index) => 
    <li key={index}><Link to={path}>{name}</Link></li>
  );

  return (
    <div className="header flex al-center jc-between">
      <div className="menu left-menu">
        <ul className="flex jc-start">{leftMenuItems}</ul>
      </div>
      <Link to="/" className="logo"><img src={Logo} /></Link>
      <div className="menu right-menu">
        <ul className="flex jc-end">
          <li>Follow Me</li>
          {rightMenuItems}
        </ul>
      </div>
    </div>
  );
}

export default Header
