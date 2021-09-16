import EventPage from "../EventPage";
import "../../styles/Buttons.css";
import { Link } from "react-router-dom";
function Esport() {
  return (
    <div>
      <div className="homepage-navigation">
        <Link to="/">
          <div className="homepage_logo"></div>
        </Link>
      </div>
      <EventPage title="Games Palooza" image="game.jpeg">
        <br />
        <li>
          Only participants who have registered in the form will be allowed to
          enter the events.
        </li>
        <br />
        <li>No verbal abuse</li>
        <br />
        <li>Maintain basic decorum. </li>
        <br />
        <li>No pirated games allowed.</li>
        <br />
        <li>
          Participants must make/have an account in the respective games before
          the event{" "}
        </li>
        <br />
        <li>Betting is not allowed</li>
        <br />
        <li>
          Participants are highly encouraged to join the respective whatsapp
          groups and discord for updates.
        </li>
        <br />
      </EventPage>
      <div className="button-container">
        <div className="registration-buttons">
          <div className="register">
            <Link to="/gamespalooza/winners" className="font-bold font-sans">
              <span id="registration">Winners</span>
              <div className="liquid other-liquid"></div>
            </Link>
          </div>
        </div>
        <div className="registration-buttons">
          <div className="register">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://docs.google.com/document/d/1ylDSsYOewq7Bu0Wm6vYObW6BQ4PjnkGrm-QaoJLBHYM/edit"
            >
              <span id="registration">More Info</span>
              <div className="liquid"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Esport;
