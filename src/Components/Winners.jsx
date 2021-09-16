import React from "react";
import "../styles/Winners.css";
import Particles from "react-particles-js";
import Winner from "./Event-Winners/winners/winner.svg";

export default function Winners(props) {
  const winner = props.winner;
  const pics = [winner.pic1, winner.pic2, winner.pic3];
  const names = [winner.name1, winner.name2, winner.name3];
  const numbers = [1, 2, 3];
  const positions = ["st", "nd", "rd"];
  return (
    <div className="winner-container x-frontier">
      <Particles
        style={{ position: "absolute", inset: "0" }}
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div className="winner-content">
        <div className="winner-heading mt-4 font-bold">
          <img src={Winner} alt="winner" />
          <h1
            style={{
              fontSize: "2.5rem",
              textShadow:
                "0px 100px 80px rgba(0, 0, 0, 0.46), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.330673), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.274209), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.23), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.185791), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.129327)",
            }}
            className="winner"
          >
            <span style={{ fontSize: "3.8rem" }}>W</span>INNERS
          </h1>
        </div>
        <div
          style={{
            textAlign: "left",
            color: "white",
            textShadow:
              "0px 100px 80px rgba(0, 0, 0, 0.46), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.330673), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.274209), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.23), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.185791), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.129327)",
          }}
          className="event-winner"
        >
          <p style={{ margin: "0" }}>{winner.subheading}</p>
          <h2 style={{ fontSize: "2.8rem", margin: "0 0 1.5em 0" }}>
            {winner.heading}
          </h2>
        </div>
        <div className="winner-card-container">
          {numbers.map((number) => {
            return (
              <div key={number} className="winner-card px-4">
                <img
                  style={{
                    width: "5em",
                    height: "5em",
                    borderRadius: "50%",
                    marginTop: "1em",
                    objectFit: "cover",
                  }}
                  src={pics[number - 1]}
                  alt=""
                  className="winner-pic m-auto"
                />
                <div
                  style={{
                    fontSize: "1.8rem",
                    margin: "1em 0 0.5em 0",
                    fontFamily: "Exo",
                    fontWeight: "600",
                  }}
                  className="winner-position"
                >
                  {number}
                  {positions[number - 1]}
                </div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    fontFamily: "Exo",
                  }}
                  className="winner-name"
                >
                  {names[number - 1]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
