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
      <EventPage title="Danza" image='danza.png'>
        
    </EventPage>
    <div class='registration-buttons'>
        <div class='register'>
          <a href='https://forms.gle/qSpZCyCcnNvs4xe46'>
            <span id='registration'>Register Now</span>
            <div class='liquid'></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Danza;