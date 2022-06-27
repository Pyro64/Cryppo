import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/Style/Style.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "./Components/UI/ScrollToTop/ScrollToTop";
import Spinner from "./Components/UI/Spinner/Spinner";
import CryppoInvestContainer from "./Components/Pages/CryppoInvestContainer";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import CryppoBusinessContainer from "./Components/Pages/CryppoBusinessContainer";
import CryppoContainer from "./Components/Pages/CryppoContainer";
import { ConfigProvider } from "antd";
function App() {
    const uiContext = {
        isBusiness: false,
        isWallet: true,
        isLk: false,
    };
    const UIContext = React.createContext(uiContext);
    const [theme, setTheme] = useState("light");
    const switchTheme = () => {
        theme === true ? setTheme(false) : setTheme(true);
    };
    return (
        <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
            <GlobalStyles />
            <ConfigProvider theme={theme === true ? "light" : "dark"}>
                <BrowserRouter>
                    <ParallaxProvider>
                        <div className="App">
                            <div className="gradient"></div>
                            <ScrollToTop />
                            <UIContext.Provider value={UIContext}>
                                <Routes>
                                    <Route
                                        path="/*"
                                        element={
                                            <CryppoContainer
                                                switchTheme={switchTheme}
                                                theme={theme}
                                            />
                                        }
                                    />
                                    <Route
                                        path="/business/*"
                                        element={
                                            <Suspense fallback={<Spinner />}>
                                                <CryppoBusinessContainer
                                                    switchTheme={switchTheme}
                                                    theme={theme}
                                                />
                                            </Suspense>
                                        }
                                    />
                                    <Route
                                        path="/invest"
                                        element={
                                            <CryppoInvestContainer
                                                switchTheme={switchTheme}
                                                theme={theme}
                                            />
                                        }
                                    />
                                </Routes>
                            </UIContext.Provider>
                        </div>
                    </ParallaxProvider>
                </BrowserRouter>
            </ConfigProvider>
        </ThemeProvider>
    );
}
export default App;
