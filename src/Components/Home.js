import React, { useEffect } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-hero-content">
          <div className="home-hero-logo"></div>
          <div className="home-hero-text">
            <p style={{ fontSize: "1.5rem" }}>Presents</p>
            <h1>ANVESHANA</h1>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <h2>July 24 - July 25</h2>
          </div>
        </div>
      </div>
      <div className="home-about">
        {/* <h1>About ANVESHANA</h1> */}
        <div className="home-about-content">
          <div className="home-about-pic">
            <Tilt className="Tilt" options={{ max: 25 }}>
              <div className="Tilt-inner">
                <img
                  data-aos="zoom-in-up"
                  src="../assets/homepage/team.svg"
                  alt=""
                ></img>
              </div>
            </Tilt>
          </div>
          <div className="home-about-text">
            <p data-aos="fade-down">
              Welcome to the Nallamala fest site ANVESHANA, a journey of self
              discovery.
            </p>

            <p data-aos="fade-down">
              We know the saying -All work and no play makes Jack a dull boy.
            </p>

            <p data-aos="fade-down">
              To get you out of your work-mode and add some colours of
              enjoyment, Nallamala house is here with some de-stressing candies
              for you all in the form of ANVESHANA.
            </p>

            <p data-aos="fade-down">
              Making you go all sha la la la la, jamming on your favourite
              songs, some expert advices, coding and everything fun you need
              right now!!
            </p>

            <p data-aos="fade-down">
              Wait for us to call you up for it via a meet, till then fill up
              the form and buckle up our enthusiasm????
            </p>
          </div>
        </div>
      </div>
      <div className="home-event">
        <h1 className="font-bold" id="event">
          Events
        </h1>
        <div className="event-card-container">
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="Tilt-inner">
              <div data-aos="zoom-in-right" className="event-card">
                <div className="event-card-content">
                  <h1>Flutter Rush</h1>
                  <p>
                    NALLAMALA HOUSE is proud to announce the First Ever Cash
                    Prize Event in the IIT Madras BSc Degree Program. as part of
                    our Seasonal 2 Day Fest :- ANVESHANA . We present to you our
                    Flutter coding competition " Flutter Rush ". Learn, Code and
                    Connect.
                  </p>
                  <Link to="/flutter">
                    <button className="btn event-btn">Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="Tilt-inner">
              <div data-aos="zoom-in-right" className="event-card">
                <div className="event-card-content">
                  <h1>Rhythm</h1>
                  <p>
                    Close your eyes, Forget your Name, Forget everything else in
                    this world and Just go Insane???? Join the Musical event
                    rhythm to explore new tunes.
                  </p>
                  <Link to="/rhythm">
                    <button className="btn event-btn">Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="Tilt-inner">
              <div data-aos="zoom-in-left" className="event-card">
                <div className="event-card-content">
                  <h1>War Of Words</h1>
                  <p>
                    Debate, a gladiatorial combat of the intellect. Welcome to
                    battle of words with a motive; Small minds discuss people,
                    average minds discuss events, great minds discuss ideas .
                    Incubate your idea and see if it conquers the world.
                  </p>
                  <p>PS: If you can't convince them, confuse them ;)</p>
                  <Link to="/warofwords">
                    <button className="btn event-btn">Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="Tilt-inner">
              <div data-aos="zoom-in-right" className="event-card">
                <div className="event-card-content">
                  <h1>X-Frontier</h1>
                  <p>
                    Are you a web dev enthusiast? Then this is your chance to
                    prove your skills. What are you waiting for? Just register
                    and let the coding begin.{" "}
                  </p>
                  <Link to="/xfrontier">
                    <button className="btn event-btn">Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="Tilt-inner">
              <div data-aos="zoom-in-left" className="event-card">
                <div className="event-card-content">
                  <h1>Mental Health- A Talk</h1>
                  <p>
                    Depression is a flaw in chemistry not a character. If you
                    are going through any stress or anxiety pressure or want a
                    booster then get connected to the talk-show as "To be
                    healthy as a whole ,mental wellness plays a role"
                  </p>
                  <Link to="/mental-health">
                    <button className="btn event-btn">Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="Tilt-inner">
              <div data-aos="zoom-in-right" className="event-card">
                <div className="event-card-content">
                  <h1>Artsy Lens</h1>
                  <p>
                    Set up the shot and wait for an expression, this is all what
                    photography is about. So let's create a statement without
                    uttering a word with your artsy lens????????
                  </p>
                  <Link to="/artsy">
                    <button className="btn event-btn">Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="Tilt-inner">
              <div data-aos="zoom-in-left" className="event-card">
                <div className="event-card-content">
                  <h1>Workshop On Git and GitHub</h1>
                  <p>
                    Are you interested in contributing to open source? Then this
                    is your chance to learn everything to get started. Don't
                    miss it.
                  </p>
                  <Link to="/github">
                    <button className="btn event-btn">Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="Tilt-inner">
              <div data-aos="zoom-in-right" className="event-card">
                <div className="event-card-content">
                  <h1>Danza Festal</h1>
                  <p>
                    Dance, Dance, Dance till you drop.Dance till the stars come
                    down from the rafters. Dust off your leg warmers and tease
                    up your hair, cheer up with DANZA FESTAL!!!
                  </p>
                  <Link to="/danza">
                    <button className="btn event-btn">Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="Tilt-inner">
              <div data-aos="zoom-in-left" className="event-card">
                <div className="event-card-content">
                  <h1>Gamespalooza</h1>
                  <p>
                    "Winners never surrender" making this phrase true ,we the
                    adherents of NALLAMALA HOUSE coming up with GamesPalooza to
                    unleash your ultimate and bring on the buff of e-sports!!!
                  </p>
                  <Link to="/esport">
                    <button className="btn event-btn">Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
