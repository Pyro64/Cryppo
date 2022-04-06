import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "../src/Style/Style.scss";
import Cryppo from "./Components/Cryppo/Cryppo";
import React from 'react';
import CryppoBusinessContainer from "./Components/CryppoBusiness/CryppoBusinessContainer";
import { ParallaxProvider } from "react-scroll-parallax";
import HeaderContainer from "./Components/Header/HeaderContainer";
import CryppoIndexContainer from "./Components/CryppoIndex/CryppoIndexContainer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";




function App() {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <div className="App">
          <HeaderContainer />
          <ScrollToTop />
          <Routes>

            <Route
              path="/"
              element={<Cryppo />}
            />
            <Route path="business"
              element={<CryppoBusinessContainer />} />
            <Route
              path="cryppoindex"
              element={<CryppoIndexContainer />}
            />
          </Routes>
        </div>
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
