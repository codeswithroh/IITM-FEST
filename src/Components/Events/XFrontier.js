import EventPage from "../EventPage";
import "../../styles/Buttons.css";
function XFrontier() {
  return (
    <div>
      <EventPage title='XFrontier' image='xfrontier.png'>
        <li>
            A drive link will be mailed to the participants containing a zip folder on July 24 at 10 a.m.
        </li>
        <br />
        <li>
        The folder will consist of a basic UI in the form of png and a short video to represent the animations of the website

        </li>
        <br />
        <li>
        The participants will be given two days to replicate the given UI and add their touches to it.
        </li>
        <br />
        <li>On July 25, at 5 p.m. we will mail a google form where the participants will have to share their github repo link and also the link of the site they have hosted (although hosting is optional)</li>
        <br />
        <li>The participants can follow any techstack they want</li>
        <br />
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

export default XFrontier;
