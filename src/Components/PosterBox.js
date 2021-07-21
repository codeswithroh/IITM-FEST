import classes from "./Event.module.css";
import Aos from "aos";
import { useEffect } from "react";
function PosterBox(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const style = {
    height: props.height,
    width: props.width,
    objectFit: props.objectFit,
  };
  return (
    <div style={style} className={classes.Poster}>
      <div style={style} className={classes.Box}></div>
      <div style={style} className={classes.Box1}></div>
      <img
        data-aos='fade-left'
        style={style}
        src={"../assets/images/" + props.image}
        alt='Banner'
      ></img>
    </div>
  );
}

export default PosterBox;
