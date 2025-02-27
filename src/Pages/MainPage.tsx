import React from "react";
import HeaderMenu from "./HeaderMenu";
import logo from "../images/Rainbow Quill.png";
import Discord from "../images/social-media/Discord.png";

function MainPage() {
  return (
    <div className="App">
      <div className={"main-page"}>
        <HeaderMenu />
        <h1 aria-label={"Quill Scotland"} aria-hidden={true}></h1>
        <img className="main-logo" alt="logo" src={logo} />
        <div className="main-description">
          <h2>Queers in Living Literature</h2>
          <p>Championing the LGBTQ+ Community in the Scottish Literary Scene</p>
        </div>
        <p className="contact-us">Join us on Discord</p>
        <a
          className="discord"
          target="_blank"
          rel="noreferrer"
          href="https://discord.gg/yBB42q4MQe"
        >
          <img src={Discord} alt="Discord" />
        </a>
        <p className="contact-us">info@quill.scot</p>
      </div>
    </div>
  );
}

export default MainPage;
