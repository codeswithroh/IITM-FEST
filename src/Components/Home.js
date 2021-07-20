import classes from './Home.module.css';

function Home() {
    return (
        <div className={classes.Home}>
        <div className={classes.LogoModal}>
            <img src='../assets/images/nallamalalogo.png' alt='Nallamala Logo'></img>
        </div>
        </div>
    )
}

export default Home;