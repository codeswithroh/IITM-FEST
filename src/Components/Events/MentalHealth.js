import EventPage from "../EventPage";
function MentalHealth() {
  return (
    <div>
      <div className='homepage-navigation'>
        <Link to='/'>
          <div className='homepage_logo'></div>
        </Link>
      </div>
      <EventPage title='Stress and Health Management' image='mental.png'>
        <li>Kindly maintain decorum of the event.</li>
        <br />
        <li>Use of unparliamentary language is strictly forbidden.</li>
        <br />
        <li>
          Every participant will be given 2-3 minutes to share their views.
        </li>
        <br />
        <li>
          Please keep in mind not to bring political, religious and other
          discriminatory discussions to the meeting.
        </li>
        <br />
      </EventPage>
      <div className='button-container'>
        <div className='registration-buttons'>
          <div className='register'>
            <a rel="noreferrer" target="_blank" href='https://forms.gle/5VHPJZSBPbnj9wfK8'>
              <span id='registration'>Register Now</span>
              <div className='liquid other-liquid'></div>
            </a>
          </div>
        </div>
        <div className='registration-buttons'>
          <div className='register'>
            <a rel="noreferrer" target="_blank" href='https://docs.google.com/document/d/1HfHGuhy57glgqCM_KTYufoN98LZcWtUnO3ODbwmsGUo/edit?usp=sharing'>
              <span id='registration'>More Info</span>
              <div className='liquid'></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentalHealth;
