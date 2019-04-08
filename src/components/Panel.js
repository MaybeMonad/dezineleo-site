import React from 'react'

function Panel({ children, style = {} }) {
  return (
    <p
      style={{
        fontSize: '0.9em',
        border: 'var(--border)',
        borderRadius: '5px',
        padding: '0.75em',
        background: 'white',
        wordBreak: 'keep-all',
        ...style,
      }}
    >
      {children}
    </p>
  )
}

export default Panel
