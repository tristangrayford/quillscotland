import React from "react";
import NewsContainer from "./NewsContainer";

function TillySolidarity() {
  const tillyNews = (
    <div>
      <p>
        Solidarity with{" "}
        <a href="https://www.tiktok.com/@tillylovesbooks">@TillyLovesBooks</a>.
        <br />
        <br />
        Sacked by Waterstones for daring to stand up to anti-trans hatred in
        publishing.
        <br />
        <br />
        Yet again, wealthy and powerful people promoting hate find silencing
        their critics far too easy. Shame on Waterstones for enabling it.
        <br />
        <br />
        <a href="https://fallsinthewoods.substack.com/p/open-letter-to-waterstones-in-support?r=2t6qcu&utm_medium=ios&triedRedirect=true">
          Open letter
        </a>
        <br />
        <br />
        <a href="https://www.wearequeeraf.com/the-significance-of-waterstones-firing-someone-for-sharing-pro-transgender-views/">
          Story
        </a>
      </p>
    </div>
  );
  return NewsContainer(tillyNews, "Waterstones Sack Trans Ally");
}

export default TillySolidarity;
