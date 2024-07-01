import React from "react";
import HeaderMenu from "./HeaderMenu";

function ReadingPage() {
  return (
    <div className="App">
      <div className={"main-page"}>
        <HeaderMenu />
        <div>
          <h2>Useful Reading Resources</h2>
          <h3>Scottish Literary Scene</h3>
          <a
            href={
              "https://hjosephinegiles.medium.com/being-trans-in-scottish-literature-639c33908f88"
            }
          >
            Being Trans in Scottish Literature | by Josie Giles
          </a>
          <br />
          <a
            href={
              "https://www.thenational.scot/news/18269499.distress-trans-people-scottish-poetry-librarys-no-platforming-row/"
            }
          >
            Scottish Poetry Library's no-platforming row | The National
          </a>
          <br />
          <a
            href={
              "https://www.thesecondshelf.com/digest/a-message-from-members-of-the-uk-and-irish-publishing-community/"
            }
          >
            Open Letter of Solidarity: A Message from Members of the UK and
            Irish Publishing Community | The Second Shelf
          </a>
          <h3>Scotland in General</h3>
          <a
            href={
              "https://www.scotlandscensus.gov.uk/2022-results/scotland-s-census-2022-sexual-orientation-and-trans-status-or-history/"
            }
          >
            LGBT+ Statistics | Scotland's Census 2022
          </a>
          <br />
          <a href={"https://lgbtyouth.org.uk/life-in-scotland-trans-report/"}>
            Life in Scotland: Trans Report | by LGBT Youth Scotland
          </a>
          <br />
          <a
            href={
              "https://www.scotsman.com/news/people/no-one-wants-to-talk-about-us-as-people-what-life-is-like-for-trans-people-in-scotland-today-3120146"
            }
          >
            What life is like for trans people in Scotland today | The Scotsman
          </a>
          <br />
          <a
            href={
              "https://www.thenational.scot/news/17472564.not-speak-us-feminists-hit-back-trans-exclusionary-activists-open-letter/"
            }
          >
            They do not speak for us | The National
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReadingPage;
