import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CamelValue from "./pages/camels_value/camel_value";
import "./App.css";
import RankingCamel from "./pages/rankingCamel/RankingCamel";

function App() {
    return (
        <Router basename={process.env.NODE_ENV === "production" ? "/front_camel_model" : "/"}>
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