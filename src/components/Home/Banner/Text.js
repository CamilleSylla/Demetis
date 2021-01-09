import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Arrow from "../../../assets/Icons/arrowGold.svg";
export default function Text() {
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
    <div id="banner_title_container">
      <div id="banner_text">
        <div className="motion_services">
          <motion.div
            exit="out"
            initial="in"
            animate="ini"
            variants={pageVariant}
            transition={pageTransition}
            className="motion_text"
          >
            <h4 className="banner_text_slogan">
              Ensemble, <br /> réinventons la gestion <br /> de patrimoine
            </h4>
          </motion.div>
        </div>
        <h1 id="banner_title">Cabinet de conseil en gestion de patrimoine</h1>
        <div id="banner_buttons">
          <Link className="button_white" to="/services">
            Services
          </Link>
          <Link className="button_gold" to="/">
            Être contacté
          </Link>
        </div>
        <img src={Arrow} alt="Continuer" />
      </div>
    </div>
  );
}
