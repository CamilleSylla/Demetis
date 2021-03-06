import React from "react";
import "../../style/Epargne.scss";
import Bill from "../../../assets/Img/bill.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Epargne({setSubject}) {
  const Content = {
    title: "Placer mon épargne",
    text:
      "Dans un contexte où les placements garantis ne rémunèrent presque plus, avec des fonds euros ou des livrets tournant autour de 1% de performance par an, il est nécessaire d’être accompagné par des professionnels afin d’étudier les meilleures solutions tout en restant fidèle à vos objectifs et votre profil de risque. \n\n Vous bénéficierez d’une étude prenant en compte le contexte macroéconomique, et mettant en avant la diversification des actifs.",
    img: Bill,
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
