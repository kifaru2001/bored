import React from "react";

import Script from "dangerous-html/react";
import { Helmet } from "react-helmet";

import Note from "../components/note";
import Hero from "../components/hero";
import Statistics from "../components/statistics";
import Slider from "../components/slider";
import Objectives from "../components/objectives";
import Growth from "../components/growth";
import Experience from "../components/experience";
import Create from "../components/create";
import Footer from "../components/footer";
import NAVI from "../components/navi";
import "./home.css";
import Stake from "./stake.tsx";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>BWYC SEASON II</title>
        <meta
          name="description"
          content="A COLLECION OF 10000 PROVABLY RARE PFPS BORN ON CORE BLOCKCHAIN"
        />
        <meta property="og:title" content="BWYC SEAON II" />
        <meta
          property="og:description"
          content="A COLLECION OF 10000 PROVABLY RARE PFPS BORN ON CORE BLOCKCHAIN"
        />
      </Helmet>
      <Note></Note>
      <div></div>
      <Hero rootClassName="hero-root-class-name"></Hero>
      <div id="mint" style={{ height: "auto" }}>
        <React.Fragment>
          <iframe
            src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0xF6C2584850Fd1F50fc979F72888Fb67CFa39a2C2&chain=%7B%22name%22%3A%22Core+Blockchain+Mainnet%22%2C%22chain%22%3A%22Core%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fcore-blockchain.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Core+Blockchain+Native+Token%22%2C%22symbol%22%3A%22CORE%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22core%22%2C%22chainId%22%3A1116%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22core-blockchain%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmeTQaBCkpbsxNNWTpoNrMsnwnAEf1wYTcn7CiiZGfUXD2%22%2C%22width%22%3A200%2C%22height%22%3A217%2C%22format%22%3A%22png%22%7D%7D&clientId=678d5b0199cde588796872ea22804505&theme=dark&primaryColor=blue"
            width="100%"
            height="600px"
            style={{
              border: "2px solid gray",
              borderRadius: "16px",
              backgroundColor: "gray",
            }}
          />
        </React.Fragment>
      </div>
      <div id="stake" style={{ height: "100%" }}>
        <Stake />
      </div>
      <Create></Create>
      <Footer></Footer>
      <div>
        <div className="home-container2">
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
      <NAVI rootClassName="navi-root-class-name"></NAVI>
    </div>
  );
};

export default Home;
