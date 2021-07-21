import EventPage from "../EventPage";
import "../../styles/Buttons.css";
import { Link } from "react-router-dom";
function Esport() {
  return (
    <div>
      <div className='homepage-navigation'>
        <Link to='/'>
          <div className='homepage_logo'></div>
        </Link>
      </div>
      <EventPage title='Esport' image='game.jpeg'>
        <br />
        <li>No verbal abuse</li>
        <br />
        <li>No Copyright content </li>
        <br />
        <li>Participants must make/have an account before the event </li>
        <br />
        <li>Betting is not allowed</li>
      </EventPage>
      <div className='button-container-esport'>
        <div className='registration-buttons'>
          <div className='register'>
            <a href='https://forms.gle/fkXzpgJu7SYYwMKv8'>
              <span id='registration'>Register Now</span>
              <div className='liquid other-liquid'></div>
            </a>
          </div>
        </div>
        <div className='registration-buttons'>
          <div className='register'>
            <a href='https://docs.google.com/document/d/1ylDSsYOewq7Bu0Wm6vYObW6BQ4PjnkGrm-QaoJLBHYM/edit?usp=sharing'>
              <span id='registration'>More Info</span>
              <div className='liquid'></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Esport;
