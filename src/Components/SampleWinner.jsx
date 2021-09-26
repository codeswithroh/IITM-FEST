import React from "react";
import "../styles/Winners.css";
import Particles from "react-particles-js";
import Winner from "./Event-Winners/winners/winner.svg";
import Pic1 from "./Event-Winners/winners/xfrontier/pic1.jpg";
import Pic2 from "./Event-Winners/winners/xfrontier/pic2.jpg";
import Pic3 from "./Event-Winners/winners/xfrontier/pic3.jpg";
import pic1 from "./Event-Winners/winners/photography/pic1.jpg";
import pic2 from "./Event-Winners/winners/photography/pic2.jpg";
import pic3 from "./Event-Winners/winners/photography/pic3.jpg";

export default function SampleWinner() {
  const positions = ["st", "nd", "rd"];
  const xfrontiernames = [
    "Vaibhav Kesharwani",
    " Mayur Rajurkar",
    "Shalbany Manna",
  ];
  const xfrontierpictures = [Pic1, Pic2, Pic3];

  const artsylensnames = ["Arul Gilbert", "Arun P", "Harsh Narendra Patil"];
  const artsylenspictures = [pic1, pic2, pic3];
  const artsylensphotos = [
    "https://drive.google.com/file/d/1V_pRNhlgqu7g8s00Z21jOoqnlC1GwU-9/view",
    "https://drive.google.com/file/d/16jd4LhIC74w7tzHxdXzQ-8rOxy6XUaYZ/view",
    "https://drive.google.com/file/d/1m-MGF8gWDaj14N2YAqAFt792lnqUfhBK/view",
  ];

  return (
    <div className="winner-container x-frontier min-h-screen">
      <div className="hidden md:block">
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
      </div>
      {/* top heading */}
      <div className="absolute top-4 flex justify-center items-center">
        <div>
          <img src={Winner} alt="" />
        </div>
        <h1
          style={{
            textShadow:
              "0px 100px 80px rgba(0, 0, 0, 0.46), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.330673), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.274209), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.23), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.185791), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.129327)",
          }}
          className="text-center text-5xl text-white font-bold font-mono"
        >
          <span className="text-7xl">W</span>INNERS
        </h1>
      </div>

      {/* xfrontier event heading */}
      <div className="min-h-screen w-full text-center">
        <div className="text-left absolute top-40 left-10 text-white">
          <p
            style={{
              textShadow:
                "0px 100px 80px rgba(0, 0, 0, 0.46), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.330673), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.274209), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.23), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.185791), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.129327)",
            }}
          >
            A FrontEnd Event
          </p>
          <h2
            style={{
              textShadow:
                "0px 100px 80px rgba(0, 0, 0, 0.46), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.330673), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.274209), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.23), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.185791), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.129327)",
            }}
            className="text-3xl font-bold md:text-5xl"
          >
            X-Frontier
          </h2>
        </div>
        {/* x-frontier winner cards */}
        <div className="flex flex-col md:flex-row md:w-full justify-around items-center mt-60">
          {/* cards */}
          {xfrontiernames.map((name, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-lg sample-winner-card my-8 w-60 h-60 md:h-80 md:w-80"
              >
                <img
                  className="md:w-40 md:h-40 w-24 h-24 rounded-full mx-auto object-cover pt-4"
                  src={xfrontierpictures[index]}
                  alt=""
                />
                <h3 className="font-bold text-3xl py-4 md:text-4xl">
                  {index + 1}
                  {positions[index]}
                </h3>
                <h3 className="font-medium text-2xl mb-3 md:text-3xl">
                  {name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* artsy lens event heading */}
      <div className="min-h-screen w-full text-center mx-auto">
        <div className="text-left text-white mr-auto w-full ml-8">
          <p
            style={{
              textShadow:
                "0px 100px 80px rgba(0, 0, 0, 0.46), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.330673), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.274209), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.23), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.185791), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.129327)",
            }}
          >
            A Photography Event
          </p>
          <h2
            style={{
              textShadow:
                "0px 100px 80px rgba(0, 0, 0, 0.46), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.330673), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.274209), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.23), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.185791), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.129327)",
            }}
            className="text-3xl font-bold md:text-5xl"
          >
            Artsy Lens
          </h2>
        </div>
        {/* artsylens winner cards */}
        <div className="flex flex-col md:flex-row md:w-full justify-around items-center mt-5 z-40 md:absolute">
          {/* artsylens cards */}
          {artsylensnames.map((name, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-lg sample-winner-card my-8 w-60 h-70 md:h-80 md:w-80"
              >
                <img
                  className="md:w-40 md:h-40 w-24 h-24 rounded-full mx-auto object-cover pt-4"
                  src={artsylenspictures[index]}
                  alt=""
                />
                <h3 className="font-bold text-3xl py-4 md:text-4xl">
                  {index + 1}
                  {positions[index]}
                </h3>
                <h3 className="font-medium text-2xl mb-3 md:text-3xl">
                  {name}
                </h3>
                <a
                  className="cursor-pointer"
                  href={artsylensphotos[index]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-camera fa-2x mb-2"></i>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
