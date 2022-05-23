import React, { useEffect, useState } from "react";
import FooterContainer from "../UI/Footer/FooterContainer";
import Header from "../UI/Header/Header";
import Banner from "../UI/Banner/Banner";
import Suggestions from "../Landing/Suggestions/Suggestions";
import AboutIndex from "../Landing/AboutIndex/AboutIndex";
import BenefitsIndex from "../Landing/BenefitsIndex/BenefitsIndex";
import StatisticIndex from "../Landing/StatisticIndex/StatisticIndex";
import TechnologiesIndex from "../Landing/TechnologiesIndex/TechnologiesIndex";

export default function CryppoInvest(props) {
  // useEffect(() => {
  //     props.getCryppoIndexThunkCreator();
  // }, [])
  const isEntrance = false;
  return (
    <div className="page">
      <Header
        isEntrance={isEntrance}
        logo={props.logo}
        btn={props.btn}
        login={props.login}
        isLogin={props.isLogin}
        user={props.user}
        nav={props.nav}
      />
      <div className="main">
        <Banner
          page="index"
          banner={props.banner}
          bannerIndex={props.bannerIndex}
          addStep={props.addStep}
          step={props.step}
        />
        <Suggestions suggestions={props.suggestions} />
        <AboutIndex aboutDataIndex={props.aboutDataIndex} />
        <BenefitsIndex benefits={props.benefits} />
        <StatisticIndex />
        <TechnologiesIndex />
      </div>
      <FooterContainer logo={props.logo} />
    </div>
  );
}
