import React from "react";
import "../../style/Invest.scss";
import InvestImg from "../../../assets/Img/invest.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Invest() {
  const Content = {
    title: "Investir dans l’immobilier",
    text:
      "L’immobilier est un des investissements préférés des français, il permet un effet de levier lorsqu’il est bien piloté mais il est aussi réputé pour être un placement sûr. \n\n La fiscalité des revenus fonciers est en revanche lourde et peut fortement baisser la rentabilité de votre investissement. \n\n Il est primordial avant tout investissement immobilier de procéder à un audit permettant de cibler les dispositifs ou modes de détentions les plus adaptés à votre situation. \n\n Votre investissement peut intervenir au travers d’une SCI, d’une SARL de famille, il peut aussi se faire sous un dispositif tel que le « loueur meublé non professionnel » ou même en nue-propriété. \n\n Vous souhaitez obtenir des informations sur nos solutions immobilières ?",
    img: InvestImg,
  };
  const pageVariant = {
    ini: {
      y: 0,
      x: 0,
      opacity: 1,
    },
    out: {
      x: "-100vw",
      opacity: 0,
    },
    in: {
      x: "100vw",
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
            <p>{Content.text}</p>
            <Link className="button_gold" to="/contact">
              Etre Contacté
            </Link>
          </div>
      </div>
    </motion.div>
  );
}
