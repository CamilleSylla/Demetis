import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Arrow from "../../../assets/Icons/arrowGold.svg";
import Logo from "../../../assets/Logos/BlueBack.svg";
import { NavContext } from "../../Context/NavContext";
export default function Text() {
  const [logoSelect, setLogoSelect] = useContext(NavContext);
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

  function Down() {
    const elmnt = document.getElementById("args");
    elmnt.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div id="banner_title_container">
      <div id="banner_text">
        <div className="motion_services">
          <img className="_logo" src={Logo} alt="Logo" />
          <motion.div
            exit="out"
            initial="in"
            animate="ini"
            variants={pageVariant}
            transition={pageTransition}
            className="motion_text"
          >
            <p className="page_title">
              Ensemble, <br /> réinventons la gestion <br /> de patrimoine
            </p>
          </motion.div>
        </div>
        <h1 id="banner_title">Cabinet de conseil en gestion de patrimoine</h1>
        <div id="banner_buttons">
          <Link className="button_white" to="/services" onClick={() => setLogoSelect(0)}>
            Services
          </Link>
          <Link className="button_gold" to="/contact" onClick={() => setLogoSelect(1)}>
            Être contacté
          </Link>
        </div>
        <img id="down_arrow" src={Arrow} alt="Continuer" onClick={Down} />
      </div>
    </div>
  );
}
