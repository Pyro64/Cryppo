import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "../src/Style/Style.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";


import CryppoContainer from './Components/Cryppo/CryppoContainer';
import CryppoBusinessContainer from "./Components/CryppoBusiness/CryppoBusinessContainer";
import CryppoIndexContainer from "./Components/CryppoIndex/CryppoIndexContainer";
function App() {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <div className="App">
          <ScrollToTop />
          <Routes>
            <Route
              path="/*"
              element={<CryppoContainer />}
            />
            <Route path="business/*"
              element={<CryppoBusinessContainer />} />
            <Route
              path="cryppoinvest/*"
              element={<CryppoIndexContainer />}
            />
          </Routes>
        </div>
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
