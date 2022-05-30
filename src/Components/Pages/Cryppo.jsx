import React from "react";
import { Navigate, Route, Routes } from "react-router";
import FooterContainer from "../UI/Footer/FooterContainer";
import Header from "../UI/Header/Header";
import CryppoLkContainer from "./CryppoLkContainer";
import CryppoAuthorization from "../Lk/CryppoAuthorization/CryppoAuthorization";
import CryppoRegistry from "../Lk/CryppoRegistry/CryppoRegistry";
import CryppoLanding from "./CryppoLanding";

export default function Cryppo(props) {
  // useEffect(() => {
  //   props.getCryppoThunkCreator()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  return (
    <div className="page">
      <Header
        logo={props.logo}
        btn={props.btn}
        login={props.login}
        isLogin={props.isLogin}
        user={props.user}
        nav={props.nav}
        router={props.router}
        isLk={props.isLk}
        hasLk={props.hasLk}
        isBusiness={false}
        card={props.card}
        alert={props.alert}
        removeAlert={props.removeAlert}
      />
      <Routes>
        <Route path="/" element={<CryppoLanding />} />
        <Route
          path="cryppo/lk/*"
          element={
            <CryppoLkContainer
              card={props.card}
              bankCard={props.bankCard}
              invest={props.invest}
              newCard={props.newCard}
              operationData={props.operationData}
              statistic={props.statistic}
              isLogin={props.isLogin}
              router={props.router}
            />
          }
        />
        <Route
          path="entrance"
          element={
            <CryppoAuthorization
                LoginWalletPostThunkCreator={props.LoginWalletPostThunkCreator}
              isLogin={props.isLogin}
            />
          }
        />
        <Route
          path="registry"
          element={
            <CryppoRegistry
                RegistrationWalletPostThunkCreator={props.RegistrationWalletPostThunkCreator}
              isLogin={props.isLogin}
            />
          }
        />
      </Routes>
      <FooterContainer logo={props.logo} />
    </div>
  );
}
