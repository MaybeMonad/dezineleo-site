import React from 'react';
import styled from 'styled-components';

import { COLORS, BREAKPOINTS, READING_WIDTH } from '@constants';

// import ClickableIcon from '../ClickableIcon';
// import TextLink from '../TextLink';

import Twitter from '@assets/icons/twitter.svg'
import Dribbble from '@assets/icons/dribbble.svg'
import GitHub from '@assets/icons/github.svg'

// const WIDTH = 32;

const Footer = () => (
  <Wrapper>
    <Copyright>Dezine © 2020</Copyright>
    <FindMe>
      <Email>
        Get in touch:{' '}
        <a href="mailto:dezineleo@gmail.com">dezineleo@gmail.com</a>
      </Email>
      <a
        href="https://mobile.twitter.com/dezineleo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Twitter} alt="Twitter" />
      </a>
      <a
        href="https://dribbble.com/dezineleo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Dribbble} alt="Dribbble" />
      </a>
      <a
        href="https://github.com/dezineleo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GitHub} alt="GitHub" />
      </a>
    </FindMe>
  </Wrapper>
);

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 36px 0;
  color: ${COLORS.gray[900]};
  max-width: ${READING_WIDTH}px;
  margin: 0 auto;
  border-top: 1px solid ${COLORS.gray[200]};

  @media ${BREAKPOINTS.sm} {
    margin: 6px;
  }
`;

const Copyright = styled.div`
  font-weight: 700;
  font-size: 16px;
  font-family: 'Bree Serif';
`;

const Email = styled.div`
  font-size: 0.8rem;
  a {
    color: ${COLORS.gray[500]};
    padding: 0 1rem 0 0;
    margin-left: 8px!important;
  }
`;

const FindMe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    margin-left: 14px;
    img {
      display: block;
    }
  }
`;

export default Footer;
