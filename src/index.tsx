import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './Pages/Main/MainPage';
import reportWebVitals from './reportWebVitals';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/About/AboutPage';
import LanguagePage from './Pages/Language/LanguagePage';
import RecommendationsPage from './Pages/Recommendations/RecommendationsPage';

const routing = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Languages" element={<LanguagePage/>} />
        <Route path="/Recommendations" element={<RecommendationsPage/>} />
      </Routes>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
