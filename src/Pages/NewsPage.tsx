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
            {
              //<div className="news-block">
              //<NavLink to="/News/AltFringe2025">
              //See Us at the Alt Fringe 2025
              //</NavLink>
              //<p>1st Aguust 2025</p>
              //</div>
            }
            <div className="news-block">
              <NavLink to="/News/SachaCowardPolari">
                Sacha Coward on the Polari Prize
              </NavLink>
              <p>
                I am one of the 16 authors who chose to leave the Polari Prize,
                and I find myself frustrated and saddened at the way this entire
                story has been represented.
              </p>
              <p className="news-date">15th August 2025</p>
            </div>
            <div className="news-block">
              <NavLink to="/News/VisaAndMastercard">
                Visa and Mastercard censor queer creators online
              </NavLink>
              <p>
                Visa and Mastercard used their complete control over the payment
                processing of creative platforms Steam and itch.io to force both
                websites to eradicate everything they consider to be
                "problematic" content online.
              </p>
              <p className="news-date">27th July 2025</p>
            </div>
            <div className="news-block">
              <NavLink to="/News/TDOV2025">
                Trans Day of Visibility Readings 2025
              </NavLink>
              <p>
                Join us for an evening of readings in honour of Trans Day of
                Visibility!
              </p>
              <p className="news-date">26th February 2025</p>
            </div>
            <div className="news-block">
              <NavLink to="/News/GlasgowPride2024">
                Statement on Glasgow Pride 2024
              </NavLink>
              <p>
                Glasgow Pride’s organisers put solidarity with corporate
                interests before intersectionality
              </p>
              <p className="news-date">19th July 2024</p>
            </div>
            <div className="news-block">
              <NavLink to="/News/TillySolidarity">
                Solidarity with Tilly Brooks
              </NavLink>
              <p>
                Sacked by Waterstones for daring to stand up to anti-trans
                hatred in publishing.
              </p>
              <p className="news-date">9th July 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
