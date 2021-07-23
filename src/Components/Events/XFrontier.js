import EventPage from "../EventPage";
function XFrontier() {
  return (
    <div>
      <EventPage title='XFrontier' image='xfrontier.png'>
      <li>A drive link will be mailed to the participants containing a zip folder.</li><br />
      <li>The folder will consist of a basic UI in the form of png and a short video to represent the animations of the website.</li><br />
      <li>It will contain another folder consisting of all the svgs of the UI.</li><br />
      <li>The participants will be given two days to replicate the given UI and add their touches to it.</li><br />
      <li>Before one or two hours of submission deadline we will mail a google form where they will have to share their github repo link and also the link of the site they have hosted (although hosting is optional).</li><br />
      <li>Extra points will be given for hosting.</li><br />      
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
