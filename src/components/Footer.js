import React from 'react'
import styled from 'styled-components'

import Twitter from '../../static/home/twitter.svg'
import Dribbble from '../../static/home/dribbble.svg'
import GitHub from '../../static/home/github.svg'

const Footer = styled.footer`
  padding: 36px 0;
  border-top: var(--border);
  .copyright {
    font-family: var(--font-bold);
    font-size: 16px;
  }
  .find-me {
    .email {
      font-family: var(--font-medium);
      a {
        color: var(--font-grey);
        font-family: var(--font-regular);
        padding: 1rem;
      }
    }
  }
  @media (max-width: 672px) {
    flex-direction: column;
    align-items: flex-start;
    .find-me {
      ${'' /* align-items: flex-start; */}
      .email {
        a {
          padding: 0;
        }
      }
    }
  }
`

export default props => {
  const { style } = props
  const Link = styled.a`
    font-family: var(--font-regular);
    margin-left: 14px;
    img {
      display: block;
    }
  `

  return (
    <Footer style={style} className="d-flex justify-between align-items-center">
      <div className="copyright">Dezine © 2020</div>
      <div className="find-me d-flex justify-between align-items-center">
        <div className="email">
          Get in touch:{' '}
          <a href="mailto:dezineleo@gmail.com">dezineleo@gmail.com</a>
        </div>
        <Link
          href="https://mobile.twitter.com/dezineleo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Twitter} alt="Twitter" />
        </Link>
        <Link
          href="https://dribbble.com/dezineleo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Dribbble} alt="Dribbble" />
        </Link>
        <Link
          href="https://github.com/dezineleo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHub} alt="GitHub" />
        </Link>
      </div>
      {/* <div style={{ float: 'right' }}>
        <Link
          style={{ marginRight: 0 }}
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          rss
        </Link>
      </div> */}
    </Footer>
  )
}
