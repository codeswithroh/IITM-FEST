import classes from './Event.module.css'
function PosterBox(props) {
    const style = {
        height: props.height,
        width: props.width,
        objectFit: props.objectFit,
    }
    return (
        <div style={style} className={classes.Poster}>
            <div style={style} className={classes.Box}></div>
            <div style={style} className={classes.Box1}></div>
            <img style={style} src={'../assets/images/' + props.image} alt='Banner'></img>
        </div>
    );
}

export default PosterBox;