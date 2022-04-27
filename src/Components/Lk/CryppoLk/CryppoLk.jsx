import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import CryppoLkMain from "./CryppoLkComponents/CryppoLkMain/CryppoLkMain";
import CryppoLkSettings from "./CryppoLkComponents/CryppoLkSettings/CryppoLkSettings";
import CryppoLkTranslation from "../CryppoLk/CryppoLkComponents/CryppoLkTranslation/CryppoLkTranslation";
import CryppoLkInvest from "./CryppoLkComponents/CryppoLkInvest/CryppoLkInvest";

export default function CryppoLk(props) {
  // const get = () => props.getCryppoLkThunkCreator();
  // useEffect(() => {
  //   const interval = setInterval(get, 5000);
  // }, []);
  // alert(props.isLogin)
  // if (props.isLogin === false) return <Navigate to={'/auth'} />
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CryppoLkMain
            card={props.card}
            statistic={props.statistic}
            bankCard={props.bankCard}
            invest={props.invest}
            newCard={props.newCard}
            operationData={props.operationData}
            news={props.news}
            currency={props.currency}
            tabs={props.tabs}
            setModal={props.setModal}
            operationModal={props.operationModal}
            isModal={props.isModal}
            switchModal={props.switchModal}
            chartTextData={props.chartTextData}
          />
        }
      />
      <Route
        path="translations/*"
        element={<CryppoLkTranslation translations={props.translations} />}
      />
      <Route path="invest/*" element={<CryppoLkInvest tabs={props.tabs} composition={props.composition} />} />
      <Route
        path="settings/*"
        element={<CryppoLkSettings />}
        composition={props.composition}
      />
    </Routes>
  );
}
