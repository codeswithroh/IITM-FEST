import React, { useEffect } from "react";
import "../styles/Home.css";
import Team from "../assets/homepage/team.svg";
import Tilt from "react-tilt";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {
    useEffect(() => {
        Aos.init({duration: 1000});
    });
  return (
    <div className='home'>
      <div className='home-hero'>
        <div className='home-hero-content'>
          <div className='home-hero-logo'></div>
          <div className='home-hero-text'>
            <p style={{ fontSize: "1.5rem" }}>Presents</p>
            <h1>ANVESHANA</h1>
            <div className='line-1'></div>
            <div className='line-2'></div>
            <h2>July 24 - July 25</h2>
          </div>
        </div>
      </div>
      <div className='home-about'>
        <h1>About ANVESHANA</h1>
        <div className='home-about-content'>
          <div className='home-about-pic'>
            <Tilt className='Tilt' options={{ max: 25 }}>
              <div className='Tilt-inner'>
                <img src={Team} alt=''></img>
              </div>
            </Tilt>
          </div>
          <div
            className='home-about-text'
          >
            <p data-aos='fade-down'>
              Welcome to the Nallamala fest site ANVESHANA, a journey of self
              discovery.
            </p>

            <p data-aos='fade-down'>
              We know the saying -All work and no play makes Jack a dull boy.
            </p>

            <p data-aos='fade-down'>
              To get you out of your work-mode and add some colours of
              enjoyment, Nallamala house is here with some de-stressing candies
              for you all in the form of ANVESHANA.
            </p>

            <p data-aos='fade-down'>
              Making you go all sha la la la la, jamming on your favourite
              songs, some expert advices, coding and everything fun you need
              right now!!
            </p>

            <p data-aos='fade-down'>
              Wait for us to call you up for it via a meet, till then fill up
              the form and buckle up our enthusiasm🎊
            </p>
          </div>
        </div>
      </div>
      <div className='home-event'>
        <h1 id='event'>Events</h1>
        <div className='event-card-container'>
          <Tilt className='Tilt' options={{ max: 25 }}>
            <div className='Tilt-inner'>
              <div data-aos='fade-right' className='event-card'>
                <div className='event-card-content'>
                  <h1>Rhythm</h1>
                  <p>
                    Close your eyes, Forget your Name, Forget everything else in
                    this world and Just go Insane🥳 Join the Musical event
                    Rthymn to explore new tunes.
                  </p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className='Tilt' options={{ max: 25 }}>
            <div className='Tilt-inner'>
              <div data-aos='fade-left' className='event-card'>
                <div className='event-card-content'>
                  <h1>War Of Words</h1>
                  <p>Event Details</p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className='Tilt' options={{ max: 25 }}>
            <div className='Tilt-inner'>
              <div data-aos='fade-right' className='event-card'>
                <div className='event-card-content'>
                  <h1>X-Frontier</h1>
                  <p>
                    Are you a web dev enthusiast? Then this is your chance to
                    prove your skills. What are you waiting for? Just register
                    and let the coding begin.{" "}
                  </p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className='Tilt' options={{ max: 25 }}>
            <div className='Tilt-inner'>
              <div data-aos='fade-left' className='event-card'>
                <div className='event-card-content'>
                  <h1>Mental Health- A Talk</h1>
                  <p>Event Details</p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className='Tilt' options={{ max: 25 }}>
            <div className='Tilt-inner'>
              <div data-aos='fade-right' className='event-card'>
                <div className='event-card-content'>
                  <h1>Artsy Lens</h1>
                  <p>
                    Set up the shot and wait for an expression, this is all what
                    photography is about. So let's create a statement without
                    uttering a word with your artsy lens📸📷
                  </p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className='Tilt' options={{ max: 25 }}>
            <div className='Tilt-inner'>
              <div data-aos='fade-left' className='event-card'>
                <div className='event-card-content'>
                  <h1>Workshop On Git and GitHub</h1>
                  <p>
                    Are you interested in contributing to open source? Then this
                    is your chance to learn everything to get started. Don't
                    miss it.
                  </p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className='Tilt' options={{ max: 25 }}>
            <div className='Tilt-inner'>
              <div data-aos='fade-right' className='event-card'>
                <div className='event-card-content'>
                  <h1>Danza Festal</h1>
                  <p>
                    Dance, Dance, Dance till you drop.Dance till the stars come
                    down from the rafters. Dust off your leg warmers and tease
                    up your hair, cheer up with DANZA FESTAL!!!
                  </p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className='Tilt' options={{ max: 25 }}>
            <div className='Tilt-inner'>
              <div data-aos='fade-left' className='event-card'>
                <div className='event-card-content'>
                  <h1>Gamespalooza</h1>
                  <p>
                    Event Details
                  </p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
