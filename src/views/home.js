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
import BWYC from "../views/BWYC(II).tsx";
import Page from "./page.tsx";

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

      <Hero rootClassName="hero-root-class-name"></Hero>
      <div id="stake">
        <Stake />
      </div>
      <Slider></Slider>
      <Objectives></Objectives>
      <Growth></Growth>
      <Experience></Experience>

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
