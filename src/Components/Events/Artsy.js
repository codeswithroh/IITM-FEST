import EventPage from "../EventPage";
function Artsy() {
  return (
    <div>
      <div className='homepage-navigation'>
        <Link to='/'>
          <div className='homepage_logo'></div>
        </Link>
      </div>
      <EventPage title='Artsy Lens' image='artsy.png'>
        <li>
          Photos for the competition will be taken up from 21-23(5PM) by a
          G-form
        </li>
        <br />
        <li>Theme:General (any photo)</li>
        <br />
        <li>
          The best photo will be selected by a poll conducted using G-forms on
          24 and 25th
        </li>
        <br />
        <li>Each photo will be given a mark of 5,10 or 15.</li>
        <br />
        <li>The best photo will be uploaded on the Nallamlal House website.</li>
        <br />
      </EventPage>
      <div className='button-container-artsy'>
        <div className='registration-buttons'>
          <div className='register'>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://forms.gle/9TsmAG2Rp5dbBroZA'
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
              href='https://docs.google.com/document/d/1LbJxbouSu89kGVSxCHprOflCRmdQSve4wtRKnajqCy8/edit?usp=sharing'
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

export default Artsy;
