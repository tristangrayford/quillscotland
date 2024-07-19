import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./Pages/MainPage";
import reportWebVitals from "./reportWebVitals";
import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ResourcesPage from "./Pages/ResourcesPage";
import NewsPage from "./Pages/NewsPage";
import TillySolidarity from "./Pages/News/TillySolidarity";
import GlasgowPride2024 from "./Pages/News/GlasgowPride2024";

const routing = (
  <HashRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Resources" element={<ResourcesPage />} />
      <Route path="/News" element={<NewsPage />} />
      <Route path="/News/TillySolidarity" element={<TillySolidarity />} />
      <Route path="/News/GlasgowPride2024" element={<GlasgowPride2024 />} />
    </Routes>
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
