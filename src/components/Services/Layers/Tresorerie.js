import React from "react";
import "../../style/Tresorerie.scss";
import Grow from "../../../assets/Img/grow.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Tresorerie() {
  const Content = {
    title: "Optimiser la trésorerie de votre entreprise",
    text_1:
      "Il existe plusieurs solutions pour investir la trésorerie dite « excédentaire » :",
    text_2:
      "Cela peut se faire a travers un contrat de capitalisation permettant un accès a des placements garantis type fonds euros ou a des unités de comptes (actions, obligations, monétaire ou même immobilier) pour dynamiser votre allocation ;\n\n Via des SCPI (société civile de placements immobiliers), permettant de jouir de la performance d’immobilier géré ;\n\n Ou encore un compte titre permettant l’acquisition de titres vifs",
    img: Grow,
  };
  const pageVariant = {
    ini: {
      y: 0,
      x: 0,
      opacity: 1,
    },
    out: {
      x: "100vw",
      opacity: 0,
    },
    in: {
      x: "-100vw",
      opacity: 0,
    },
  };
  const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.4,
    delay: 0.4,
  };

  return (
    <motion.div
      exit="out"
      initial="in"
      animate="ini"
      variants={pageVariant}
      transition={pageTransition}
    >
      <div className="layer_container">
          <div className="layer_content">
          <h5>{Content.title}</h5>
          <p>{Content.text_1}</p>
          <p id="merge">{Content.text_2}</p>
          <Link className="button_gold" to="/contact">
            Etre Contacté
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
