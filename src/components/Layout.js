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

  const pageMaxWidth = '48rem'

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
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 9999,
            backgroundColor: 'var(--black)',
            position: 'fixed',
            top: 0,
            width: 'calc(100% - 58px)',
            maxWidth: pageMaxWidth,
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
                // color: 'var(--textTitle)',
                color: 'white',
                marginLeft: 20,
                fontSize: 20,
                fontFamily: 'var(--font-bold)',
                display: 'inherit',
              }}
              to={'/'}
            >
              {/* <img style={{ margin: 0 }} src={logo} alt="dezineleo" /> */}
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
                marginLeft: 16,
                padding: '14px 20px',
                display: 'inline-block',
                boxShadow: 'none',
                color: 'var(--black)',
              }}
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
