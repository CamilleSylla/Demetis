import React from "react";
import Banner from "./Banner/Banner";
import Args from "./Args/Args";
import Services from "./Services/Services";
import Bio from "./Bio/Bio";
import { motion } from "framer-motion";

export default function Home() {
  const top = document.getElementById("top");
  const middle = document.getElementById("middle");
  const bottom = document.getElementById("bottom");
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
  return (
    <motion.div
      exit="out"
      initial="in"
      animate="ini"
      variants={pageVariant}
      transition={pageTransition}
    >
      <div>
        <Banner />
        <Args />
        <Services />
        <Bio />
      </div>
    </motion.div>
  );
}
