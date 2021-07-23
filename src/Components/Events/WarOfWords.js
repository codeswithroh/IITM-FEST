import EventPage from "../EventPage";
function WarOfWords() {
  return (
    <div>
      <div className='homepage-navigation'>
        <Link to='/'>
          <div className='homepage_logo'></div>
        </Link>
      </div>
      <EventPage title='War Of Words' image='debate.png'>
        <li>No use of abusive language</li>
        <br />
        <li>
          No expression will be accepted which is offensive, personal or
          defamatory in nature.
        </li>
        <br />
        <li>Avoid making emotional appeals.</li>
        <br />
        <li>
          Debaters should always be respectful of others, particularly their
          opponents.
        </li>
        <br />
        <li>
          There cannot be any interruptions, Speakers must wait for their turn
        </li>
        <br />
        <li>Speakers should speak slowly and clearly</li>
        <br />
        <li>Speakers are requested not to go out of the topic</li>
      </EventPage>
      <div className='button-container'>
        <div className='registration-buttons'>
          <div className='register'>
            <a rel="noreferrer" target="_blank" href='https://forms.gle/fbGKNMySUyQ1xRSL8'>
              <span id='registration'>Register Now</span>
              <div className='liquid other-liquid'></div>
            </a>
          </div>
        </div>
        <div className='registration-buttons'>
          <div className='register'>
            <a rel="noreferrer" target="_blank" href='https://docs.google.com/document/d/15gcMFjdDrVEGNDwD32z5HmX3fBqk5P7yNVcr2NnfQpo/edit?usp=sharing'>
              <span id='registration'>More Info</span>
              <div className='liquid'></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarOfWords;
