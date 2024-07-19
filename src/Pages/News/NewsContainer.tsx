import React, { ReactElement } from "react";
import HeaderMenu from "../HeaderMenu";
import { NavLink } from "react-router-dom";

function NewsContainer(child: ReactElement, title: string) {
  return (
    <div className="App">
      <div className={"main-page"}>
        <HeaderMenu />
        <div className="news-page">
          <h2>{title}</h2>
          <div className="news-text">{child}</div>
          <NavLink to="/News">
            <h3>Back to News</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NewsContainer;
