import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "../src/Style/Style.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Spinner from './Components/Spinner/Spinner';
import Appp from './Components/App/Appp';
import CryppoContainer from './Components/Cryppo/CryppoContainer';
import CryppoBusinessContainer from "./Components/CryppoBusiness/CryppoBusinessContainer";
import CryppoIndexContainer from "./Components/CryppoIndex/CryppoIndexContainer";


function App() {

  return (
    <BrowserRouter>
      <ParallaxProvider>
        <Suspense fallback={<Spinner />} >
          <div className="App">
            <ScrollToTop />
            <Routes>
              <Route
                index
                path="/*"
                element={<CryppoContainer />}
              />
              <Route path="business/*"
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
