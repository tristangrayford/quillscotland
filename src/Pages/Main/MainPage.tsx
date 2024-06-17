import React from "react";
import HeaderMenu from "../Menu/HeaderMenu";
const logo = require("../../images/Rainbow Quill.png")

function MainPage() {
    return (
    <div className="App">
        <div className={"main-page"} >
            <HeaderMenu />
            <img className="main-logo" alt="logo" src={logo}/>
            <p className="main-description">Queers in Living Literature</p>
        </div>
    </div>)
}

export default MainPage;