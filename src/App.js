import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import "../src/Style/Style.scss";
import Cryppo from "./Components/Cryppo/Cryppo";
import CryppoBusiness from "./Components/CryppoBusiness/CryppoBusiness";
import CryppoIndex from "./Components/CryppoIndex/CryppoIndex";

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
          <Route
            path="/business"
            element={<CryppoBusiness />}
          />
          <Route
            path="/index"
            element={<CryppoIndex />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
