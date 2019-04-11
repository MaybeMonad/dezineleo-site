import React from 'react'
import profilePic from '../assets/profile-pic.jpg'
// import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: 24,
          background: 'white',
          borderRadius: '6px',
          padding: '32px 24px',
          border: 'var(--border)',
        }}
      >
        <img
          src={profilePic}
          alt={`Yang Jin`}
          style={{
            marginRight: 20,
            marginBottom: 0,
            width: 56,
            height: 56,
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310, margin: 0 }}>
          Personal blog by{' '}
          <a href="https://mobile.twitter.com/dezineleo">Yang Jin</a>. I am
          enthusing about learning and creating.
        </p>
      </div>
    )
  }
}

export default Bio
