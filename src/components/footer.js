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
                  href="https://gallery.boredwhalesyachtclub.org"
                  className="footer-text1"
                >
                  {props.text3}
                </a>
                <Link to="/" className="footer-navlink01">
                  <a
                    href="https://docs.boredwhalesyachtclub.org"
                    className="footer-text1"
                  >
                    DOCUMENTATION
                  </a>
                  <br className=""></br>
                </Link>
                <a
                  href="https://docs.boredwhalesyachtclub.org"
                  className="footer-text1"
                >
                  {props.text2}
                </a>
              </div>
            </div>
            <div className="footer-column1">
              <a
                href="https://marketplace.boredwhalesyachtclub.org"
                className="footer-text1"
              >
                {props.Header1}
              </a>
              <div className="footer-list1">
                <Link to="/" className="footer-navlink03">
                  {props.text8}
                </Link>

                <a
                  href="https://chatroom.boredwhalesyachtclub.org"
                  className="footer-text1"
                >
                  {props.text10}
                </a>
                <hr />
                <a
                  href="https://discord.com/invite/E2XhP33u3f"
                  className="footer-text1"
                >
                  {props.text4}
                </a>
                <Link
                  to="https://twitter.com/bwycdinals"
                  className="footer-navlink06"
                >
                  {props.text5}
                </Link>
                <Link
                  to="https://stake.boredwhalesyachtclub.org"
                  className="footer-navlink07"
                >
                  {props.text6}
                </Link>
                <Link
                  to="https://ordinals.boredwhalesyachtclub.org"
                  className="footer-navlink08"
                >
                  {props.text7}
                </Link>
                <Link to="/" className="footer-navlink09">
                  {props.text9}
                </Link>
              </div>
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
  text2: "WHITEPAPER V1",
  text8: "MARKETPLACE",
  text: "© 2023 BWYC - All rights reserved",
  text1: "BORED WHALES YACHT CLUB. evm + bitcoin DECENTRALIZED COMMUNITY",
  image_alt: "image",
  text10: "WHALES TOKEN",
  text3: "GALLERY V2",
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
