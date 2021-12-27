import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './Pages/Main/MainPage';
import reportWebVitals from './reportWebVitals';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const routing = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/About" element={<MainPage/>} />
        <Route path="/Language" element={<MainPage/>} />
        <Route path="/Recommendations" element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
