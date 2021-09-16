import React from "react";
import Winners from "../Winners";
import Pic1 from "./winners/esport/pic1.jpg";
import Pic2 from "./winners/esport/pic2.jpg";
import Pic3 from "./winners/esport/pic3.jpg";

export default function EsportWin() {
  const eventwin = {
    pic1: Pic1,
    pic2: Pic2,
    pic3: Pic3,
    name1: "Shankar T",
    name2: "Anish 10",
    name3: "Naveen Kumawat",
    heading: "Games Palooza",
    subheading: "An esport event",
  };
  return (
    <div>
      <Winners winner={eventwin} />
    </div>
  );
}
