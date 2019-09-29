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
          maxWidth: '45rem',
          padding: `2rem 1.3rem`,
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
          <div className="header-top-right" style={{ fontSize: 13 }}>
            <span>Stay focus, make impact.</span>
            <a
              style={{ marginLeft: 16 }}
              className="btn btn-primary"
              href="mailto:dezineleo@gmail.com"
            >
              Hire Me
            </a>
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}
