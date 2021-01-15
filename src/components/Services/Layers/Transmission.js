import React from "react";
import "../../style/Transmission.scss";
import Transmi from "../../../assets/Img/Transmi.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Transmission({setSubject}) {
  const Content = {
    title: "Préparer votre transmission",
    text_1:
      "D’après un sondage Opinionway, 74% des français de plus de 45 ans n’ont pas préparé la transmission de leur patrimoine.",
    text_2:
      " Les enjeux peuvent pourtant être de dizaines de milliers d’euros.",
    text_3:
      "La législation peut permettre, au travers de différents outils, une optimisation de la transmission qui peut se traduire par le fait de payer moins de droits de succession pour vos héritiers.",
    img: Transmi,
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
            <p>{Content.text_2}</p>
            <p>{Content.text_3}</p>
          <Link className="button_gold" to="/contact" onClick={()=> setSubject({value: Content.title})}>
            Etre Contacté
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
