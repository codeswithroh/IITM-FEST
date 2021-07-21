import EventPage from "../EventPage";
import "../../styles/Buttons.css";
import { Link } from "react-router-dom";
function XFrontier() {
  return (
    <div>
      <div className='homepage-navigation'>
        <Link to='/'>
          <div className='homepage_logo'></div>
        </Link>
      </div>
      <EventPage title='XFrontier' image='xfrontier.png'>
        <li>
          A drive link will be mailed to the participants containing a zip
          folder on July 24 at 10 a.m.
        </li>
        <br />
        <li>
          The folder will consist of a basic UI in the form of png and a short
          video to represent the animations of the website
        </li>
        <br />
        <li>
          The participants will be given two days to replicate the given UI and
          add their touches to it.
        </li>
        <br />
        <li>
          On July 25, at 5 p.m. we will mail a google form where the
          participants will have to share their github repo link and also the
          link of the site they have hosted (although hosting is optional)
        </li>
        <br />
        <li>The participants can follow any techstack they want</li>
        <br />
      </EventPage>
      <div className='button-container'>
        <div className='registration-buttons'>
          <div className='register'>
            <a rel="noreferrer" target="_blank" href='https://forms.gle/pt7EmRGS1zuiSUY79'>
              <span id='registration'>Register Now</span>
              <div className='liquid other-liquid'></div>
            </a>
          </div>
        </div>
        <div className='registration-buttons'>
          <div className='register'>
            <a rel="noreferrer" target="_blank" href='https://docs.google.com/presentation/d/1f-stzFwI4PbFQIZ4G8ja8TXdU3MKT66koJcIQM-tbf8/edit?usp=sharing'>
              <span id='registration'>More Info</span>
              <div className='liquid'></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default XFrontier;
