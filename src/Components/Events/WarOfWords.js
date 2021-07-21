import EventPage from "../EventPage";
import "../../styles/Buttons.css";
import { Link } from "react-router-dom";
function WarOfWords() {
  return (
    <div>
      <div className='homepage-navigation'>
        <Link to='/'>
          <div className='homepage_logo'></div>
        </Link>
      </div>
      <EventPage title='War Of Words' image='debate.png'></EventPage>
      <div className='button-container'>
        <div className='registration-buttons'>
          <div className='register'>
            <a href='https://forms.gle/9TsmAG2Rp5dbBroZA'>
              <span id='registration'>Register Now</span>
              <div className='liquid other-liquid'></div>
            </a>
          </div>
        </div>
        <div className='registration-buttons'>
          <div className='register'>
            <a href='https://forms.gle/9TsmAG2Rp5dbBroZA'>
              <span id='registration'>More Info</span>
              <div className='liquid'></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarOfWords;
