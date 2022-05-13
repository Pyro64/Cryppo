import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import FooterContainer from "../UI/Footer/FooterContainer";
import Header from '../UI/Header/Header'
import CryppoInvestLanding from "./CryppoInvestLanding";
import IndexLk from "../Lk/IndexLk/IndexLk";

export default function CryppoInvest(props) {
    // useEffect(() => {
    //     props.getCryppoIndexThunkCreator();
    // }, [])
    return (
        <div>
            <Header logo={props.logo} btn={props.btn} login={props.login} isLogin={props.isLogin} user={props.user} nav={props.nav} />
            <Routes>
                <Route
                    path="/"
                    element={<CryppoInvestLanding banner={props.banner} bannerIndex={props.bannerIndex}
                                                  addStep={props.addStep} step={props.step} suggestions={props.suggestions}
                                                  aboutDataIndex={props.aboutDataIndex} benefits={props.benefits} logo={props.logo} />}
                />
            </Routes>
            <FooterContainer logo={props.logo} />
        </div>
    )
}
