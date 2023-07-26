import React from "react";
import { NavLink } from 'react-router-dom'
const Facebook = require("../../images/Facebook.png")
const Twitter = require("../../images/Twitter.png")
const Goodreads = require("../../images/Goodreads.png")
const Tiktok = require("../../images/Tiktok.png")
const Mastodon = require("../../images/mastodon.png")
const Bluesky = require("../../images/Bluesky.png")

const logo = require("../../images/TG Transparent Background.png")

class HeaderMenu extends React.Component<{}, {}> {
    public constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (<div className="header-menu">
            <NavLink to="/"><img className="header-logo" alt="logo" src={logo} /></NavLink>
            <div className="menu-items">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Writing">Other Writing</NavLink>
                <NavLink to="/Languages">Language</NavLink>
                <NavLink to="/Recommendations">Recommendations</NavLink>
            </div>
            <div className="social">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/tgraywrites">
                    <img src={Facebook} alt="Facebook" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/TGrayWrites">
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a target="_blank" rel="me noreferrer" href="https://mastodon.scot/@tree">
                    <img src={Mastodon} alt="Mastodon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://bsky.app/profile/eidyngray.scot">
                    <img src={Bluesky} alt="Bluesky" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@tgraywrites">
                    <img src={Tiktok} alt="Tiktok" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.goodreads.com/author/show/20606471.Tristan_Gray">
                    <img src={Goodreads} alt="Goodreads" />
                </a>
                <a target="_blank" rel="noreferrer" href="mailto:tristan@eidyngray.co.uk?subject=Website Contact">
                    <p>@</p>
                </a>
            </div>
        </div>)
    }
}

export default HeaderMenu;