import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "../src/Style/Style.scss";
import Cryppo from "./Components/Cryppo/Cryppo";
import CryppoIndex from "./Components/CryppoIndex/CryppoIndex";
import React from 'react';
import CryppoBusinessContainer from "./Components/CryppoBusiness/CryppoBusinessContainer";
import { ParallaxProvider } from "react-scroll-parallax";
import HeaderContainer from "./Components/Header/HeaderContainer";



function App() {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <div className="App">
          <HeaderContainer />
          <Routes>
            <Route
              path="/"
              element={<Cryppo />}
            />
            <Route path="business"
              element={<CryppoBusinessContainer />} />
            <Route
              path="cryppoindex"
              element={<CryppoIndex />}
            />
          </Routes>
        </div>
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
