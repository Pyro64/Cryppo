import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import CryppoBusinessLanding from "./CryppoBusinessLanding";
import Header from "../UI/Header/Header";
import BusinessLk from "./BusinessLk";
import FooterContainer from "../UI/Footer/FooterContainer";
import BussinesAuthorization from "../Lk/BussinesAuthorization/BussinesAuthorization";
import BussinessRegistry from "../Lk/BussinessRegistry/BussinessRegistry";
import BusinessLandingContainer from "./BusinessLandingContainer";
import { UIContext } from "../Context/UIContext";
import { useEffect } from "react";

export default function CryppoBusiness(props) {
    const [uiContext, setUiContext] = useContext(UIContext);
    useEffect(() => {
        setUiContext({ ...uiContext, isBusiness: true, isWallet: false });
    }, []);
    return (
        <div className="page">
            <Header
                userInfo={props.userInfo}
                isBusiness={props.isBusiness}
                isLogin={props.isLogin}
                header={props.header}
                card={props.card}
                routeLk={props.routeLk}
                alert={props.alert}
                removeAlert={props.removeAlert}
                switchTheme={props.switchTheme}
                theme={props.theme}
            />
            <Routes>
                <Route path="/" element={<BusinessLandingContainer />} />
                <Route
                    path="lk/*"
                    element={
                        <BusinessLk
                            addCard={props.addCard}
                            isLogin={props.isLogin}
                        />
                    }
                />
                <Route
                    path="/entrance"
                    element={
                        <BussinesAuthorization
                            uiContext={uiContext}
                            LoginBusinessPostTC={props.LoginBusinessPostTC}
                        />
                    }
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
