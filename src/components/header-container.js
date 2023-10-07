import React from 'react'

import Heading from './heading'
import './header-container.css'

const HeaderContainer = (props) => {
  return (
    <div className="header-container-header-container">
      <div className="header-container-header">
        <Heading rootClassName="heading-root-class-name"></Heading>
      </div>
      <p className="header-container-caption">
        <span className="header-container-text">
          A collection of 10000 Provably rare PFPs Born on CORE Chain and
          traveling across EVM &amp; Bitcoin chains REWARDING THE OWNER EVERY
          STEP OF THE WAY. Join US, Buy a
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="header-container-text1">SII</span>
        <span className="header-container-text2">
          {' '}
          Version NFT to Join the CLUB.
        </span>
      </p>
    </div>
  )
}

export default HeaderContainer
