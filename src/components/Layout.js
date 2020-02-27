import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
// import { debounce } from 'lodash'
import { pageMaxWidth } from '../utils/constants'
import FullWidthWrapper from '../components/FullWidthWrapper'

import Logo from '../assets/logo_avatar.svg'

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

  const StyledTopNav = styled(TopNav)`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    position: fixed;
    top: 0;
    width: calc(100% - 58px);
    max-width: ${pageMaxWidth};
    height: 56px;
    padding: 0;
    transition: all 0.24s ease;
    &.active {
      background-color: var(--black);
      max-width: calc(${pageMaxWidth} - 40px);
      padding: 0 20px;
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
    }
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
        color: var(--black);
        display: inherit;
        font-size: 20px;
        margin-right: 20px;
        tansition: color 0.2s ease;
      }
    }
    .header-top-right {
      span {
        // color: var(--font-grey);
        font-family: var(--font-regular);
        color: var(--black);
      }
      a {
        font-size: 12px;
        font-family: var(--font-bold);
        color: var(--black);
      }
    }
  `

  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 0;
    transition: all 0.24s ease;
    max-width: 52rem;
    padding: 0rem 1.3rem;
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
    @media (max-width: 672px) {
      padding: 0 1.3rem;
      left: 0;
      width: calc(100% - 2.6rem);
      background-color: var(--black);
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
          padding: `0rem 1.3rem 2rem 1.3rem`,
        }}
      >
        <FullWidthWrapper className={`fullwidth-${pathname}`}>
          <Header>
            <h1>
              <Link to={'/'}>
                {/* <img src={Logo} alt="Dezineleo" style={{ width: 36 }} /> */}
                {/* <span style={{ fontFamily: 'var(--font-heavy)' }}>de</span> */}
                {/* <span style={{ fontFamily: 'var(--font-bold)' }}>zi</span>
                <span style={{ fontFamily: 'var(--font-medium)' }}>ne</span>
                <span style={{ fontFamily: 'var(--font-regular)' }}>le</span>
                <span style={{ fontFamily: 'var(--font-light)' }}>o</span> */}

                <span style={{ fontFamily: 'var(--font-bold)' }}>Dezine</span>
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
          </Header>
        </FullWidthWrapper>
        {children}
      </div>
    </div>
  )
}
