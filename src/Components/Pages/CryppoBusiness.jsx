import React from "react";
import { Navigate, Route, Routes } from "react-router";
import CryppoBusinessLanding from "./CryppoBusinessLanding";
import Header from "../UI/Header/Header";
import FooterContainer from "../UI/Footer/FooterContainer";
import BussinesAuthorization from "../Lk/BussinesAuthorization/BussinesAuthorization";
import BussinessRegistry from "../Lk/BussinessRegistry/BussinessRegistry";
import BusinessLkContainer from "./BusinessLkContainer";

export default function CryppoBusiness(props) {
  // useEffect(() => {
  //   props.getCryppoBusinessThunkCreator();
  // }, [])
  return (
    <div className="page">
      <Header
        router={props.router}
        logo={props.logo}
        btn={props.btn}
        login={props.login}
        isLogin={props.isLogin}
        user={props.user}
        nav={props.nav}
        isLk={props.isLk}
        hasLk={props.hasLk}
        isBusiness={true}
        card={props.card}
        alert={props.alert}
        removeAlert={props.removeAlert}
      />
      <Routes>
        <Route
          path="/"
          element={
            <CryppoBusinessLanding
              appIcon={props.appIcon}
              description={props.description}
              whoSuits={props.whoSuits}
              about={props.about}
              security={props.security}
              faq={props.faq}
              connectionList={props.connectionList}
              banner={props.banner}
              logo={props.logo}
            />
          }
        />
        <Route path="lk/*" element={<BusinessLkContainer />} />
        <Route
          path="/entrance"
          element={
            <BussinesAuthorization
              loginThunkCreator={props.loginThunkCreator}
              isLogin={props.isLogin}
            />
          }
        />
        <Route
          path="/registry"
          element={
            <BussinessRegistry
              registryThunkCreator={props.registryThunkCreator}
              isLogin={props.isLogin}
            />
          }
        />
      </Routes>
      <FooterContainer logo={props.logo} />
    </div>
  );
}
