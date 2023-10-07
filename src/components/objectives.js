import React from 'react'

import PropTypes from 'prop-types'

import './objectives.css'

const Objectives = (props) => {
  return (
    <section className="objectives-objectives">
      <div className="objectives-content">
        <div className="objectives-objectives-list">
          <div className="objective">
            <h3 className="objectives-text">{props.heading}</h3>
            <p className="objectives-text1">{props.text1}</p>
          </div>
          <div className="objective">
            <h3 className="objectives-text2">{props.heading1}</h3>
            <p className="objectives-text3">{props.text2}</p>
          </div>
          <div className="objective">
            <h3 className="objectives-text4">{props.heading2}</h3>
            <p className="objectives-text5">{props.text3}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

Objectives.defaultProps = {
  text2:
    'SII VERSION OF BWYC CAN BE SWAPPED FOR WHLS TOKEN, WHLS IS A RARE GOVERNANCE PROTOCOL DISTRIBUTED IN A BITCOIN-LIKE MANNER',
  heading2: 'DOWNGRADE TO SI',
  text: 'TRAITS',
  heading1: 'SWAP-CAPBILITY',
  text1:
    'SEASON II HAS BEEN CAREFULLY CRAFTED AND ALL 10000 NFTs ARE UNIQUE AND RARE IN THEIR OWN WAY JUST LIKE EVERY PERSON THAT OWNS IT',
  text3:
    'S1 OWNERS CAN CLAIM A SEASON II FOR FREE AND TRADE WITH CORE AND WHLS. SII CAN ALSO BE STAKED TO EARN WHLS DURING SECOND $WHLS HALVING',
  heading: '100+ TRAITS',
}

Objectives.propTypes = {
  text2: PropTypes.string,
  heading2: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  heading: PropTypes.string,
}

export default Objectives
