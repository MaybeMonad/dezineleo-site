import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
// import { debounce } from 'lodash'
import { pageMaxWidth } from '../utils/constants'
import FullWidthWrapper from '../components/FullWidthWrapper'

export default props => {
  const { children } = props
  const [theme, setTheme] = useState(null)
  const [active, setActive] = useState(false)
  const [pathname, setPathname] = useState(null)
  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
    setPathname(location.pathname.split('/')[1])
  }, [])

  const TopNav = props => {
    const { className, style, children } = props
    return (
      <header class={`${!active ? '' : 'active '}${className}`} style={style}>
        {children}
      </header>
    )
  }

  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    padding: 0;
    transition: all 0.24s ease;
    padding: 20px 0;
    margin: 0 auto;
    h1 {
      margin: 0;
      a {
        box-shadow: none;
        text-decoration: none;
        color: var(--black);
        display: inherit;
        font-size: 21px;
        margin-right: 20px;
        tansition: color 0.2s ease;
      }
    }
    .version {
      background-color: var(--primary);
      border-radius: 4px;
      border-bottom-left-radius: 0;
      padding: 1px 4px;
      font-size: 12px;
      color: white;
      position: absolute;
      right: -38px;
      top: 0;
    }
    .header-top-right {
      span {
        font-family: var(--font-regular);
        color: var(--black);
      }
      a {
        font-size: 12px;
        font-family: var(--font-bold);
        color: var(--black);
      }
    }
    nav {
      background-color: var(--dark-1);
      border-radius: 100px;
      padding: 20px;
      a {
        padding: 8px 24px;
        box-shadow: none;
        text-transform: uppercase;
        font-size: 15px;
        font-family: var(--font-bold);
      }
    }
    @media (max-width: 672px) {
      padding: 0 0;
      left: 0;
      // width: calc(100% - 2.6rem);
      // background-color: var(--black);
      h1 {
        a {
          color: white;
        }
      }
      .header-top-right {
        span,
        a {
          color: white;
        }
      }
      nav {
        background-color: transparent;
        padding: 0;
        a {
          color: var(--dark-4);
          padding: 8px 0 8px 20px;
          font-size: 14px;
          &:first-child {
            display: none;
          }
        }
      }
    }
  `

  return (
    <div className={`page ${pathname}`}>
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
          padding: `0rem 1.3rem`,
        }}
      >
        <Header>
          <h1>
            <Link to={'/'} style={{ position: 'relative' }}>
              <span style={{ fontFamily: 'var(--font-bold)' }}>Dezine</span>
              <span className="version">v2.4</span>
            </Link>
          </h1>
          <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/archive'}>Archive</Link>
            <Link to={'/about'}>About</Link>
          </nav>
        </Header>
        {children}
      </div>
    </div>
  )
}
