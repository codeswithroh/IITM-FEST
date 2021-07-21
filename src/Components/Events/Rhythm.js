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
      <EventPage title="Rhythm" image='Rhythm.png'>
        
    </EventPage>
    <div class='registration-buttons'>
        <div class='register'>
          <a href='https://forms.gle/1VmBR89M2XpgxyT2A'>
            <span id='registration'>Register Now</span>
            <div class='liquid'></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Rhythm;