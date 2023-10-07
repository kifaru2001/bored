import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <div className="component-pricing">
        <div className="component-container1">
          <div className="component-pricing-card">
            <span className="component-text">{props.text}</span>
            <div className="component-container2">
              <span className="component-text01">{props.text3}</span>
              <span className="component-text02">
                <span>100+</span>
                <br></br>
              </span>
            </div>
            <div className="component-container3">
              <span className="component-text05">{props.text4}</span>
              <span className="component-text06">{props.text5}</span>
              <span className="component-text07">{props.text6}</span>
              <span className="component-text08">{props.text7}</span>
            </div>
            <button className="component-button button">{props.button}</button>
          </div>
          <div className="component-pricing-card1">
            <span className="component-text09">{props.text1}</span>
            <div className="component-container4">
              <span className="component-text10">{props.text8}</span>
              <span className="component-text11">
                <span>50+</span>
                <br></br>
              </span>
            </div>
            <div className="component-container5">
              <span className="component-text14">{props.text9}</span>
              <span className="component-text15">{props.text10}</span>
              <span className="component-text16">{props.text11}</span>
              <span className="component-text17">{props.text12}</span>
            </div>
            <button className="component-button1 button">
              {props.button1}
            </button>
          </div>
          <div className="component-pricing-card2">
            <span className="component-text18">{props.text2}</span>
            <div className="component-container6">
              <span className="component-text19">{props.text13}</span>
              <span className="component-text20">{props.text14}</span>
            </div>
            <div className="component-container7">
              <span className="component-text21">{props.text15}</span>
              <span className="component-text22">{props.text16}</span>
              <span className="component-text23">{props.text17}</span>
            </div>
            <button className="component-button2 button">
              <span>
                <span className="component-text25">VALIDATE</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  text: 'BLUE WHALES',
  button: 'VALIDATE',
  text1: 'SPERM WHALES',
  button1: 'VALIDATE',
  text2: 'FIN WHALES',
  text3: 'NFTS ',
  text4: '✔ 100% DELEGATION POWER',
  text5: '✔ @BLU DISCORD ROLE',
  text6: '✔ 100% REWARDS',
  text7: '✔ MULTI-WRAP TOKENS',
  text8: 'NFTS ',
  text9: '✔ 50% delegation power',
  text10: '✔ @SPERMWHALE DISCORD ROLE',
  text11: '✔ 75% REWARDS',
  text12: '✔ MULTI-WRAP TOKESN',
  text13: 'NFTS ',
  text14: '5+',
  text15: '✔ 10% DELEGATION POWER',
  text16: '✔ @BOREDWHale role',
  text17: '✔ 50% rewards',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  button: PropTypes.string,
  text1: PropTypes.string,
  button1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text11: PropTypes.string,
  text12: PropTypes.string,
  text13: PropTypes.string,
  text14: PropTypes.string,
  text15: PropTypes.string,
  text16: PropTypes.string,
  text17: PropTypes.string,
}

export default AppComponent
