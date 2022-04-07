import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "../src/Style/Style.scss";
import Cryppo from "./Components/Cryppo/Cryppo";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Spinner from './Components/Spinner/Spinner';
import FooterContainer from './Components/Footer/FooterContainer';

// import CryppoBusinessContainer from "./Components/CryppoBusiness/CryppoBusinessContainer";
// import CryppoIndexContainer from "./Components/CryppoIndex/CryppoIndexContainer";
const CryppoBusinessContainer = lazy(() => import('./Components/CryppoBusiness/CryppoBusinessContainer'));
const CryppoIndexContainer = lazy(() => import('./Components/CryppoIndex/CryppoIndexContainer'));


function App() {

  return (
    <BrowserRouter>
      <ParallaxProvider>
        <Suspense fallback={<Spinner />} >
          <div className="App">
            <ScrollToTop />
            <Routes>
              <Route
                path="/"
                element={<Cryppo />}
              />
              <Route path="business"
                element={<CryppoBusinessContainer />} />
              <Route
                path="cryppoindex/*"
                element={<CryppoIndexContainer />}
              />
            </Routes>
          </div>
        </Suspense>
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
