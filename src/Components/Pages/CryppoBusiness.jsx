import React, { useEffect } from 'react'
import { Route, Routes } from "react-router";
import CryppoBusinessLanding from './CryppoBusinessLanding'
import Header from '../UI/Header/Header'
import FooterContainer from '../UI/Footer/FooterContainer'
import EntranceBussines from "../Lk/BusinessLk/EntranceBusiness/EntranceBussines";
export default function CryppoBusiness(props) {
  // useEffect(() => {
  //   props.getCryppoBusinessThunkCreator();
  // }, [])
  return (
    <div>
      <Header logo={props.logo} btn={props.btn} login={props.login} isLogin={props.isLogin} user={props.user} nav={props.nav} />
      <Routes>
        <Route
          path="/"
          element={<CryppoBusinessLanding appIcon={props.appIcon} description={props.description}
            whoSuits={props.whoSuits} about={props.about} security={props.security}
            faq={props.faq} connectionList={props.connectionList} banner={props.banner} logo={props.logo} />}
        />
        <Route
          path="/businesslk"
        />
          <Route
              path="/entrance"
              element={<EntranceBussines ></EntranceBussines>}
              ></Route>
      </Routes>
      <FooterContainer logo={props.logo} />
    </div>
  )
}
