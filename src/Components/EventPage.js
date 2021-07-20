import classes from './Event.module.css';
import PosterBox from './PosterBox';
function EventPage(props) {
    const customProps = {
        height: props.height,
        width: props.width,
        objectFit: props.objectFit,
        image: props.image,
    }
    return (
        <div className={classes.EventPage}>
            <div className={classes.Left}>
                <h1>{props.title}</h1>
                <ul>{props.children}</ul>
            </div>
            <div className={classes.Right}>
                <PosterBox {...customProps}></PosterBox>
            </div>
        </div>
    );
}

export default EventPage;