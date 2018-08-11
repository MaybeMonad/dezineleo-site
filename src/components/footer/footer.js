import React from 'react';
import Link from 'gatsby-link';
import Logo from '../../assets/imgs/logo_light.svg';

import '../../assets/css/common.css';
import './footer.css';
import { rightMenu } from '../../config/config';

const Footer = () => (
  <div className="footer">
    <div className="section flex flex-wrap jc-between al-center">
      <img className="logo" src={Logo} />
      <div className="footer-info flex jc-between al-center">
        <div className="year flex al-center">
          <p>2018</p>
        </div>
        <div className="quote flex al-center">
          <div>
            <h3>Get Your Hands Dirty.</h3>
            <p>Leo is single.</p>
          </div>
        </div>
        <div className="contact">
          <div className="top flex jc-between">
            <div className="email">dezineleo@gmail.com</div>
            <div className="social">
            {
              rightMenu.map(({name, path}) => (
                <a href={path} key={name}>{name}</a>
              ))
            }
            </div>
          </div>
          <div className="bottom wechat">
            U2FsdGVkX1+53atsU2PgQOlviHzt/hZq/yVM2kg4+hI=
            <span>WeChat</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
