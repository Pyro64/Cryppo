import React from 'react'
import {Route, Routes} from "react-router";
import CryppoBusinessLanding from './CryppoBusinessLanding'
import Header from '../UI/Header/Header'
import FooterContainer from '../UI/Footer/FooterContainer'
import BussinesEntrance from "../Lk/BusinessEntrance/BussinesEntrance";
import BusinessLkContainer from './BusinessLkContainer'

export default function CryppoBusiness(props) {
    // useEffect(() => {
    //   props.getCryppoBusinessThunkCreator();
    // }, [])
    return (
        <div>
            <Header router={props.router} logo={props.logo} btn={props.btn} login={props.login} isLogin={props.isLogin}
                    user={props.user} nav={props.nav} isLk={props.isLk} hasLk={props.hasLk}/>
            <Routes>
                <Route
                    path="/"
                    element={<CryppoBusinessLanding appIcon={props.appIcon} description={props.description}
                                                    whoSuits={props.whoSuits} about={props.about}
                                                    security={props.security}
                                                    faq={props.faq} connectionList={props.connectionList}
                                                    banner={props.banner} logo={props.logo}/>}
                />
                <Route
                    path="lk/*"
                    element={<BusinessLkContainer />}
                />
                <Route
                    path="/entrance"
                    element={<BussinesEntrance/>}
                >
                </Route>
            </Routes>
            <FooterContainer logo={props.logo}/>
        </div>
    )
}
