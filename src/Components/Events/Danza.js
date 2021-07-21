import EventPage from "../EventPage";
import { Link } from "react-router-dom";
import "../../styles/Buttons.css";
function Danza() {
  return (
    <div>
      <div className='homepage-navigation'>
        <Link to='/'>
          <div className='homepage_logo'></div>
        </Link>
      </div>
      <EventPage title='Danza' image='danza.png'>
        <li>The time limit for each entry will be 1.5-3 minutes.</li>
        <br />
        <li>
          The theme should be strictly Eastern or Western depending on the
          category that the participant is choosing.
        </li>
        <br />
        <li>
          The video size must not exceed 10 MB and should be sent to the given
          link by 23rd July
        </li>
        <br />
        <li>
          One shot only(No cuts/transitions/effects). Overlaying music is
          acceptable.
        </li>
        <br />
        <li>Winner will be selected on the basis of People's choice.</li>
        <br />
      </EventPage>
      <div className='button-container'>
        <div className='registration-buttons'>
          <div className='register'>
            <a href='https://forms.gle/qSpZCyCcnNvs4xe46'>
              <span id='registration'>Register Now</span>
              <div className='liquid other-liquid'></div>
            </a>
          </div>
        </div>
        <div className='registration-buttons'>
          <div className='register'>
            <a href='https://docs.google.com/document/d/1lvsmnS8b1aZTSnMA0palR8geH3ZSKgXlCl5_BXC3iuc/edit?usp=sharing'>
              <span id='registration'>More Info</span>
              <div className='liquid'></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Danza;
