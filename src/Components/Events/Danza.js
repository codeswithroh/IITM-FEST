import EventPage from "../EventPage";
import "../../styles/Buttons.css";
function Danza() {
  return (
    <div>
      <EventPage title="Danza" image='danza.png'>
        
    </EventPage>
    <div class='registration-buttons'>
        <div class='register'>
          <a href='https://dare2compete.com/f/envisage-2021-techno-main-salt-lake-6356'>
            <span id='registration'>Register Now</span>
            <div class='liquid'></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Danza;