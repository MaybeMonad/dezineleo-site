import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

import { COLORS } from '@constants';

import Footer from '../Footer';

import runGlobal from './global';
import './reset.css';
import './fonts.css';

import '../../polyfills/intersection-observer';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    line-height: 1.4;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${COLORS.pink[500]};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Bree Serif";
  }

  // ::selection {
  //   background-color: ${COLORS.lime[500]};
  // }

  /*
    For unknown reasons, 'InlineCode' isn't being used with MDX.
    Duplicating those styles here.
  */
  p code {
    display: inline-block;
    font-family: Menlo, Roboto Mono, Courier New, monospace;
    font-size: 0.8em;
    font-weight: 100;
    padding: 2px 6px;
    background: ${COLORS.gray[100]};
    line-height: 1.4em;
    border-radius: 4px;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }
`;

export default ({ children }) => {
  React.useEffect(() => {
    runGlobal();
  }, []);

  return (
    <Fragment>
      {children}

      <Footer />

      <GlobalStyles />
    </Fragment>
  );
};
