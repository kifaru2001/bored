import React from 'react'

import PropTypes from 'prop-types'

import './heading.css'

const Heading = (props) => {
  return (
    <div className={`heading-container ${props.rootClassName} `}>
      <div className="heading-container1">
        <h1 className="heading-heading">
          <span className="heading-text">Bored Whales Yacht Club</span>
          <br className="heading-text1"></br>
          <span className="heading-text2">Season II</span>
          <br className="heading-text3"></br>
        </h1>
      </div>
    </div>
  )
}

Heading.defaultProps = {
  rootClassName: '',
}

Heading.propTypes = {
  rootClassName: PropTypes.string,
}

export default Heading
