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
      <EventPage title="War Of Words" image='debate.png'>
        
    </EventPage>
    <div class='registration-buttons'>
        <div class='register'>
          <a href='https://forms.gle/fbGKNMySUyQ1xRSL8'>
            <span id='registration'>Register Now</span>
            <div class='liquid'></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WarOfWords;