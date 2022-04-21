import React from "react";
import { Route, Routes } from "react-router";
import CryppoLkMain from "./CryppoLkComponents/CryppoLkMain/CryppoLkMain";
import CryppoLkSettings from "./CryppoLkComponents/CryppoLkSettings/CryppoLkSettings";
import CryppoLkTranslation from "../CryppoLk/CryppoLkComponents/CryppoLkTranslation/CryppoLkTranslation";
import CryppoLkInvest from "./CryppoLkComponents/CryppoLkInvest/CryppoLkInvest";

export default function CryppoLk(props) {
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
          />
        }
      />
      <Route
        path="translations/*"
        element={<CryppoLkTranslation translations={props.translations} />}
      />
      <Route path="invest/*" element={<CryppoLkInvest tabs={props.tabs} />} />
      <Route path="settings/*" element={<CryppoLkSettings />} />
    </Routes>
  );
}
