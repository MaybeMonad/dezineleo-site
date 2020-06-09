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
    color: ${COLORS.blue[500]};
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
  p code, li code {
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

  /*
    For syntax highlighting.
  */

  pre[class*='language-'], code[class*='language-'] {
    font-family: Menlo, Roboto Mono, Courier New, monospace;
  }

  pre[class*='language-'] {
    overflow: auto;
    margin: 1em 0;
    padding: 1.2em;
    border-radius: 3px;
    font-size: 0.85em;
    line-height: 1.6em;
    // border: 1px solid ${COLORS.gray[300]};
    border: 1px solid #d1d5da;
  }

  body div.code-toolbar {
    margin-bottom: 2rem;
    
    .line-numbers .line-numbers-rows {
      border: none;
      top: -2px;
    }

    pre {
      margin-bottom: -1px;
      border-radius: 4px 4px 0 0;
    }

    .toolbar {
      position: relative;
      background-color: ${COLORS.gray[50]};
      border: 1px solid #d1d5da;
      top: 0;
      left: 0;
      border-radius: 0 0 4px 4px;
      padding: 2px 2px 4px 10px;
      opacity: 1;

      .toolbar-item {
        span {
          background-color: transparent;
          box-shadow: none;
          border-radius: 0;
          color: ${COLORS.gray[500]};
        }
      }
    }
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
