import React from "react";
import Banner from "./Banner/Banner";
import Args from "./Args/Args";
import Services from "./Services/Services";
import Bio from "./Bio/Bio";

export default function Home() {
  const top = document.getElementById("top");
        const middle = document.getElementById("middle");
        const bottom = document.getElementById("bottom");
  return (
    <div>
      <Banner />
      <Args />
      <Services />
      <Bio />
    </div>
  );
}
