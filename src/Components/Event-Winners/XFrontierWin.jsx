import React from "react";
import Winners from "../Winners";
import Pic1 from "./winners/xfrontier/pic1.jpg";
import Pic2 from "./winners/xfrontier/pic2.jpg";
import Pic3 from "./winners/xfrontier/pic3.jpg";

export default function XFrontierWin() {
  const eventwin = {
    pic1: Pic1,
    pic2: Pic2,
    pic3: Pic3,
    name1: "Vaibhav Kesharwani",
    name2: " Mayur Rajurkar",
    name3: "Shalbany Manna",
    heading: "X-Frontier",
    subheading: "A front-end hackathon",
  };
  return (
    <div>
      <Winners winner={eventwin} />
    </div>
  );
}
