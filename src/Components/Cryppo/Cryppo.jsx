import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import FooterContainer from "../Footer/FooterContainer";
import Header from "../Header/Header";
import CryppoLanding from "./CryppoLanding/CryppoLanding";
import CryppoLkContainer from "../Lk/CryppoLk/CryppoLkContainer";

export default function Cryppo(props) {
  // useEffect(() => {
  //   props.getCryppoThunkCreator()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
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
        <Route path="/*" element={<CryppoLanding logo={props.logo} />} />
        <Route
          path="lk/*"
          element={
            <CryppoLkContainer
              card={props.card}
              bankCard={props.bankCard}
              invest={props.invest}
              newCard={props.newCard}
              operationData={props.operationData}
              statistic={props.statistic}
              isLogin={props.isLogin}
            />
          }
        />
      </Routes>
      <FooterContainer logo={props.logo} />
    </div>
  );
}
