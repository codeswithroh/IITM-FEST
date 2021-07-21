import classes from './Event.module.css';
import PosterBox from './PosterBox';
import "../styles/Buttons.css";
import { FcCalendar } from 'react-icons/fc'
function EventPage(props) {
    return (
        <div className={classes.EventPage}>
            <div className={classes.Right}>
                <PosterBox image={props.image}></PosterBox>
            </div>
            <div className={classes.Left}>
                <h1>{props.title}</h1>
                <div className={classes.DateIcon}>
                <FcCalendar /> {props.date}
                </div>
                <ul>{props.children}</ul>
                <div class='registration-buttons'>
                    <div class='register'>
                    <a href={props.link}>
                        <span id='registration'>Register Now</span>
                        <div class='liquid'></div>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventPage;