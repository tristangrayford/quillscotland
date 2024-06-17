import React from "react";
import { NavLink } from 'react-router-dom'
const menu = require("../../images/Menu.webp")
const logo = require("../../images/Rainbow Quill.png")

interface MenuState {
    menuShown: boolean;
}

class HeaderMenu extends React.Component<{}, MenuState> {
    public constructor(props: {}) {
        super(props);
        this.state = {menuShown: false};
    }

    showMenu(): void {
        this.setState({
            menuShown: !this.state.menuShown
        })
    }

    public render(): JSX.Element {
        return (
        <div className="header-menu">
            <NavLink to="/"><img className="header-logo" alt="logo" src={logo}/></NavLink>
            <h1>Quill Scotland</h1>
            <button onClick={() => this.showMenu()} className="menu">
                <img alt="menu" src={menu}/>
            </button>
            <div className={this.state.menuShown ? "menu-items show-menu" : "menu-items"}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
            </div>
        </div>)
    }
}

export default HeaderMenu;