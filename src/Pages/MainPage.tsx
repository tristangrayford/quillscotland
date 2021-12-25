import React from "react";
import HeaderMenu from "./Menu/HeaderMenu";

class MainPage extends React.Component {
    public constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (<>
            <HeaderMenu/>
            <h1>Tristan Gray</h1>
        </>)
    }
}

export default MainPage;