import React from 'react'
import { Route, Routes } from "react-router";
import CryppoBusinessLanding from './CryppoBusinessLanding/CryppoBusinessLanding'
import CryppoBusinessLk from './CryppoBusinessLk/CryppoBusinessLk'
import Header from '../Header/Header'

export default function CryppoBusiness(props) {
  return (
    <div>
      <Header logo={props.logo} btn={props.btn} login={props.login} isLogin={props.isLogin} />
      <Routes>
        <Route
          path="/"
          element={<CryppoBusinessLanding appIcon={props.appIcon} description={props.description}
            whoSuits={props.whoSuits} about={props.about} security={props.security}
            faq={props.faq} connectionList={props.connectionList} banner={props.banner} logo={props.logo} />}
        />
        <Route
          path="/lk/*"
          element={<CryppoBusinessLk />}
        />
      </Routes>
      
    </div>
  )
}
