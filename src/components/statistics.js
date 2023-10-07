import React from 'react'

import PropTypes from 'prop-types'

import './statistics.css'

const Statistics = (props) => {
  return (
    <section className="statistics-statistics">
      <img
        alt={props.image_alt}
        src="https://media3.giphy.com/media/x84Ub9Xdr78tEntQfR/giphy.gif?cid=ecf05e47czsc704ubzgjplhvunx9ujk6fxq13d1qzibq8d37&amp;ep=v1_stickers_search&amp;rid=giphy.gif&amp;ct=s"
        className="statistics-image"
      />
      <div className="statistics-content">
        <div className="statistics-stat">
          <h3 className="statistics-header">{props.Header1}</h3>
          <span className="statistics-text">{props.text}</span>
        </div>
      </div>
      <svg viewBox="0 0 987.4285714285713 1024" className="statistics-icon">
        <path d="M987.429 510.286c0 5.143-2.286 10.286-5.714 13.714l-219.429 202.286c-5.714 5.143-13.143 6.286-20 3.429-6.286-2.857-10.857-9.143-10.857-16.571v-128h-713.143c-10.286 0-18.286-8-18.286-18.286v-109.714c0-10.286 8-18.286 18.286-18.286h713.143v-128c0-7.429 4-13.714 10.857-16.571s14.286-1.714 20 2.857l219.429 200c3.429 3.429 5.714 8 5.714 13.143v0z"></path>
      </svg>
      <span className="statistics-text1">{props.text1}</span>
    </section>
  )
}

Statistics.defaultProps = {
  image_alt: 'image',
  Header1: '$WHLS AIRDROP',
  text: 'WHLS PROTOCOL IS THE GOVERNANCE TOKEN OF THE COMMUNITY! MEMBERS CAN DELEGATE IT AND MAKE PROPOSALS ON BWYC DAO! AND BUY SII NFT. ELIGIBLE MEMBERS CAN CLAIM AIRDROP ONCE WHITELISTED. TO GET WHITELIST! PLEASE HOLD AT LEAST 100 $WHLS OR SI NFT. THE PROTOCOL IS AIMED  TO MAKING BWYC MORE DECENTRALIZED. $WHLS WILL BE LISTED ON DEX EARLY 2024 WITH SO MANY UTILITIES AWATING.',
  text1: 'PROTOCAL DOCUMENTATION',
}

Statistics.propTypes = {
  image_alt: PropTypes.string,
  Header1: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Statistics
