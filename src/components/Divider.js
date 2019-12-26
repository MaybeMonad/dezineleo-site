import React from 'react'
import classnames from 'classnames'

export default props => {
  const { className, style } = props

  return <div className={classnames('divider', className)} style={style} />
}
