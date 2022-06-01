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
  debugger;
  return (
    <div className="page">
      <Header
        user={props.user}
        isLk={props.isLk}
        hasLk={props.hasLk}
        header={props.header}
        isLogin={props.isLogin}
        card={props.card}
        routerLk={props.routerLk}
        alert={props.alert}
        removeAlert={props.removeAlert}
        routeLk={props.routeLk}
        switchTheme={props.switchTheme}
        theme={props.theme}
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
