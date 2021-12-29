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

const monstress = require("../../images/Monstress.jpg")
const die = require("../../images/DIE.jpg")
const highesthouse = require("../../images/Highest House.jpg")
const coda = require("../../images/CODA.jpg")
const isola = require("../../images/Isola.jpg")
const sandman = require("../../images/Sandman.jpg")
const reaver = require("../../images/Reaver.jpg")
const ratqueens = require("../../images/Rat Queens.jpg")

const horizon = require("../../images/Horizon.jpg")
const journey = require("../../images/Journey.jpg")
const hollow = require("../../images/Hollow Knight.png")
const witcher = require("../../images/Witcher 3.jpg")
const godofwar = require("../../images/God of War.jpg")
const hellblade = require("../../images/Hellblade.jpg")
const ori = require("../../images/Ori.jpg")
const jedi = require("../../images/Jedi Fallen Order.jpg")
const control = require("../../images/Control.jpg")
const shadowofwar = require("../../images/Shadow of War.jpg")

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

  const graphicNovels = [
    <div key="monstress"><img src={monstress} alt="The Dragonbone Chair" /></div>,
    <div key="die"><img src={die} alt="Magician"/></div>,
    <div key="highesthouse"><img src={highesthouse} alt="Magician" /></div>,
    <div key="coda"><img src={coda} alt="Magician" /></div>,
    <div key="isola"><img src={isola} alt="Magician" /></div>,
    <div key="sandman"><img src={sandman} alt="Magician" /></div>,
    <div key="reaver"><img src={reaver} alt="Magician" /></div>,
    <div key="ratqueens"><img src={ratqueens} alt="Magician" /></div>,
  ]

  const games = [
    <div key="horizon"><img src={horizon} alt="The Dragonbone Chair" /></div>,
    <div key="journey"><img src={journey} alt="journey"/></div>,
    <div key="hollow"><img src={hollow} alt="Magician" /></div>,
    <div key="witcher"><img src={witcher} alt="witcher" /></div>,
    <div key="godofwar"><img src={godofwar} alt="Magician" /></div>,
    <div key="hellblade"><img src={hellblade} alt="Magician" /></div>,
    <div key="ori"><img src={ori} alt="Magician" /></div>,
    <div key="jedi"><img src={jedi} alt="Magician" /></div>,
    <div key="control"><img src={control} alt="Magician" /></div>,
    <div key="shadowofwar"><img src={shadowofwar} alt="Magician" /></div>,
  ]
    
    return (<div className="App">
        <HeaderMenu />
        <div className="recommendations-page">
        <h1>Recommendations</h1>
        <h2>Conventional Novels</h2>
        <Swiper children={books} />
        <h2>Graphic Novels</h2>
        <Swiper children={graphicNovels} />
        <h2>Video Games</h2>
        <Swiper children={games}/>
    </div></div>)
}

export default RecommendationsPage;