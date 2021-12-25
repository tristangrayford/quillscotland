import React from "react";
const logo = require("../../images/TG Transparent Background.png")

class HeaderMenu extends React.Component<{}, {}> {
    public constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (<div className="header-menu">
            <img className="header-logo" src={logo} />
            <div className="menu-items"><h3>Home</h3><h3>About</h3><h3>Writing</h3><h3>Recommendations</h3><h3>Shop</h3></div>
        </div>)
    }
}

export default HeaderMenu;