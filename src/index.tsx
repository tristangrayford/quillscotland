import MainPage from "./Pages/MainPage";
import reportWebVitals from "./reportWebVitals";
import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ResourcesPage from "./Pages/ResourcesPage";
import NewsPage from "./Pages/NewsPage";
import TillySolidarity from "./Pages/News/TillySolidarity";
import GlasgowPride2024 from "./Pages/News/GlasgowPride2024";
import TDOV2025Event from "./Pages/News/TDOV2025Event";
import { createRoot } from "react-dom/client";

const routing = (
  <HashRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Resources" element={<ResourcesPage />} />
      <Route path="/News" element={<NewsPage />} />
      <Route path="/News/TillySolidarity" element={<TillySolidarity />} />
      <Route path="/News/GlasgowPride2024" element={<GlasgowPride2024 />} />
      <Route path="/News/TDOV2025" element={<TDOV2025Event />} />
    </Routes>
  </HashRouter>
);

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(routing);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
