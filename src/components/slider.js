import React from "react";

import PropTypes from "prop-types";
import { MotionAnimate } from "react-motion-animate";

import "./slider.css";

const Slider = (props) => {
  return (
    <section className="slider-slider">
      <div className="slider-header">
        <h2 className="slider-heading">
          <div
            style={{
              background: "#000",
              width: "1900px",
              marginLeft: "-20%",
              padding: "1%",
            }}
          >
            <MotionAnimate animation="scrollPosition" xPos={[1400, -600]}>
              <h4 className="slider-text">SEASON II IS NEXT-LEVEL GENIUS</h4>
            </MotionAnimate>
          </div>
          <div
            style={{
              background: "#ffffff8a",
              width: "1900px",
              marginLeft: "-20%",
              padding: "1%",
            }}
          >
            <MotionAnimate animation="scrollPosition" xPos={[-200, 500]}>
              <span>
                {" "}
                BECAUSE WHALES BELONG WITH OCEAN
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </MotionAnimate>
          </div>
          <div
            style={{
              background: "#000",
              width: "1900px",
              marginLeft: "-20%",
              padding: "1%",
            }}
          >
            <MotionAnimate animation="scrollPosition" xPos={[550, -400]}>
              <span className="slider-text2">
                AND THE OCEAN BELONGS WITH THE WHALES
              </span>
            </MotionAnimate>
          </div>
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
