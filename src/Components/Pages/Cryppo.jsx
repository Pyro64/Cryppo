import React, {useState, useEffect} from "react";
import {Route, Routes} from "react-router";
import FooterContainer from "../UI/Footer/FooterContainer";
import Header from "../UI/Header/Header";
import CryppoLanding from "../Cryppo/CryppoLanding/CryppoLanding";
import CryppoLkContainer from "./CryppoLkContainer";

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
                <Route path="/" element={<CryppoLanding logo={props.logo}/>}/>
                <Route
                    path="/cryppolk"
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
            <FooterContainer logo={props.logo}/>
        </div>
    );
}
