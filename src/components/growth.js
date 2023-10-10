import React from "react";

import PropTypes from "prop-types";
import { MotionAnimate } from "react-motion-animate";

import "./growth.css";

const Growth = (props) => {
  return (
    <section className="growth-growth">
      <div className="growth-content">
        <div className="growth-header">
          <div className="growth-header1">
            <h2 className="growth-heading">
              <MotionAnimate
                animation="fadeInUp"
                reset={true}
                distance={200}
                delay={1}
                speed={1}
              >
                <span className="growth-text">A NEW DAWN OF NFTs. </span>
              </MotionAnimate>
              <br></br>
            </h2>
          </div>
          <p className="growth-caption">{props.Caption}</p>
          <p className="growth-caption1">{props.Caption1}</p>
        </div>
        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={1}
          speed={1}
        >
          <div className="growth-testimonial">
            <div className="growth-content1">
              <span className="growth-text02">{props.text}</span>
              <p className="growth-text03">{props.text1}</p>
            </div>
            <div className="growth-information">
              <div className="growth-author">
                <img
                  alt={props.Icon_alt}
                  src={props.Icon_src}
                  className="growth-icon"
                />
                <span className="growth-name">{props.Name}</span>
              </div>
              <img
                alt={props.From_alt}
                src={props.From_src}
                className="growth-from"
              />
            </div>
          </div>
        </MotionAnimate>
        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={1}
          speed={1}
        >
          <div className="growth-testimonial1">
            <div className="growth-content2">
              <span className="growth-text04">{props.text2}</span>
              <p className="growth-text05">
                <span className="growth-text06">Replying to </span>
                <span className="growth-text07">@NFTAnderson</span>
                <br></br>
                <br className="growth-text09"></br>
                <span className="growth-text10">
                  BWYC NFTs + utilities #Bitcoin  hash powered NFTs without
                  affecting or endangering the Bitcoin network’s. Built on top
                  of Core chain
                </span>
                <span className="growth-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span className="growth-text13">@Coredao_Org</span>
                <br></br>
                <br className="growth-text15"></br>
              </p>
            </div>
            <div className="growth-information1">
              <div className="growth-author1">
                <img
                  alt={props.Icon_alt1}
                  src={props.Icon_src1}
                  className="growth-icon1"
                />
                <span className="growth-name1">{props.Name1}</span>
              </div>
              <img
                alt={props.From_alt1}
                src={props.From_src1}
                className="growth-from1"
              />
            </div>
          </div>
        </MotionAnimate>
      </div>

      <div className="growth-container">
        <div className="growth-images">
          <div className="growth-square"></div>

          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="growth-image"
          />
        </div>
        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={1}
          speed={1}
        >
          <img
            alt={props.image_alt}
            src="https://bafybeiaqg3jxazgesaftbxetglihsbcywklkmqzpgif53627ia5oal2oxi.ipfs.nftstorage.link/ipfs/bafybeiaqg3jxazgesaftbxetglihsbcywklkmqzpgif53627ia5oal2oxi/adhsilzs%3Bl.png"
            className="growth-image1"
          />
        </MotionAnimate>
      </div>
    </section>
  );
};

Growth.defaultProps = {
  Name: "C ANGLO",
  Icon_alt1: "image",
  image_alt: "image",
  text2: "TWEETS",
  From_alt1: "image",
  image_alt1: "image",
  Icon_alt: "image",
  Icon_src1: "/bemf9crh_400x400-200h.jpg",
  Caption1:
    "SEASON II INTRODUCES SWAP FOR $WHLS. THE FLOOR PRICE OF SEASON 2 NFT IS 1 WHLS. MEMBERS CAN SWAP FOR WHLS WITH FLOOR PRICE CHANGE. SEASON II CAN ALSO BE STAKED DURING $WHLS SECOND HALVING.  ",
  image_src: "/m%20(218)-600w.png",
  From_alt: "image",
  From_src: "/dsdz-200h.png",
  text1:
    '"Keep watch  WHALE 🐋   is coming to TAKE IT PLACE #WHALE SEASON II  $WHLS 💎  🚀🚀🚀"',
  Caption:
    "WE ARE GOING TO REVOLUTIONALIZE THE NFT WORLD! WE ARE NOT JUST BUILDING, WE ARE INVENTORS, ENGINEERS OF NATURE AND ART. WE ARE WHALES.",
  Name1: "SquishyNeon | HardCOREs",
  From_src1: "/dsdz-200h.png",
  text: "TWEETS",
  image_src1: "/whls-500w.gif",
  Icon_src: "/external/e-2ktjdw_400x400-200h.jpg",
};

Growth.propTypes = {
  Name: PropTypes.string,
  Icon_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  text2: PropTypes.string,
  From_alt1: PropTypes.string,
  image_alt1: PropTypes.string,
  Icon_alt: PropTypes.string,
  Icon_src1: PropTypes.string,
  Caption1: PropTypes.string,
  image_src: PropTypes.string,
  From_alt: PropTypes.string,
  From_src: PropTypes.string,
  text1: PropTypes.string,
  Caption: PropTypes.string,
  Name1: PropTypes.string,
  From_src1: PropTypes.string,
  text: PropTypes.string,
  image_src1: PropTypes.string,
  Icon_src: PropTypes.string,
};

export default Growth;
