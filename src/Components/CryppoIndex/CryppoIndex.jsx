import React, { useState } from "react";
import { Route, Routes } from "react-router";
import FooterContainer from "../Footer/FooterContainer";
import Header from '../Header/Header'
import CryppoIndexLanding from "./CryppoIndexLanding/CryppoIndexLanding";
import IndexLk from "../Lk/IndexLk/IndexLk";

export default function CryppoIndex(props) {
    return (
        <div>
            <Header logo={props.logo} btn={props.btn} login={props.login} isLogin={props.isLogin} user={props.user} />
            <Routes>
                <Route
                    index
                    element={<CryppoIndexLanding banner={props.banner} bannerIndex={props.bannerIndex}
                        addStep={props.addStep} step={props.step} suggestions={props.suggestions}
                        aboutData={props.aboutData} benefits={props.benefits} logo={props.logo} />}
                />
                <Route
                    path="/lk/*"
                    element={<IndexLk card={props.card} />}
                />
            </Routes>
            <FooterContainer logo={props.logo} />
        </div>
    )
}
