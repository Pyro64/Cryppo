import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from "./Components/Header/Header";
import "../src/Style/Style.scss";
import Cryppo from "./Components/Cryppo/Cryppo";
import CryppoIndex from "./Components/CryppoIndex/CryppoIndex";
import React from 'react';
import CryppoBusinessContainer from "./Components/CryppoBusiness/CryppoBusinessContainer";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Cryppo />}
          />
          <Route path="business"
            element={<CryppoBusinessContainer />} />
          <Route
            path="index"
            element={<CryppoIndex />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
