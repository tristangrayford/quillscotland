import React from "react";
import { NavLink } from "react-router-dom";
const menu = require("../images/Menu.webp");
const logo = require("../images/Rainbow Quill.png");
const Facebook = require("../images/social-media/Facebook.png");
const Instagram = require("../images/social-media/Instagram.png");
const Twitter = require("../images/social-media/Twitter.png");
const Bluesky = require("../images/social-media/Bluesky.png");
const Email = require("../images/social-media/Email.png");

interface MenuState {
  menuShown: boolean;
}

class HeaderMenu extends React.Component<{}, MenuState> {
  public constructor(props: {}) {
    super(props);
    this.state = { menuShown: false };
  }

  showMenu(): void {
    this.setState({
      menuShown: !this.state.menuShown,
    });
  }

  public render(): JSX.Element {
    return (
      <div className="header-menu">
        <NavLink to="/">
          <img className="header-logo" alt="logo" src={logo} />
        </NavLink>
        <h1>Quill Scotland</h1>
        <button onClick={() => this.showMenu()} className="menu">
          <img alt="menu" src={menu} />
        </button>
        <div
          className={
            this.state.menuShown ? "menu-items show-menu" : "menu-items"
          }
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Resources">Resources</NavLink>
          <NavLink to="/News">News</NavLink>
        </div>
        <div className="social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/quillscotland"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
          <a
            className="instagram"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/quill.scot"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/quillscotland"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://bsky.app/profile/quill.scot"
          >
            <img src={Bluesky} alt="Bluesky" />
          </a>
          <a
            className="email"
            target="_blank"
            rel="noreferrer"
            href="mailto:info@quill.scot?subject=Website Contact"
          >
            <img src={Email} alt="Email" />
          </a>
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
