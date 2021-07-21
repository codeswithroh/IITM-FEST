import EventPage from "../EventPage";
import "../../styles/Buttons.css";
import { Link } from "react-router-dom";
function Github() {
  return (
    <div>
      <div className='homepage-navigation'>
        <Link to='/'>
          <div className='homepage_logo'></div>
        </Link>
      </div>
      <EventPage title='Github' image='github.png'>
        <br />
        <li>Download and install git</li>
        <br />
        <br />
        <li>Download and install your favorite IDE.</li>
        <br />
        <br />
        <li>Create a GitHub account and don’t forget the credentials</li>
        <br />
        <br />
        <li>
          Click on the More Info button to get all the instructions regarding
          the installation process.
        </li>
      </EventPage>
      <div className='button-container'>
        <div className='registration-buttons'>
          <div className='register'>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://forms.gle/9t7jFbReXJMRruSC9'
            >
              <span id='registration'>Register Now</span>
              <div className='liquid other-liquid'></div>
            </a>
          </div>
        </div>
        <div className='registration-buttons'>
          <div className='register'>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://docs.google.com/document/d/1lI2zhpN-MQFpqW0CyO0_WDonnwoJQxBUx9UCsNkmgQg/edit'
            >
              <span id='registration'>More Info</span>
              <div className='liquid'></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;
