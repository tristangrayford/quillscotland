import React from "react";
import HeaderMenu from "../Menu/HeaderMenu";
const logo = require("../../images/Rainbow Quill.png")

function MainPage() {
    return (
    <div className="App">
        <div className={"main-page"} >
            <HeaderMenu />
            <h1 aria-label={"Quill Scotland"} aria-hidden={true}></h1>
            <img className="main-logo" alt="logo" src={logo}/>
            <div className="main-description">
                <h2>Queers in Living Literature</h2>
                <p>Championing the LGBTQ+ Community in the Scottish Literary Scene</p>
            </div>
            <p className="contact-us">info@quill.scot</p>
            </div>
    </div>)
}

export default MainPage;