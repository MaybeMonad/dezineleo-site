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

// class BottomNav extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showMenu: false,
//       windowWidth: null,
//     }
//     this.showMenu = this.showMenu.bind(this);
//   }
//   headerFix() {
//     this.setState(() => ({
//       windowWidth: window.innerWidth,
//     }));
//   }
//   componentDidMount() {
//     this.headerFix();

//     window.addEventListener('resize', () => this.headerFix());
//   }
//   showMenu() {
//     this.setState(({showMenu}) => ({
//       showMenu: !showMenu,
//     }));
//   }
//   render() {
//     const { bottomMenu } = this.props;

//     // Left Menu
//     const leftMenuItems = leftMenu.map(({name, path}) => 
//       <li key={name}><Link to={path}>{name}</Link></li>
//     );
  
//     // Right Menu
//     const rightMenuItems = rightMenu.map(({name, path}) => 
//       <li key={name}><Link to={path}>{name}</Link></li>
//     );
  
//     // Mobile Menu
//     const mobileMenuItems = leftMenuItems.concat(rightMenuItems);
  
//     const mobileMenu = (
//       <div className="header flex al-center jc-between">
//         <Link to="/" className="logo"><img src={Logo} /></Link>
//         <div className={`menu mobile-menu ${this.state.showMenu ? 'show' : ''}`}>
//           <div className="menu-icon" onClick={this.showMenu}>Menu</div>
//           <div className="menu-items" onClick={this.showMenu}>
//             <ul className="flex jc-start flex-wrap">{mobileMenuItems}</ul>
//           </div>
//         </div>
//       </div>
//     );
  
//     const desktopMenu = (
//       <div className="header flex al-center jc-between">
//         <div className="menu left-menu">
//           <ul className="flex jc-start">{leftMenuItems}</ul>
//         </div>
//         <Link to="/" className="logo"><img src={Logo} /></Link>
//         <div className="menu right-menu">
//           <ul className="flex jc-end">
//             <li>Follow Me</li>
//             {rightMenuItems}
//           </ul>
//         </div>
//       </div>
//     );

//     return this.state.windowWidth < 1120 ? mobileMenu : desktopMenu;
//   }
// }

export default BottomNav;
