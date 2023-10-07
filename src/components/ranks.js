import React from 'react'

import PropTypes from 'prop-types'

import './ranks.css'

const Ranks = (props) => {
  return (
    <div className={`ranks-container ${props.rootClassName} `}>
      <div className="ranks-container01">
        <div className="ranks-container02">
          <div className="ranks-container03">
            <span className="ranks-text">{props.text4}</span>
            <span className="ranks-text01">{props.text41}</span>
          </div>
          <div className="ranks-container04">
            <span className="ranks-text02">{props.text33}</span>
            <span className="ranks-text03">
              <span>DISCORD ROLE </span>
              <br></br>
            </span>
            <span className="ranks-text06">{props.text31}</span>
          </div>
        </div>
        <div className="ranks-container05">
          <div className="ranks-container06">
            <div className="ranks-container07">
              <span className="ranks-text07">{props.text42}</span>
              <span className="ranks-text08">{props.text411}</span>
            </div>
          </div>
          <div className="ranks-container08">
            <div className="ranks-container09">
              <span className="ranks-text09">{props.text331}</span>
              <span className="ranks-text10">
                <span>DISCORD ROLE 2 </span>
                <br></br>
              </span>
              <span className="ranks-text13">{props.text311}</span>
            </div>
          </div>
        </div>
        <div className="ranks-container10">
          <div className="ranks-container11">
            <span className="ranks-text14">{props.text421}</span>
            <span className="ranks-text15">{props.text4111}</span>
          </div>
          <div className="ranks-container12">
            <span className="ranks-text16">{props.text3311}</span>
            <span className="ranks-text17">
              <span>DISCORD ROLE 3 </span>
              <br></br>
            </span>
            <span className="ranks-text20">{props.text3111}</span>
          </div>
        </div>
        <div className="ranks-container13">
          <div className="ranks-container14">
            <span className="ranks-text21">{props.text4211}</span>
            <span className="ranks-text22">{props.text41111}</span>
          </div>
          <div className="ranks-container15">
            <span className="ranks-text23">{props.text33111}</span>
            <span className="ranks-text24">
              <span>DISCORD ROLE 4 </span>
              <br></br>
            </span>
            <span className="ranks-text27">{props.text31111}</span>
          </div>
        </div>
        <div className="ranks-container16">
          <div className="ranks-container17">
            <span className="ranks-text28">{props.text42111}</span>
            <span className="ranks-text29">{props.text411111}</span>
          </div>
          <div className="ranks-container18">
            <span className="ranks-text30">{props.text331111}</span>
            <span className="ranks-text31">
              <span>DISCORD ROLE 5 </span>
              <br></br>
            </span>
            <span className="ranks-text34">{props.text311111}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Ranks.defaultProps = {
  text4211: 'FIN WHALES',
  text41: '100% EARNIGNS',
  text411111: '10% EARNINGS',
  text41111: '25% EARNINGS',
  text33111: '25 WHLS SWAP',
  text4: 'MEGA WHALES',
  rootClassName: '',
  text42111: 'MEMBERS',
  text311: '75% DELEGATION',
  text31111: '25% DELEGATION',
  text411: '75% EARNINGS',
  text421: 'SPERM WHALES',
  text311111: '10% DELEGATION',
  text331111: '10 WHLS SWAP',
  text33: '100 WHLS SWAP',
  text4111: '50% EARNINGS',
  text42: 'BLUE WHALES',
  text3311: '50 WHLS SWAP',
  text3111: '50% DELEGATION',
  text31: '100% DELEGATION',
  text331: '75 WHLS SWAP',
}

Ranks.propTypes = {
  text4211: PropTypes.string,
  text41: PropTypes.string,
  text411111: PropTypes.string,
  text41111: PropTypes.string,
  text33111: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text42111: PropTypes.string,
  text311: PropTypes.string,
  text31111: PropTypes.string,
  text411: PropTypes.string,
  text421: PropTypes.string,
  text311111: PropTypes.string,
  text331111: PropTypes.string,
  text33: PropTypes.string,
  text4111: PropTypes.string,
  text42: PropTypes.string,
  text3311: PropTypes.string,
  text3111: PropTypes.string,
  text31: PropTypes.string,
  text331: PropTypes.string,
}

export default Ranks
