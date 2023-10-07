import React from 'react'

import { Helmet } from 'react-helmet'

import NAVI from '../components/navi'
import Steps from '../components/steps'
import AppComponent from '../components/component'
import Footer from '../components/footer'
import './join.css'

const Join = (props) => {
  return (
    <div className="join-container">
      <Helmet>
        <title>Join - BWYC SEAON II</title>
        <meta
          name="description"
          content="A COLLECION OF 10000 PROVABLY RARE PFPS BORN ON CORE BLOCKCHAIN"
        />
        <meta property="og:title" content="Join - BWYC SEAON II" />
        <meta
          property="og:description"
          content="A COLLECION OF 10000 PROVABLY RARE PFPS BORN ON CORE BLOCKCHAIN"
        />
      </Helmet>
      <NAVI rootClassName="navi-root-class-name1"></NAVI>
      <div className="join-container1"></div>
      <Steps></Steps>
      <AppComponent></AppComponent>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Join
