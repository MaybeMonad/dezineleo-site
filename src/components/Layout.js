import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

const Menu = styled.ul`
  display: flex;
  justify-content: between;
  align-items: center;
  list-style: none;
  margin: 0;

  li {
    margin: 0 28px;
    font-size: 14px;
  }
`

export default props => {
  const { children } = props
  const [theme, setTheme] = useState(null)
  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

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
          maxWidth: rhythm(24),
          padding: `2.625rem ${rhythm(3 / 4)}`,
        }}
      >
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2.625rem',
          }}
        >
          <h1
            style={{
              ...scale(0.75),
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'var(--textTitle)',
              }}
              to={'/'}
            >
              <img style={{ margin: 0 }} src={logo} alt="dezineleo" />
            </Link>
          </h1>
          <Menu>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/work">Work</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </Menu>
        </header>
        {children}
      </div>
    </div>
  )
}
