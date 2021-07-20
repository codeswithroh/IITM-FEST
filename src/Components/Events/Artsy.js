import EventPage from "../EventPage";
function Artsy() {
  return (
    <div>
      <EventPage title="Artsy"  height='550px' width='400px' objectFit='initial' image='artsy.png'>
        <li>Photos for the competition will be taken up from 20-23(5PM) by a G-form- A poster will be released for the same</li><br/>
        <li>Only the entries from the people belonging to Nallamala House will be accepted Theme:General (any photo)</li><br/>
        <li>The best photo will be selected by a poll conducted using G-forms on 24 and 25th – A poster will be released to attract the members of the house to vote.</li><br/>
        <li>Only people belonging to Nallamala House can take part in the poll and the polling will be open only on 24 and 25</li><br/>
        <li>Each photo will be given a mark of 5,10 or 15</li><br/>
        <li>A sample poll is <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3F_iok2ygOmF7YXYK8IfcQxwewgP5EiiAW8ORRA0UDxrI1w/viewform">Here</a></li><br/>
        <li>The best photo will be uploaded on the Nallamlal House website.</li><br/>
    </EventPage>
    </div>
  );
}

export default Artsy;