import React from "react";
import "../styles/Home.css";
import Team from "../assets/homepage/team.svg";
import Tilt from "react-tilt";
export default function Home() {
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
            <Tilt
              className='Tilt'
              options={{ max: 25 }}
            >
              <div className='Tilt-inner'>
                <img src={Team} alt=''></img>
              </div>
            </Tilt>
          </div>
          <div className='home-about-text'>
            <p>
              Welcome to the Nallamala fest site ANVESHANA, a journey of self
              discovery.
            </p>

            <p>
              We know the saying -All work and no play makes Jack a dull boy.
            </p>

            <p>
              To get you out of your work-mode and add some colours of
              enjoyment, Nallamala house is here with some de-stressing candies
              for you all in the form of ANVESHANA.
            </p>

            <p>
              Making you go all sha la la la la, jamming on your favourite
              songs, some expert advices, coding and everything fun you need
              right now!!
            </p>

            <p>
              Wait for us to call you up for it via a meet, till then fill up
              the form and buckle up our enthusiasm🎊
            </p>
          </div>
        </div>
      </div>
      <div className='home-event'>
        <h1 id='event'>Events</h1>
        <div className='event-card-container'>
          <Tilt
            className='Tilt'
            options={{ max: 25 }}
          >
            <div className='Tilt-inner'>
              <div className='event-card'>
                <div className='event-card-content'>
                  <h1>Rhythm</h1>
                  <p>Event Details</p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt
            className='Tilt'
            options={{ max: 25 }}
          >
            <div className='Tilt-inner'>
              <div className='event-card'>
                <div className='event-card-content'>
                  <h1>War Of Words</h1>
                  <p>Event Details</p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt
            className='Tilt'
            options={{ max: 25 }}
          >
            <div className='Tilt-inner'>
              <div className='event-card'>
                <div className='event-card-content'>
                  <h1>X-Frontier</h1>
                  <p>Are you a web dev enthusiast? Then this is your chance to prove your skills.
                      What are you waiting for? Just register and let the coding begin. </p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt
            className='Tilt'
            options={{ max: 25 }}
          >
            <div className='Tilt-inner'>
              <div className='event-card'>
                <div className='event-card-content'>
                  <h1>Mental Health- A Talk</h1>
                  <p>Event Details</p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt
            className='Tilt'
            options={{ max: 25 }}
          >
            <div className='Tilt-inner'>
              <div className='event-card'>
                <div className='event-card-content'>
                  <h1>Artsy Lens</h1>
                  <p>Event Details</p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt
            className='Tilt'
            options={{ max: 25 }}
          >
            <div className='Tilt-inner'>
              <div className='event-card'>
                <div className='event-card-content'>
                  <h1>Github and GSOC</h1>
                  <p>Are you interested in contributing to open source? 
                      Then this is your chance to learn everything to get started.
                      Don't miss it. </p>
                  <button>Know More</button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt
            className='Tilt'
            options={{ max: 25 }}
          >
            <div className='Tilt-inner'>
              <div className='event-card'>
                <div className='event-card-content'>
                  <h1>Danza Festal</h1>
                  <p>Event Details</p>
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
