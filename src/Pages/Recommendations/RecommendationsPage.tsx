import React from "react";
import HeaderMenu from "../Menu/HeaderMenu";
import Swiper from "./Swiper";
const dragonbone = require("../../images/recommendations/Dragonbone Chair.jpg")
const magician = require("../../images/recommendations/Magician.jpg")
const nightwatch = require("../../images/recommendations/Night Watch.jpg")
const fifthseason = require("../../images/recommendations/Fifth Season.jpg")
const bonewitch = require("../../images/recommendations/Bone Witch.jpg")
const daughter = require("../../images/recommendations/Daughter of the Empire.jpg")
const lastwish = require("../../images/recommendations/The Last Wish.jpg")
const gideon = require("../../images/recommendations/Gideon.jpg")
const priory = require("../../images/recommendations/Priory.jpg")
const hades = require("../../images/recommendations/Hades.jpeg")

const monstress = require("../../images/recommendations/Monstress.jpg")
const die = require("../../images/recommendations/DIE.jpg")
const highesthouse = require("../../images/recommendations/Highest House.jpg")
const coda = require("../../images/recommendations/CODA.jpg")
const isola = require("../../images/recommendations/Isola.jpg")
const sandman = require("../../images/recommendations/Sandman.jpg")
const reaver = require("../../images/recommendations/Reaver.jpg")
const ratqueens = require("../../images/recommendations/Rat Queens.jpg")

const horizon = require("../../images/recommendations/Horizon.jpg")
const journey = require("../../images/recommendations/Journey.jpg")
const hollow = require("../../images/recommendations/Hollow Knight.png")
const witcher = require("../../images/recommendations/Witcher 3.jpg")
const godofwar = require("../../images/recommendations/God of War.jpg")
const hellblade = require("../../images/recommendations/Hellblade.jpg")
const ori = require("../../images/recommendations/Ori.jpg")
const jedi = require("../../images/recommendations/Jedi Fallen Order.jpg")
const control = require("../../images/recommendations/Control.jpg")
const shadowofwar = require("../../images/recommendations/Shadow of War.jpg")
const celeste = require("../../images/recommendations/Celeste.png")
const hallOfSmoke = require("../../images/recommendations/Hall of Smoke.jpg")


const alanlee = require("../../images/recommendations/Alan Lee.png")
const almg = require("../../images/recommendations/ALMG.png")
const anato = require("../../images/recommendations/Anato Finnstark.png")
const syd = require("../../images/recommendations/Syd Mills.png")
const bastien = require("../../images/recommendations/Bastien.png")

function RecommendationsPage() {
  const books = [
    <div key="dragonbone"><img src={dragonbone} alt="The Dragonbone Chair" /></div>,
    <div key="gideon"><img src={gideon} alt="Gideon the Ninth" /></div>,
    <div key="magician"><img src={magician} alt="Magician"/></div>,
    <div key="lastwish"><img src={lastwish} alt="The Last Wish" /></div>,
    <div key="nightwatch"><img src={nightwatch} alt="Night Watch" /></div>,
    <div key="fifthseason"><img src={fifthseason} alt="The Fifth Season" /></div>,
    <div key="bonewitch"><img src={bonewitch} alt="The Bone Witch" /></div>,
    <div key="priory"><img src={priory} alt="The Priory of the Orange Tree" /></div>,
    <div key="daughter"><img src={daughter} alt="Daughter of the Empire" /></div>,
    <div key="hall"><img src={hallOfSmoke} alt="Hall of Smoke" /></div>,
  ]

  const graphicNovels = [
    <div key="monstress"><img src={monstress} alt="Monstress" /></div>,
    <div key="die"><img src={die} alt="DIE"/></div>,
    <div key="highesthouse"><img src={highesthouse} alt="The Highest House" /></div>,
    <div key="coda"><img src={coda} alt="Coda" /></div>,
    <div key="isola"><img src={isola} alt="Isola" /></div>,
    <div key="sandman"><img src={sandman} alt="Sandman" /></div>,
    <div key="reaver"><img src={reaver} alt="Reaver" /></div>,
    <div key="ratqueens"><img src={ratqueens} alt="Rat Queens" /></div>,
  ]

  const games = [
    <div key="horizon"><img src={horizon} alt="Horizon Zero Dawn" /></div>,
    <div key="journey"><img src={journey} alt="Journey"/></div>,
    <div key="hollow"><img src={hollow} alt="Hollow Knight" /></div>,
    <div key="witcher"><img src={witcher} alt="The Witcher 3" /></div>,
    <div key="godofwar"><img src={godofwar} alt="God of War 2018" /></div>,
    <div key="hellblade"><img src={hellblade} alt="Hellblade: Senua's Sacrifice" /></div>,
    <div key="ori"><img src={ori} alt="Ori Duology" /></div>,
    <div key="jedi"><img src={jedi} alt="Jedi: Fallen Order" /></div>,
    <div key="control"><img src={control} alt="Control" /></div>,
    <div key="shadowofwar"><img src={shadowofwar} alt="Middle Earth: Shadow of War" /></div>,
    <div key="celeste"><img src={celeste} alt="Celeste" /></div>,
    <div key="hades"><img src={hades} alt="Hades" /></div>,
  ]

  const artists = [
    <div key="anato"><img src={anato} alt="Anato Finnstark" /></div>,
    <div key="syd"><img src={syd} alt="Syd Mills"/></div>,
    <div key="almg"><img id="almg" src={almg} alt="Anna Le Moine Gray" /></div>,
    <div key="alanLee"><img src={alanlee} alt="Alan Lee" /></div>,
    <div key="bastien"><img src={bastien} alt="Bastien LeCouffe DeHarme" /></div>,
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
        <h2>Artists</h2>
        <Swiper children={artists}/>
    </div></div>)
}

export default RecommendationsPage;