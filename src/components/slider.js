import React from "react";

import PropTypes from "prop-types";
import { MotionAnimate } from "react-motion-animate";

import "./slider.css";

const Slider = (props) => {
  return (
    <section className="slider-slider">
      <div className="slider-header">
        <h2 className="slider-heading">
          <MotionAnimate animation="scrollPosition" xPos={[1400, -600]}>
            <h4 className="slider-text">WHALES SEASON II</h4>
          </MotionAnimate>
          <MotionAnimate animation="scrollPosition" xPos={[-700, 500]}>
            <span>
              {" "}
              IS NEXT LEVEL
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </MotionAnimate>
          <MotionAnimate animation="scrollPosition" xPos={[350, -400]}>
            <span className="slider-text2">GENIUS</span>
          </MotionAnimate>
        </h2>
        <hr />
      </div>
      <div className="slider-selector">
        <p className="slider-caption">
          <MotionAnimate animation="scrollFadeIn" scrollPositions={[0.2, 0.9]}>
            <span className="slider-text3">
              Every piece crafted with state of the art AI programming to
              generate a wonderful digital art. SEASON II HAS NO ROADMAP. WE
              JUST WANT TO GET BORED ENOUGHT.
            </span>
          </MotionAnimate>
          <br></br>
        </p>
        <MotionAnimate animation="scrollFadeIn" scrollPositions={[0.2, 0.9]}>
          <p className="slider-caption1">
            SEASON II IS PRICELESS, EVERY PIECE A STATE OF THE ART BUILT WITH AI
            AND GODLIKE CREATIVITY.
          </p>
        </MotionAnimate>
      </div>
    </section>
  );
};

Slider.defaultProps = {
  Caption:
    "SEASON II IS SO COOL WE HAVE OVER 100 TRAITS FOR EVERY NFT. SEASON II NFT ON CORE WILL HAVE BADGES AND THEY CHANGE WHEN THE OWNER CROSSES CHAINS.",
};

Slider.propTypes = {
  Caption: PropTypes.string,
};

export default Slider;
