import React from "react";
import HeaderMenu from "../Menu/HeaderMenu";

function AboutPage() {
  return (
    <div className="App">
      <HeaderMenu />
      <div className="about-page">
        <div className="half">
          <h1>About</h1>
          <p>
            QUILL (Queers in Living Literature) Scotland was founded during
            Pride Month 2024 in response to an atmosphere of increasing
            hostility and lack of solidarity with the LGBT+ community among the
            literature organisations of Scotland.
            <br />
            <br />
            Over the past few years, we have seen organisations that claim to
            represent all of Scotland’s thriving literary community, defend
            freedom of speech, and speak for us on the national stage fail to
            stand by and protect – let alone champion – the LGBTQ+ artists,
            authors, and poets at the heart of the writing community.
            <br />
            <br />
            Instead, we have seen them run to defend anti-trans figures,
            including those who are among the most wealthy and powerful
            individuals in Scotland, even as those individuals promote, fund,
            and add to the hatred against us in our media and politics. LGBT+
            authors and poets have found themselves alienated and abandoned by
            the very groups that are meant to stand with us and ensure diversity
            is protected and nurtured.
            <br />
            <br />
            Scotland’s LGBT+ creators deserve to be championed and celebrated.
            As artists and simply as human beings, we also deserve to be
            defended against the hatred that has spread among many of the most
            powerful people in our society and, shamefully, many of the literary
            institutions in our country. QUILL Scotland has been established to
            fight for that future.
            <br />
            <br />
            Where it is needed QUILL Scotland will be the representation,
            defence, and voice for Scotland’s LGBT+ literary scene, to stand in
            where those who should be leading these efforts have fallen silent
            or turned their backs. If they will not organise on our behalf, we
            will organise ourselves.
          </p>
          <p className="contact-us">Contact us: info@quill.scot</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
