import EventPage from "../EventPage";
import "../../styles/Buttons.css";
import { Link } from "react-router-dom";
function Rhythm() {
  return (
    <div>
      <div className='homepage-navigation'>
        <Link to='/'>
          <div className='homepage_logo'></div>
        </Link>
      </div>
      <EventPage title='Rhythm' image='Rhythm.png'>
        <br />
        <li>
          Click on the Register Now button to register yourself for the event.
        </li>
        <br />
        <br />
        <li>
          Then the participants will be added in their respective groups
        </li>
        <br />
        <br />
        <li>
          After participants join the group, by their choice, it will be decided
          if the singing part will be live or recorded- according to their
          convenience. (max.5 mins each)
        </li>
        <br />
        <br />
        <li>
          Instrumentation participants will be asked to send their recorded
          videos.{" "}
        </li>
        <br />
        <br />
      </EventPage>
      <div className='button-container'>
        <div className='registration-buttons'>
          <div className='register'>
            <a rel="noreferrer" target="_blank" href='https://forms.gle/1VmBR89M2XpgxyT2A'>
              <span id='registration'>Register Now</span>
              <div className='liquid other-liquid'></div>
            </a>
          </div>
        </div>
        <div className='registration-buttons'>
          <div className='register'>
            <a rel="noreferrer" target="_blank" href='https://docs.google.com/document/d/1CoqVTGJGqmPrFOSZJoCVXM57t9WvV_c9kmVeEPdCLqw/edit?usp=drivesdk'>
              <span id='registration'>More Info</span>
              <div className='liquid'></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rhythm;
