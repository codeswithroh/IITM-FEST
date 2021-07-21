import EventPage from "../EventPage";
import { Link } from "react-router-dom";
import "../../styles/Buttons.css";
function Artsy() {
  return (
    <div>
      <div className='homepage-navigation'>
        <Link to='/'>
          <div className='homepage_logo'></div>
        </Link>
      </div>
      <EventPage title='Artsy' image='artsy.png'>
        <li>
          Photos for the competition will be taken up from 20-23(5PM) by a
          G-form- A poster will be released for the same
        </li>
        <br />
        <li>
          Only the entries from the people belonging to Nallamala House will be
          accepted Theme:General (any photo)
        </li>
        <br />
        <li>
          The best photo will be selected by a poll conducted using G-forms on
          24 and 25th – A poster will be released to attract the members of the
          house to vote.
        </li>
        <br />
        <li>
          Only people belonging to Nallamala House can take part in the poll and
          the polling will be open only on 24 and 25
        </li>
        <br />
        <li>Each photo will be given a mark of 5,10 or 15</li>
        <br />
        <li>
          A sample poll is{" "}
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSd3F_iok2ygOmF7YXYK8IfcQxwewgP5EiiAW8ORRA0UDxrI1w/viewform'>
            Here
          </a>
        </li>
        <br />
        <li>The best photo will be uploaded on the Nallamlal House website.</li>
        <br />
      </EventPage>
      <div className="button-container-artsy">
        <div className='registration-buttons'>
          <div className='register'>
            <a rel="noreferrer" target="_blank" href='https://forms.gle/9TsmAG2Rp5dbBroZA'>
              <span id='registration'>Register Now</span>
              <div className='liquid other-liquid'></div>
            </a>
          </div>
        </div>
        <div className='registration-buttons'>
          <div className='register'>
            <a rel="noreferrer" target="_blank" href='https://docs.google.com/document/d/1LbJxbouSu89kGVSxCHprOflCRmdQSve4wtRKnajqCy8/edit?usp=sharing'>
              <span id='registration'>More Info</span>
              <div className='liquid'></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artsy;
