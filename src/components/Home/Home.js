import React from "react";
import Banner from "./Banner/Banner";
import Args from "./Args/Args";
import Services from "./Services/Services";
import Bio from "./Bio/Bio";

export default function Home() {
  return (
    <div>
      <Banner />
      <Args />
      <Services />
      <Bio />
    </div>
  );
}
