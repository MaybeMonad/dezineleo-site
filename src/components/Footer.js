import React from 'react'
import styled from 'styled-components'

export default () => {
  const Link = styled.a`
    font-family: var(--font-regular);
    margin-right: 13px;
    // transition: text-decoration 0.32s ease;
  `

  return (
    <footer
      style={{
        marginTop: '2.625rem',
        fontSize: 14,
      }}
    >
      <div style={{ float: 'right' }}>
        <Link
          style={{ marginRight: 0 }}
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          rss
        </Link>
      </div>
      <Link
        href="https://mobile.twitter.com/dezineleo"
        target="_blank"
        rel="noopener noreferrer"
      >
        twitter
      </Link>
      <Link
        href="https://github.com/dezineleo"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </Link>
      <Link
        href="https://dribbble.com/dezineleo"
        target="_blank"
        rel="noopener noreferrer"
      >
        dribbble
      </Link>
    </footer>
  )
}
