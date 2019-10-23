import React from 'react'
import { Link } from 'gatsby'
import profilePic from '../assets/profile-pic.png'
// import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: 24,
          background: 'white',
          // background: '#d8ece8',
          // borderRadius: '3px',
          padding: '32px 24px',
          border: 'var(--border)',
          // boxShadow: 'var(--box-shadow)',
        }}
      >
        <img
          src={profilePic}
          alt={`Yang Jin`}
          style={{
            marginRight: 20,
            marginBottom: 0,
            width: 56,
            minWidth: 56,
            height: 56,
            borderRadius: '50%',
            display: 'inline-block',
          }}
        />
        <div>
          <p style={{ margin: 0 }}>
            Personal site by <Link to="/about">Yang Jin</Link>. I am enthusing
            about learning and creating.
          </p>
          <Link to="/about" style={{ marginRight: 20 }}>
            #resume
          </Link>
          <Link to="/what-i-use">#what-i-use</Link>
        </div>
      </div>
    )
  }
}

export default Bio
