import React from 'react'
import { Link } from 'gatsby'
import profilePic from '../assets/profile-pic.png'
import styled from 'styled-components'

const Bio = styled.div`
  display: flex;
  margin: 24px 0;
  background-color: white;
  border-radius: 6px;
  padding: 32px;
  border: var(--border);
  .avatar {
    margin: 0 24px 0 0;
    width: 72px;
    min-width: 72px;
    height: 72px;
    border-radius: 50%;
    display: inline-block;
  }
  h3 {
    margin: 0;
    line-height: 1.3;
  }
  p {
    font-size: 14px;
    line-height: 1.4;
    margin: 8px 0 0 0;
  }
  a {
    &.twitter_me {
      color: var(--font-grey);
      display: block;
      font-size: 13px;
    }
  }
  ul {
    padding: 0;
    list-style: none;
    margin: 12px 0 0 0;
    li {
      display: inline-block;
      margin: 0 12px 0 0;
      background-color: var(--bg-grey);
      opacity: 0.6;
      border-radius: 4px;
      padding: 0 12px;
      transition: opacity 0.3s ease;
      a {
        font-family: var(--font-regular);
        font-size: 12px;
      }
      :hover {
        opacity: 1;
      }
    }
  }
  .reach-me {
    padding-left: 24px;
  }
  @media (max-width: 672px) {
    flex-direction: column;
    h3 {
      margin-top: 12px;
    }
    .reach_me {
      margin-top: 24px;
    }
  }
`

export default () => {
  return (
    <Bio>
      <img className="avatar" src={profilePic} alt={`Yang Jin`} />
      <div className="info">
        <h3>Yang Jin</h3>
        <a
          className="twitter_me"
          href="https://twitter.com/dezineleo"
          target="_blank"
        >
          @dezineleo
        </a>
        <p>
          Web Developer, Graphic Designer and English Teacher. PM for work
          inquires.
        </p>
        <ul>
          <li>
            <Link to="/about">#resume</Link>
          </li>
          <li>
            <Link to="/what-i-use">#what-i-use</Link>
          </li>
        </ul>
      </div>
      <div className="d-flex justify-start align-items-start reach_me">
        <a
          className="message_me"
          style={{ marginRight: 12 }}
          href="https://twitter.com/dezineleo"
          target="_blank"
        >
          <button className="btn btn-small btn-grey">Message</button>
        </a>
        <a
          className="follow_me"
          href="https://twitter.com/dezineleo"
          target="_blank"
        >
          <button className="btn btn-small btn-primary">Follow</button>
        </a>
      </div>
    </Bio>
  )
}
