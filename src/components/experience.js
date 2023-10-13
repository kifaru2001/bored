import React from "react";

import PropTypes from "prop-types";

import "./experience.css";
import { MotionAnimate } from "react-motion-animate";

const Experience = (props) => {
  return (
    <MotionAnimate
      delay={0.4}
      speed={2}
      ease={[0.75, 0.45, 0.53, 0.94]}
      reset={true}
    >
      <section className="experience-experience">
        <div className="experience-container">
          <MotionAnimate animation="fadeInUp" reset={true}>
            <img
              alt={props.image_alt}
              src="https://bafybeieszztaslkoepdodf4qalodg7ieqlezf47mryg2a5yxlpw3qbp4zu.ipfs.nftstorage.link/ipfs/bafybeieszztaslkoepdodf4qalodg7ieqlezf47mryg2a5yxlpw3qbp4zu/vhfkm.png"
              className="experience-image"
            />
          </MotionAnimate>
          <div className="experience-images"></div>
        </div>
        <div className="experience-content">
          <div className="experience-header">
            <div className="experience-header-container">
              <div className="experience-header1">
                <MotionAnimate animation="scrollFadeOut">
                  <h2 className="experience-heading">{props.Heading}</h2>
                </MotionAnimate>
              </div>
              <p className="experience-caption">{props.Caption}</p>
            </div>
            <MotionAnimate
              animation="fadeInUp"
              reset={true}
              distance={200}
              delay={1}
              speed={1}
            >
              <div className="experience-checkmarks">
                <div className="experience-check">
                  <div className="experience-mark">
                    <svg viewBox="0 0 1024 1024" className="experience-icon">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>

                  <span className="experience-text">{props.text}</span>
                </div>

                <div className="experience-check1">
                  <div className="experience-mark1">
                    <svg viewBox="0 0 1024 1024" className="experience-icon2">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="experience-text1">{props.text1}</span>
                </div>
                <div className="experience-check2">
                  <div className="experience-mark2">
                    <svg viewBox="0 0 1024 1024" className="experience-icon4">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="experience-text2">{props.text2}</span>
                </div>
                <div className="experience-check3">
                  <div className="experience-mark3">
                    <svg viewBox="0 0 1024 1024" className="experience-icon6">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="experience-text3">{props.text3}</span>
                </div>
              </div>
            </MotionAnimate>
          </div>
        </div>
      </section>
    </MotionAnimate>
  );
};

Experience.defaultProps = {
  text2: "MORE P2E GAMES",
  image_src:
    "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGRlY2VudHJhbGl6ZWR8ZW58MHx8fHwxNjk2NTEwMTI5fDA&ixlib=rb-4.0.3&w=600",
  text: "DECENTRALIZED CHATROOM",
  text1: "WHLS MARKETPLACE",
  text3: "STAKING SEASON II",
  Caption: "We are always bored! that means, stay tuned for some fun!",
  Heading: "In a permissionless World, WHALES CAN SWIM FREE.",
  image_alt: "image",
};

Experience.propTypes = {
  text2: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  Caption: PropTypes.string,
  Heading: PropTypes.string,
  image_alt: PropTypes.string,
};

export default Experience;
