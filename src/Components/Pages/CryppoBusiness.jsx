import React from "react";
import { Navigate, Route, Routes } from "react-router";
import CryppoBusinessLanding from "./CryppoBusinessLanding";
import Header from "../UI/Header/Header";
import FooterContainer from "../UI/Footer/FooterContainer";
import BussinesAuthorization from "../Lk/BussinesAuthorization/BussinesAuthorization";
import BussinessRegistry from "../Lk/BussinessRegistry/BussinessRegistry";
import BusinessLkContainer from "./BusinessLkContainer";
import BusinessLandingContainer from "./BusinessLandingContainer";

export default function CryppoBusiness(props) {
  // useEffect(() => {
  //   props.getCryppoBusinessThunkCreator();
  // }, [])
  return (
    <div className="page">
      <Header
        user={props.user}
        isLk={props.isLk}
        hasLk={props.hasLk}
        header={props.header}
        card={props.card}
        alert={props.alert}
        removeAlert={props.removeAlert}
      />
      <Routes>
        <Route path="/" element={<BusinessLandingContainer />} />
        <Route path="lk/*" element={<BusinessLkContainer />} />
        <Route
          path="/entrance"
          element={<BussinesAuthorization isLogin={props.isLogin} />}
        />
        <Route
          path="/registry"
          element={<BussinessRegistry isLogin={props.isLogin} />}
        />
      </Routes>
      <FooterContainer logo={props.logo} />
    </div>
  );
}
