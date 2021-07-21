import EventPage from "../EventPage";
import "../../styles/Buttons.css";
import { Link } from "react-router-dom";
function MentalHealth() {
  return (
    <div>
      <div className='homepage-navigation'>
        <Link to='/'>
          <div className='homepage_logo'></div>
        </Link>
      </div>
      <EventPage title="Stress and Health Management" image='MentalHeatlth.png'>
        
    </EventPage>
    <div class='registration-buttons'>
        <div class='register'>
          <a href='https://forms.gle/5VHPJZSBPbnj9wfK8'>
            <span id='registration'>Register Now</span>
            <div class='liquid'></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MentalHealth;