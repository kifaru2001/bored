import React from 'react'

import PropTypes from 'prop-types'

import './slider.css'

const Slider = (props) => {
  return (
    <section className="slider-slider">
      <div className="slider-header">
        <h2 className="slider-heading">
          <span className="slider-text">SEASON II</span>
          <span>
            {' '}
            IS NEXT LEVEL
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="slider-text2">GENIUS</span>
        </h2>
      </div>
      <div className="slider-selector">
        <p className="slider-caption">
          <span className="slider-text3">
            Every piece crafted with state of the art AI programming to generate
            a wonderful digital art. SEASON II HAS NO ROADMAP. WE JUST WANT TO
            GET BORED ENOUGHT.
          </span>
          <br></br>
        </p>
        <p className="slider-caption1">
          SEASON II IS SO COOL WE HAVE OVER 100 TRAITS FOR EVERY NFT. SEASON II
          NFT ON CORE WILL HAVE BADGES AND THEY CHANGE WHEN THE OWNER CROSSES
          CHAINS.
        </p>
      </div>
    </section>
  )
}

Slider.defaultProps = {
  Caption:
    'SEASON II IS SO COOL WE HAVE OVER 100 TRAITS FOR EVERY NFT. SEASON II NFT ON CORE WILL HAVE BADGES AND THEY CHANGE WHEN THE OWNER CROSSES CHAINS.',
}

Slider.propTypes = {
  Caption: PropTypes.string,
}

export default Slider
