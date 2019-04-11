import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

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
          maxWidth: '42rem',
          padding: `2.6rem 1.3rem`,
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
              // ...scale(0.75),
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'var(--textTitle)',
                fontSize: 20,
                fontFamily: 'ubuntubold',
              }}
              to={'/'}
            >
              {/* <img style={{ margin: 0 }} src={logo} alt="dezineleo" /> */}
              dezineleo
            </Link>
          </h1>
          <a style={{ fontSize: 13 }} href="mailto:dezineleo@gmail.com">
            Get Hands Dirty.
          </a>
        </header>
        {children}
      </div>
    </div>
  )
}
