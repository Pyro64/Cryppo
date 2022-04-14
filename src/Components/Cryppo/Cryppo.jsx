import React, { useState } from "react";
import { Route, Routes } from "react-router";
import FooterContainer from "../Footer/FooterContainer";
import Header from "../Header/Header";
import CryppoLanding from "./CryppoLanding/CryppoLanding";
import CryppoLk from "../Lk/CryppoLk/CryppoLk";

export default function Cryppo(props) {
  return (
    <div>
      <Header
        logo={props.logo}
        btn={props.btn}
        login={props.login}
        isLogin={props.isLogin}
        user={props.user}
        nav={props.nav}
      />
      <Routes>
        <Route path="/" element={<CryppoLanding logo={props.logo} />} />
        <Route
          path="/lk/*"
          element={
            <CryppoLk
              card={props.card}
              bankCard={props.bankCard}
              invest={props.invest}
              newCard={props.newCard}
              operationData={props.operationData}
              statistic={props.statistic}
            />
          }
        />
      </Routes>
      <FooterContainer logo={props.logo} />
    </div>
  );
}
