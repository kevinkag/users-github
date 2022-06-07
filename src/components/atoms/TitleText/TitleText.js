import React from 'react'
import PropTypes from 'prop-types'
import './TitleText.css'

const TitleText = ({children, className}) => {
  return (
    <div className={className}>{children}</div>
  )
}

TitleText.propTypes = {
    className: PropTypes.oneOf(['default','title','description'])
}

TitleText.defaultProps = {
    className: 'default'
}

export default TitleText