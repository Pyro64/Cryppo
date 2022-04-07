import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "../src/Style/Style.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Spinner from './Components/Spinner/Spinner';
// import CryppoContainer from './Components/Cryppo/CryppoContainer';

// import CryppoBusinessContainer from "./Components/CryppoBusiness/CryppoBusinessContainer";
// import CryppoIndexContainer from "./Components/CryppoIndex/CryppoIndexContainer";
const CryppoBusinessContainer = lazy(() => import('./Components/CryppoBusiness/CryppoBusinessContainer'));
const CryppoIndexContainer = lazy(() => import('./Components/CryppoIndex/CryppoIndexContainer'));
const CryppoContainer = lazy(() => import('./Components/Cryppo/CryppoContainer'));

function App() {

  return (
    <BrowserRouter>
      <ParallaxProvider>
        <Suspense fallback={<Spinner />} >
          <div className="App">
            <ScrollToTop />
            <Routes>
              <Route path="/"  >

                <Route
                  index
                  path="/cryppo/*"
                  element={<CryppoContainer />}
                />
                <Route path="business"
                  element={<CryppoBusinessContainer />} />
                <Route
                  path="cryppoindex/*"
                  element={<CryppoIndexContainer />}
                />
              </Route>
            </Routes>
          </div>
        </Suspense>
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
