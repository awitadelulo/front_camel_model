import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CamelValue from "./pages/camels_value/camel_value";
import "./App.css";
import RankingCamel from "./pages/rankingCamel/RankingCamel";

const basename = process.env.REACT_APP_BASENAME || "/";

function App() {
    return (
        <Router basename={basename}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/camels_value" element={<CamelValue />} />
                    <Route path="/ranking" element={<RankingCamel />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;