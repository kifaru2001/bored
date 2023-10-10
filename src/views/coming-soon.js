import React from "react";

import { Helmet } from "react-helmet";

import NAVI from "../components/navi";
import "./coming-soon.css";

const ComingSoon = (props) => {
  return (
    <div className="coming-soon-container">
      <Helmet>
        <title>Coming-soon - BWYC SEAON II</title>
        <meta
          name="description"
          content="A COLLECION OF 10000 PROVABLY RARE PFPS BORN ON CORE BLOCKCHAIN"
        />
        <meta property="og:title" content="Coming-soon - BWYC SEAON II" />
        <meta
          property="og:description"
          content="A COLLECION OF 10000 PROVABLY RARE PFPS BORN ON CORE BLOCKCHAIN"
        />
      </Helmet>
      <video
        src="https://bafybeigwa4vl5xexkc6xuluukiqvrwsetth2y2bnat64peqpcwlt4t7qru.ipfs.nftstorage.link/ipfs/bafybeigwa4vl5xexkc6xuluukiqvrwsetth2y2bnat64peqpcwlt4t7qru/START.mp4"
        loop
        muted
        preload="auto"
        autoPlay
        playsInline
        className="coming-soon-video"
      ></video>

      <div className="coming-soon-container1">
        <h4 style={{ textAlign: "center" }} className="coming-soon-heading">
          COMING SOON!
        </h4>
      </div>
    </div>
  );
};

export default ComingSoon;
