import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Footer from "../Footer/Footer";
import FooterContainer from "../Footer/FooterContainer";
import Header from '../Header/Header'
import CryppoIndexLanding from "./CryppoIndexLanding/CryppoIndexLanding";
import CryppoIndexLk from "./CryppoIndexLk/CryppoIndexLk";

export default function CryppoIndex(props) {
    return (
        <div>
            <Header logo={props.logo} btn={props.btn} login={props.login} isLogin={props.isLogin} />
            <Routes>
                <Route
                    path="/"
                    element={<CryppoIndexLanding banner={props.banner} bannerIndex={props.bannerIndex}
                        addStep={props.addStep} step={props.step} suggestions={props.suggestions}
                        aboutData={props.aboutData} benefits={props.benefits} logo={props.logo} />}
                />
                <Route
                    path="/lk/*"
                    element={<CryppoIndexLk />}
                />
            </Routes>
        </div>
    )
}
