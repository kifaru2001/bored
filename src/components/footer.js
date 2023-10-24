import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./footer.css";

const Footer = (props) => {
  return (
    <div className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-branding">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="footer-image"
            />
            <span className="footer-text">{props.text1}</span>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <span className="footer-header">{props.Header}</span>
              <div className="footer-list">
                <a
                  href="https://twitter.com/boredworkshop"
                  className="footer-text1"
                >
                  {props.text3}
                </a>
                <hr />
                <a
                  href="https://discord.com/invite/E2XhP33u3f"
                  className="footer-text1"
                >
                  DISCORD
                </a>
                <br className=""></br>

                <a
                  href="https://marketplace.boredwhalesyachtclub.org"
                  className="footer-text1"
                >
                  {props.text2}
                </a>
              </div>
            </div>
            <div className="footer-column1">
              <div className="footer-list1"></div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-text3">{props.text}</span>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  text6: "TWITTER",
  text9: "ORDINALS",
  text2: "MARKETPLACE",
  text8: "MARKETPLACE",
  text: "© 2023 BWYC - All rights reserved",
  text1: "BORED WHALES YACHT CLUB. evm + bitcoin DECENTRALIZED COMMUNITY",
  image_alt: "image",
  text10: "WHALES TOKEN",
  text3: "TWITTER",
  Header1: "UTILITY",
  rootClassName: "",
  text4: "CHATROOM",
  Header: "Company",
  text7: "STAKING",
  text5: "DISCORD",
  image_src: "/favicon-800w.png",
};

Footer.propTypes = {
  text6: PropTypes.string,
  text9: PropTypes.string,
  text2: PropTypes.string,
  text8: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  text10: PropTypes.string,
  text3: PropTypes.string,
  Header1: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  Header: PropTypes.string,
  text7: PropTypes.string,
  text5: PropTypes.string,
  image_src: PropTypes.string,
};

export default Footer;
