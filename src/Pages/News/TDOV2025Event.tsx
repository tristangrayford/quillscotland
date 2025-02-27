import React from "react";
import NewsContainer from "./NewsContainer";
const TDOV2025Image = require("../../images/TDOV2025.png");

function TDOV2025Event() {
  const news = (
    <>
      <a
        className="ticket-link"
        href="https://www.eventbrite.co.uk/e/quill-presents-trans-day-of-visibility-readings-evening-tickets-1224185986239?aff=ebdshpsearchautocomplete"
      >
        Buy Tickets Here
      </a>
      <img src={TDOV2025Image} alt="Quill Scotland and Argonaut Books logos" />
      <p>
        Join us for an evening of readings in honour of Trans Day of Visibility!
      </p>
      <p>
        Hosted by QUILL Scotland, this event will showcase talented trans and
        non-binary writers and poets sharing their work in a welcoming and
        inclusive space. Let's celebrate and uplift the voices of the trans
        community together. The event will take place at Argonaut Books on Leith
        Walk, Edinburgh.
      </p>
      <p>
        <b>30th March 2025</b>
      </p>
      <p>Readers include:</p>
      <ul>
        <li>Harry Josephine Giles</li>
        <li>Amy Jo Philip</li>
        <li>Gray Crosbie</li>
        <li>Éadaoín Lynch</li>
        <li>Spencer Mason</li>
        <li>Linden McMahon</li>
      </ul>
      <p> ... and more to come!</p>
      <p>
        All proceeds from the event will be distributed evenly between the
        speakers or their nominated charities.
      </p>
    </>
  );
  return NewsContainer(
    news,
    "QUILL Presents - Trans Day of Visibility Readings Evening"
  );
}

export default TDOV2025Event;
