import React from "react";
import { motion } from "framer-motion";

export default function Text() {
  const Sentence = "Un audit détaillé,\n des préconisations adaptées";
  const pageVariant = {
    ini: {
      y: 0,
      opacity: 1,
    },
    out: {
      y: "-50vh",
      opacity: 0,
    },
    in: {
      y: "50vh",
      opacity: 0,
    },
  };
  const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 1,
  };
  return (
    <div className="motion_services">
<motion.div
      exit="out"
      initial="in"
      animate="ini"
      variants={pageVariant}
      transition={pageTransition}
      className="motion_text"
    >
      <h4 className="banner_text_slogan_services">{Sentence}</h4>
    </motion.div>
    </div>
    
  );
}
