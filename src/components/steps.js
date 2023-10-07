import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-steps">
      <h1 className="steps-text">{props.heading}</h1>
      <span className="steps-text01">{props.text}</span>
      <div className="steps-container">
        <div className="steps-step">
          <div className="steps-container01">
            <div className="steps-line"></div>
            <div className="steps-container02">
              <svg viewBox="0 0 1024 1024" className="steps-icon">
                <path d="M864.626 473.162c-65.754-183.44-205.11-348.15-352.626-473.162-147.516 125.012-286.87 289.722-352.626 473.162-40.664 113.436-44.682 236.562 12.584 345.4 65.846 125.14 198.632 205.438 340.042 205.438s274.196-80.298 340.040-205.44c57.27-108.838 53.25-231.962 12.586-345.398zM738.764 758.956c-43.802 83.252-132.812 137.044-226.764 137.044-55.12 0-108.524-18.536-152.112-50.652 13.242 1.724 26.632 2.652 40.112 2.652 117.426 0 228.668-67.214 283.402-171.242 44.878-85.292 40.978-173.848 23.882-244.338 14.558 28.15 26.906 56.198 36.848 83.932 22.606 63.062 40.024 156.34-5.368 242.604z"></path>
              </svg>
            </div>
            <div className="steps-line1"></div>
          </div>
          <div className="steps-container03">
            <h1 className="steps-text02">{props.heading1}</h1>
            <span className="steps-text03">
              <span>
                CLAIM ANY OF OUR COLLECTION ON ANY CHAIN WE HAVE LISTED
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="steps-step1">
          <div className="steps-container04">
            <div className="steps-line2"></div>
            <div className="steps-container05">
              <svg viewBox="0 0 1024 1024" className="steps-icon2">
                <path d="M682 576q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 682v-340h426v340h-426zM896 768v42q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596q34 0 60 26t26 60v42h-384q-36 0-61 25t-25 61v340q0 36 25 61t61 25h384z"></path>
              </svg>
            </div>
            <div className="steps-line3"></div>
          </div>
          <div className="steps-container06">
            <h1 className="steps-text06">{props.heading2}</h1>
            <span className="steps-text07">
              <span>login with web3 wallet</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="steps-step2">
          <div className="steps-container07">
            <div className="steps-line4"></div>
            <div className="steps-container08">
              <svg viewBox="0 0 1024 1024" className="steps-icon4">
                <path d="M512 0c282.857 0 512 229.143 512 512 0 281.143-228 512-512 512-283.429 0-512-230.286-512-512 0-282.857 229.143-512 512-512zM865.714 772c53.143-73.143 85.143-162.857 85.143-260 0-241.714-197.143-438.857-438.857-438.857s-438.857 197.143-438.857 438.857c0 97.143 32 186.857 85.143 260 20.571-102.286 70.286-186.857 174.857-186.857 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c104.571 0 154.286 84.571 174.857 186.857zM731.429 402.286c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429z"></path>
              </svg>
            </div>
            <div className="steps-line5"></div>
          </div>
          <div className="steps-container09">
            <h1 className="steps-text10">{props.heading3}</h1>
            <span className="steps-text11">
              <span className="steps-text12">
                USE YOUR WALLET TO AUTHENTICATE WITH THE NEWTWORK
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="steps-step3">
          <div className="steps-container10">
            <div className="steps-line6"></div>
            <div className="steps-container11">
              <svg viewBox="0 0 1024 1024" className="steps-icon6">
                <path d="M960 608l-288 288-96-96-64 64 160 160 352-352z"></path>
                <path d="M448 768h320v-115.128c-67.22-39.2-156.308-66.11-256-74.26v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h448v-64z"></path>
              </svg>
            </div>
            <div className="steps-line7"></div>
          </div>
          <div className="steps-container12">
            <h1 className="steps-text14">{props.heading4}</h1>
            <span className="steps-text15">
              <span className="steps-text16">
                WE WILL CHECK IF YOU HOLD A SEASON II NFT AND YOU WILL GET
                AUTOMATIC ACCESS TO UTILITIES
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  heading: 'JOIN THE WHALES',
  text: 'Just a few BLOCKS into joining the MOST DECENTRALIZED NFT COMMUNITY ON COREDAO AND BITCOIN',
  heading1: 'MINT/BUY',
  heading2: 'CONNECT',
  heading3: 'SIGN',
  heading4: 'access granted',
}

Steps.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  heading3: PropTypes.string,
  heading4: PropTypes.string,
}

export default Steps
