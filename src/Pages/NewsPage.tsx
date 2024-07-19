import React from "react";
import HeaderMenu from "./HeaderMenu";
import { NavLink } from "react-router-dom";

function NewsPage() {
  return (
    <div className="App">
      <div className={"main-page"}>
        <HeaderMenu />
        <div className="news-page">
          <h2>News</h2>
          <div className="news-container">
            <div className="news-block">
              <NavLink to="/News/GlasgowPride2024">
                Statement on Glasgow Pride 2024
              </NavLink>
              <p>19th July 2024</p>
            </div>
            <div className="news-block">
              <NavLink to="/News/TillySolidarity">
                Solidarity with Tilly Brooks
              </NavLink>
              <p>9th July 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
