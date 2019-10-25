import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { debounce } from 'lodash'

export default props => {
  const { children } = props
  const [theme, setTheme] = useState(null)
  const [active, setActive] = useState(false)
  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
    window.addEventListener(
      'scroll',
      debounce(() => {
        // console.log(window.pageYOffset);
        if (window.pageYOffset < 56) {
          setActive(false)
        } else {
          setActive(true)
        }
      }, 150)
    )
  }, [])

  const pageMaxWidth = '48rem'

  const TopNav = styled.header`
    background-color: ${!active ? 'white' : 'var(--black)'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    position: fixed;
    top: 0;
    width: calc(100% - 58px);
    max-width: ${active ? `calc(${pageMaxWidth} - 40px)` : pageMaxWidth};
    height: 56px;
    padding: ${active ? '0 20px' : '0'};
    transition: all ease 0.24s;
    @media (max-width: 672px) {
      padding: 0 24px;
      left: 0;
      width: calc(100% - 48px);
    }
    h1 {
      margin: 0;
      a {
        box-shadow: none;
        text-decoration: none;
        color: ${active ? 'white' : 'var(--black)'};
        display: inherit;
        font-size: 20px;
        margin-right: 20px;
      }
    }
    .header-top-right {
      span {
        // color: var(--font-grey);
        font-family: var(--font-regular);
        color: ${active ? 'white' : 'var(--black)'};
      }
      a {
        font-size: 12px;
        font-family: var(--font-bold);
        color: ${active ? 'white' : 'var(--black)'};
      }
    }
  `

  return (
    <div
      style={{
        color: 'var(--textNormal)',
        background: 'var(--bg)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
        minHeight: '100vh',
      }}
    >
      <Helmet
        meta={[
          {
            name: 'theme-color',
            content: theme === 'light' ? '#ffa8c5' : '#282c35',
          },
        ]}
      />
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: pageMaxWidth,
          padding: `4.8rem 1.3rem 2rem 1.3rem`,
        }}
      >
        <TopNav>
          <h1>
            <Link to={'/'}>
              <span style={{ fontFamily: 'var(--font-bold)' }}>de</span>
              <span style={{ fontFamily: 'var(--font-heavy)' }}>zi</span>
              <span style={{ fontFamily: 'var(--font-medium)' }}>ne</span>
              <span style={{ fontFamily: 'var(--font-regular)' }}>le</span>
              <span style={{ fontFamily: 'var(--font-light)' }}>o</span>
            </Link>
          </h1>
          <div className="header-top-right" style={{ fontSize: 13 }}>
            <span>Stay focus, make impact.</span>
            <a
              style={{
                marginLeft: 20,
                display: 'inline-block',
              }}
              href="mailto:dezineleo@gmail.com"
            >
              Hire Me
            </a>
          </div>
        </TopNav>
        {children}
      </div>
    </div>
  )
}
