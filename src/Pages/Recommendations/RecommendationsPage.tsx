import React from "react";
import HeaderMenu from "../Menu/HeaderMenu";
import Swiper from "./Swiper";
const dragonbone = require("../../images/Dragonbone Chair.jpg")
const magician = require("../../images/Magician.jpg")
const nightwatch = require("../../images/Night Watch.jpg")
const fifthseason = require("../../images/Fifth Season.jpg")
const bonewitch = require("../../images/Bone Witch.jpg")
const daughter = require("../../images/Daughter of the Empire.jpg")
const lastwish = require("../../images/The Last Wish.jpg")

function RecommendationsPage() {
  const books = [
    <div key="dragonbone"><img src={dragonbone} alt="The Dragonbone Chair" /></div>,
    <div key="magician"><img src={magician} alt="Magician"/></div>,
    <div key="nightwatch"><img src={nightwatch} alt="Magician" /></div>,
    <div key="fifthseason"><img src={fifthseason} alt="Magician" /></div>,
    <div key="bonewitch"><img src={bonewitch} alt="Magician" /></div>,
    <div key="daughter"><img src={daughter} alt="Magician" /></div>,
    <div key="lastwish"><img src={lastwish} alt="Magician" /></div>,
  ]
    
    return (<div className="App">
        <HeaderMenu />
        <div className="recommendations-page">
        <h1>Recommendations</h1>
        <h2>Conventional Novels</h2>
        <Swiper children={books} />
        <h2>Graphic Novels</h2>
        <Swiper children={books} />
        <h2>Video Games</h2>
        <Swiper children={books}/>
    </div></div>)
}

export default RecommendationsPage;