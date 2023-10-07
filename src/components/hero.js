import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <section className={`hero-hero ${props.rootClassName} `}>
      <video
        src="https://bafybeigwa4vl5xexkc6xuluukiqvrwsetth2y2bnat64peqpcwlt4t7qru.ipfs.nftstorage.link/ipfs/bafybeigwa4vl5xexkc6xuluukiqvrwsetth2y2bnat64peqpcwlt4t7qru/START.mp4"
        loop
        muted
        preload="auto"
        autoPlay
        playsInline
        className="hero-video"
      ></video>
      <div className="hero-hero-content">
        <div className="hero-header-container">
          <div className="hero-header">
            <div className="hero-container">
              <div className="hero-container1">
                <h1 className="hero-heading">
                  <span className="hero-text">Bored Whales Yacht Club</span>
                  <br className="hero-text1"></br>
                  <span className="hero-text2">Season II</span>
                  <br className="hero-text3"></br>
                </h1>
              </div>
            </div>
          </div>
          <p className="hero-caption">
            10000 Provably rare PFPS BORN ON CORE CHAIN AS UNIQUE AS ITS OWNER!
            ITS ORIGINAL STATE IS NOTS ITS FINAL STATE. SEASON II IS GOING TO
            EVOLVE INTO WILD THINGS WE AN NOT YET PREDICT. IT&apos;S UPON THE
            HOLDER TO DECIDE, DO YOU WANT TO TAKE YOUR WHALE ON A BUMPY RIDE AND
            BATTLE THE WAVES, OR DO YOU JUST WANT TO LET IT CHILL ITS COMFY
            BLOCK AND EARN WHLS REWADS. IRREGADLESS, YOU CAN SWIM FREE,
            IT&apos;S A BIG PERMISSIONLESS WORLD JUST FOR US
          </p>
        </div>
        <img
          alt={props.image_alt}
          src="https://media0.giphy.com/media/xKsOaVawxyuv7e5t0J/giphy.gif?cid=ecf05e47xr14r475p5f67pok08zk6axq18b4l7iu0imt7nqq&amp;ep=v1_stickers_search&amp;rid=giphy.gif&amp;ct=s"
          className="hero-image"
        />
        <Link to="/join" className="hero-navlink button">
          <span className="hero-text4">{props.text}</span>
        </Link>
      </div>
    </section>
  )
}

Hero.defaultProps = {
  image_alt1: 'image',
  image_src1: 'a61da074-813d-4053-be61-2454ce5558e3',
  rootClassName: '',
  text: 'JOIN THE CLUB',
  image_alt: 'image',
  image_src: '67e8598e-9afd-48d5-8961-2321a2f49ed7',
  video_src:
    'https://presentation-website-assets.teleporthq.io/templates/togthr/togthr-video.mp4',
}

Hero.propTypes = {
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  video_src: PropTypes.string,
}

export default Hero
