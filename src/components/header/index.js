import React from 'react';
import Link from 'gatsby-link';
import Logo from '../../assets/imgs/logo.svg';

import '../../assets/css/common.css';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      windowWidth: null,
      pathUrl: undefined,
      window: undefined,
    }
    this.showMenu = this.showMenu.bind(this);
  }
  headerFix() {
    this.setState(() => ({
      windowWidth: window.innerWidth,
    }));
  }
  updatePath() {
    if (!this.state.window)
      return;

    const curPathName = this.state.window.location.pathname.split('/')[1];
    if (curPathName) {
      if (curPathName === 'posts') {
        this.state.pathUrl = 'blog';
      } else {        
        this.state.pathUrl = curPathName;
      }
    } else {
      this.state.pathUrl = 'home';
    }
  }
  componentDidMount() {
    this.headerFix();
    this.state.window = window;
    window.addEventListener('resize', () => this.headerFix());
    this.state.pathUrl = window.location.pathname.split('/')[1];
  }
  showMenu() {
    this.setState(({showMenu}) => ({
      showMenu: !showMenu,
    }));
  }
  render() {
    const { leftMenu, rightMenu } = this.props;

    // Left Menu
    const leftMenuItems = leftMenu.map(({name, path}) =>
      <li key={name} onClick={this.updatePath()} className={this.state.pathUrl === name.toLowerCase() ? 'active' : ''}><Link to={path}>{name}</Link></li>
    );
  
    // Right Menu
    const rightMenuItems = rightMenu.map(({name, path}) => {
      const internal = /^\/(?!\/)/.test(path);

      if (internal) {
        return (
          <li key={name}><Link to={path}>{name}</Link></li>
        );
      }

      return (
        <li key={name}><a href={path}>{name}</a></li>
      );
    });
  
    const mobileMenu = (
      <div className="header mobile-header flex al-center jc-between">
        <Link to="/" className="logo"><img src={Logo} /></Link>
        <div className={`menu mobile-menu ${this.state.showMenu ? 'show' : ''}`}>
          <div className="menu-icon" onClick={this.showMenu}>Menu<span></span></div>
          <div className="menu-items" onClick={this.showMenu}>
            <ul className="flex al-center flex-wrap">{leftMenuItems}</ul>
          </div>
        </div>
      </div>
    );
  
    const desktopMenu = (
      <div className="header flex al-center jc-between">
        <div className="menu left-menu">
          <ul className="flex jc-start">{leftMenuItems}</ul>
        </div>
        <Link to="/" className="logo"><img src={Logo} /></Link>
        <div className="menu right-menu">
          <ul className="flex jc-end">{rightMenuItems}</ul>
        </div>
      </div>
    );

    return (
      <div className="header-wrap flex al-center">
        {this.state.windowWidth < 1120 && mobileMenu}
        {this.state.windowWidth >= 1120 && desktopMenu}
      </div>
    );
  }
}

export default Header;
