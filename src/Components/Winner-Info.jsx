import React from "react";
import Particles from "react-particles-js";
import Event from "./Event-Winner-Info/images/danza.png";

export default function WinnerInfo() {
  return (
    <div className="text-white font-mono">
      <Particles
        className="min-h-screen absolute inset-0"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 10,
              random: true,
            },
            move: {
              direction: "bottom",
              out_mode: "out",
            },
            line_linked: {
              enable: false,
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "remove",
              },
            },
            modes: {
              remove: {
                particles_nb: 10,
              },
            },
          },
        }}
      />
      <h1
        style={{
          textShadow:
            "0px 100px 80px rgba(0, 0, 0, 0.32), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.230033), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.190754), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.16), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.129246), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0899666)",
        }}
        className="text-4xl md:text-5xl text-center font-bold my-4 font-mono underline"
      >
        Danza Festal
      </h1>
      <div className="flex flex-col md:flex-row justify-evenly items-center w-full h-screen">
        <img
          className="w-40 md:w-80"
          style={{
            filter:
              "drop-shadow(0px 80px 138px rgba(0, 0, 0, 0.36)) drop-shadow(0px 33.4221px 57.6531px rgba(0, 0, 0, 0.258788)) drop-shadow(0px 17.869px 30.8241px rgba(0, 0, 0, 0.214599)) drop-shadow(0px 10.0172px 17.2797px rgba(0, 0, 0, 0.18)) drop-shadow(0px 5.32008px 9.17714px rgba(0, 0, 0, 0.145401)) drop-shadow(0px 2.21381px 3.81881px rgba(0, 0, 0, 0.101212))",
          }}
          src={Event}
          alt=""
        />
        <div style={{ maxWidth: "35em" }}>
          <p className="my-6 md:my-10">
            <span className="font-bold text-2xl md:text-3xl">
              Date of Event:{" "}
            </span>
            <span className="text-xl md:text-2xl">25th July, 2021</span>
          </p>
          <p className="my-6 md:my-10">
            <span className="font-bold text-2xl md:text-3xl">
              Time of Event:{" "}
            </span>
            <span className="text-xl md:text-2xl">2:00 p.m. - 3:00 p.m.</span>
          </p>
          <p className="my-4">
            <span className="font-bold text-2xl md:text-3xl">Organizers: </span>
            <span className="text-xl md:text-2xl">
              Aditi Krishana, Arushi Srivastava , Shalbany Manna
            </span>
          </p>
        </div>
      </div>
      <div className="h-full">
        <h1
          style={{
            textShadow:
              "0px 100px 80px rgba(0, 0, 0, 0.32), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.230033), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.190754), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.16), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.129246), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0899666)",
          }}
          className="text-3xl md:text-4xl text-center font-bold my-4 font-mono underline"
        >
          Event-Summary
        </h1>
        <p className="max-w-prose  sm:m-auto mt-2 text-sm sm:text-xl mx-4">
          On 25th July2021, the Dance Club of NALLAMALA HOUSE organized the
          event Danza Festal in the first-ever two-day seasonal fest ANVESHANA,
          which mainly focused on the motto “Adorning the Hobby with Danza
          Festal” and the theme was “Eastern as well as Western”. The event was
          open to all the IITM students and approximately 50 people were in
          attendance.The event was mainly focused on taking dance as a hobby and
          finding a new person inside you.
        </p>
        <p className="max-w-prose  sm:m-auto mb-4 text-sm sm:text-xl mx-4">
          The Event got a kick-off by one of the hosts of the event Shalbany
          Manna, and then was handed over to the other host Aditi Krishana. The
          hosts together shared their own perspectives towards dance and
          stimulated the attendees towards it. After their uplifting talk the
          event come into existence by the first performance of G V Divya Srita
          on the song Makhana synchronized everyone, headed by Samarth Jain on
          song small town girl was quite creative and expressing. The event
          became very lively after the exemplary and alluring performance by
          Arushi Srivastava on song Permission to dance (BTS), Crazy kiya re,
          her flawless dance mesmerized everyone. The event came to finale stage
          after the graceful performance of Shalbany Manna on a
          Bengali-classical song with great charisma. The closure of the event
          was done by the exhilarating and stimulative thanksgiving by the
          Secretary of NALLAMALA HOUSE Dheeraj Mukirala and came to an end by
          the benediction of Deputy Secretary of the respective house Shalini
          Singh.
        </p>
      </div>
    </div>
  );
}
