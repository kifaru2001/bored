import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { MotionAnimate } from "react-motion-animate";
import Mint from "../views/mint.tsx";

import "./hero.css";

const Hero = (props) => {
  return (
    <>
      <section className={`hero-hero ${props.rootClassName} `}>
        <div className="hero-hero-content">
          <div className="hero-header-container">
            <div className="hero-header">
              <div className="hero-container">
                <div className="hero-container1">
                  <h2 className="hero-heading">
                    <div
                      style={{
                        background: "#0000008a",
                        width: "1900px",
                        marginLeft: "-10%",
                        padding: "3%",
                      }}
                    >
                      <MotionAnimate
                        animation="scrollPosition"
                        xPos={[300, -760]}
                      >
                        <span className="hero-text">
                          Bored Whales Yacht Club{" "}
                        </span>
                      </MotionAnimate>
                    </div>
                    <div
                      style={{
                        background: "#ffffff8a",
                        width: "1900px",
                        marginLeft: "-10%",
                        padding: "3%",
                      }}
                    >
                      <MotionAnimate
                        animation="scrollPosition"
                        xPos={[-1500, -50]}
                      >
                        <span className="hero-text2">
                          INTRODUCING Season II
                        </span>
                      </MotionAnimate>
                    </div>
                    <br className="hero-text3"></br>
                  </h2>
                </div>
              </div>
            </div>
            <hr />

            <MotionAnimate animation="scrollOpacity">
              <p className="hero-caption">
                10000 Provably rare PFPS BORN ON CORE BLOCKCHAIN. SEASON II IS
                GOING TO EVOLVE INTO WILD THINGS WE AN NOT YET PREDICT.
                IT&apos;S UPON THE HOLDER TO DECIDE, DO YOU WANT TO TAKE YOUR
                WHALE ON A BUMPY RIDE AND BATTLE THE WAVES, OR DO YOU JUST WANT
                TO LET IT CHILL IN ITS COMFY BLOCK AND EARN WHLS REWADS.
                IRREGADLESS, YOU CAN SWIM FREE, IT&apos;S A BIG PERMISSIONLESS
                OCEAN JUST FOR US. BWYC AND WHALECARD HOLDERS WILL BE ADDED TO
                WHITELIST.
              </p>
            </MotionAnimate>
          </div>

          <Link to="/season2" className="hero-navlink button">
            <span className="hero-text4">
              {" "}
              <MotionAnimate
                animation="scrollOpacity"
                ease={[0.17, 0.67, 0.97, -0.48]}
                scrollPositions={[0.2, 0.5, 0.6, 0.8]}
              >
                ENTER SEASON II{" "}
              </MotionAnimate>
            </span>
          </Link>
          <a
            href="https://app.youngparrotnft.com/core/launchpads/bwyc"
            className="hero-navlink button"
          >
            <span className="hero-text4">
              {" "}
              <MotionAnimate
                animation="scrollOpacity"
                ease={[0.17, 0.67, 0.97, -0.48]}
                scrollPositions={[0.2, 0.5, 0.6, 0.8]}
              >
                ENTER SEASON I🦜{" "}
              </MotionAnimate>
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

Hero.defaultProps = {
  image_alt1: "image",
  image_src1: "a61da074-813d-4053-be61-2454ce5558e3",
  rootClassName: "",
  text: "JOIN THE CLUB",
  image_alt: "image",
  image_src: "67e8598e-9afd-48d5-8961-2321a2f49ed7",
  video_src:
    "https://presentation-website-assets.teleporthq.io/templates/togthr/togthr-video.mp4",
};

Hero.propTypes = {
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  video_src: PropTypes.string,
};

export default Hero;
