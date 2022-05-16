import React, {Suspense} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../src/Style/Style.scss";
import {ParallaxProvider} from "react-scroll-parallax";
import ScrollToTop from "./Components/UI/ScrollToTop/ScrollToTop";
import Spinner from './Components/UI/Spinner/Spinner';
import CryppoInvestContainer from "./Components/Pages/CryppoInvestContainer";

const CryppoContainer = React.lazy(() => import('./Components/Pages/CryppoContainer'));
const CryppoBusinessContainer = React.lazy(() => import('./Components/Pages/CryppoBusinessContainer'));


function App() {
    return (
        <BrowserRouter>
            <ParallaxProvider>
                <div className="App">
                    <ScrollToTop/>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route
                                path="/*"
                                element={<CryppoContainer/>}
                            />
                            <Route path="/business/*"
                                   element={<CryppoBusinessContainer/>}/>
                            <Route
                                path="/invest"
                                element={<CryppoInvestContainer/>}
                            />
                        </Routes>
                    </Suspense>

                </div>
            </ParallaxProvider>
        </BrowserRouter>
    );
}

export default App;
