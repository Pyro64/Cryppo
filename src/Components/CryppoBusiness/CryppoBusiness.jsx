import React from 'react'
import { Route, Routes } from "react-router";
import CryppoBusinessLanding from './CryppoBusinessLanding/CryppoBusinessLanding'
import CryppoBusinessLk from '../Lk/CryppoBusinessLk/CryppoBusinessLk'
import Header from '../Header/Header'
import FooterContainer from '../Footer/FooterContainer'

export default function CryppoBusiness(props) {
  return (
    <div>
      <Header logo={props.logo} btn={props.btn} login={props.login} isLogin={props.isLogin} user={props.user} />
      <Routes>
        <Route
          index
          element={<CryppoBusinessLanding appIcon={props.appIcon} description={props.description}
            whoSuits={props.whoSuits} about={props.about} security={props.security}
            faq={props.faq} connectionList={props.connectionList} banner={props.banner} logo={props.logo} />}
        />
        <Route
          path="/lk/*"
          element={<CryppoBusinessLk />}
        />
      </Routes>
      <FooterContainer logo={props.logo} />

    </div>
  )
}
