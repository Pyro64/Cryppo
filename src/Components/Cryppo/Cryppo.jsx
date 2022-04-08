import React, { useState } from "react";
import { Route, Routes } from "react-router";
import FooterContainer from "../Footer/FooterContainer";
import Header from '../Header/Header'
import CryppoLanding from "./CryppoLanding/CryppoLanding";
import CryppoLk from "./CryppoLk/CryppoLk";

export default function Cryppo(props) {
    return (
        <div>
            <Header logo={props.logo} btn={props.btn} login={props.login} isLogin={props.isLogin} />
            <Routes>
                <Route
                    path="/"
                    element={<CryppoLanding />}
                />
                <Route
                    path="/lk/*"
                    element={<CryppoLk />}
                />
            </Routes>
            <FooterContainer logo={props.logo} />
        </div>
    )
}
