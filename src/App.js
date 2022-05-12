import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../src/Style/Style.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Spinner from './Components/Spinner/Spinner';
import AuthorizationContainer from "./Components/Authorization/AuthorizationContainer";
import RegistrationContainer from "./Components/Registration/RegistrationContainer";

const CryppoContainer = React.lazy(() => import('./Components/Cryppo/CryppoContainer'));
const CryppoBusinessContainer = React.lazy(() => import('./Components/CryppoBusiness/CryppoBusinessContainer'));
const CryppoIndexContainer = React.lazy(() => import('./Components/CryppoIndex/CryppoIndexContainer'));
function App() {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <div className="App">
          <ScrollToTop />
          <Suspense fallback={<Spinner />}>
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
              <Route
                path="/auth"
                element={<AuthorizationContainer />}
              />
              <Route
                path="/register"
                element={<RegistrationContainer />}
              />
            </Routes>
          </Suspense>

        </div>
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
