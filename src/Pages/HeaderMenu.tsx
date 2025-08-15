import React, { JSX } from "react";
import { NavLink } from "react-router-dom";
import menu from "../images/Menu.webp";
import logo from "../images/Rainbow Quill.png";
import Facebook from "../images/social-media/Facebook.png";
import Instagram from "../images/social-media/Instagram.png";
import Bluesky from "../images/social-media/Bluesky.png";
import Email from "../images/social-media/Email.png";
import Discord from "../images/social-media/Discord.png";

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
            href="https://bsky.app/profile/quill.scot"
          >
            <img src={Bluesky} alt="Bluesky" />
          </a>
          <a
            className="discord"
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/pVENbPh3"
          >
            <img className="discord" src={Discord} alt="Discord" />
          </a>
          <a
            className="email"
            target="_blank"
            rel="noreferrer"
            href="mailto:info@quill.scot?subject=Website Contact"
          >
            <img className="email-icon" src={Email} alt="Email" />
          </a>
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
