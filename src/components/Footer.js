import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: '2.625rem',
          fontSize: 14,
          // paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <a
          href="https://mobile.twitter.com/dezineleo"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/dezineleo"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://dribbble.com/dezineleo"
          target="_blank"
          rel="noopener noreferrer"
        >
          dribbble
        </a>
      </footer>
    )
  }
}

export default Footer
