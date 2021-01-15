import React, { useContext, useEffect } from "react";
import Banner from "./Banner/Banner";
import Args from "./Args/Args";
import Services from "./Services/Services";
import Bio from "./Bio/Bio";
import { motion } from "framer-motion";
import { NavContext } from "../Context/NavContext";
import Slider from "./Slider/Slider";

export default function Home() {
  
  const [ logoSelect, setLogoSelect ] = useContext(NavContext);
 
  const pageVariant = {
    ini: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
    in: {
      opacity: 0,
    },
  };
  const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.4,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setLogoSelect(1);
  });
  return (
    <motion.div
      exit="out"
      initial="in"
      animate="ini"
      variants={pageVariant}
      transition={pageTransition}
    >
      <div id="home_container">
        <Banner />
        <Args />
        <Services />
        <Bio />
        <Slider />
      </div>
    </motion.div>
  );
}
