import React from "react";
import { Link } from "react-router-dom";
import "../../style/Capital.scss";
import CapitalImg from "../../../assets/Img/Capital.jpg";
import { motion } from "framer-motion";

export default function Capital({setSubject}) {
  const Content = {
    title: "Me constituer un capital",
    text:
      "Nous considérons chez DEMETIS que le conseil en gestion de patrimoine n’est pas réservé qu’a un certain type de clients. \n\n Il n’est pas nécessaire d’avoir 100 000€ à placer pour bénéficier de conseils de professionnels. \n\n Bien piloté, le fait d’épargner 100€ par mois peut permettre de se constituer un capital. Votre allocation sera faite dans le respect de vos objectifs et de votre profil risque.",
    img: CapitalImg,
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
          <p>{Content.text}</p>
          <Link className="button_gold" to="/contact" onClick={()=> setSubject({value: Content.title})}>
            Etre Contacté
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
