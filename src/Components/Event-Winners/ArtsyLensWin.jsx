import React from "react";
import Winners from "../Winners";
import Pic1 from "./winners/photography/pic1.jpg";
import Pic2 from "./winners/photography/pic2.jpg";
import Pic3 from "./winners/photography/pic3.jpg";

export default function ArtsyLensWin() {
  const eventwin = {
    pic1: Pic1,
    pic2: Pic2,
    pic3: Pic3,
    name1: "Arul Gilbert",
    name2: "Arun P",
    name3: "Harsh Narendra Patil",
    heading: "Artsy Lens",
    subheading: "A photography event",
  };
  return (
    <div>
      <Winners winner={eventwin} />
    </div>
  );
}
