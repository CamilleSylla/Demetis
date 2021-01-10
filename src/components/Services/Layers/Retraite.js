import React from "react";
import "../../style/Retraite.scss";
import Vieux from "../../../assets/Img/vieux.jpg";
import Old from "../../../assets/Icons/Old.svg";
import Grow from "../../../assets/Icons/grow.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Retraite() {
  const Content = {
    img: Vieux,
    icons: Old,
    icons_2: Grow,
    title: "Préparer ma retraite",
    text:
      "D’après la DREES, Le taux de remplacement du dernier salaire d’un cadre est de 60% au jour de la retraite. \n\n Selon certaines projections, il pourrait passer à 45% pour la génération de salarié née à partir de 1977.",
    text_2: "En ajoutant à cela un contexte démographique peu favorable :",
    desc:
      "D’après l’INSEE, en 2015 nous étions 16,2 millions de personnes âgés de plus de 60 ans en France",
    desc_2:
      "Toujours d’après la même étude, nous devrions amener ce chiffre à 24,3 millions en 2050, soit une augmentation de 50%.",
    text_3:
      "Il est primordial de préparer sa retraite afin de compléter les prestations du régime obligatoire qui pourraient être amenés à diminuer au fil du temps.",
  };
  const pageVariant = {
    ini: {
        y: 0,
        x: 0,
        opacity: 1
    },
    out: {
        x: "-100vw",
        opacity: 0
    },
    in: {
        x: "100vw",
        opacity: 0
    }
}
const pageTransition = {
    type: "tween",
    ease:"easeOut",
    duration: .4,
    delay: 0.4

}

  return (
    <motion.div
      exit="out"
      initial="in"
      animate="ini"
      variants={pageVariant}
      transition={pageTransition}
    >
      <div id="retraite">
        <div id="retraite_container">
          <div id="retraite_first">
            <img src={Content.img} alt="Personnnes agés" />
            <div>
              <h5>{Content.title}</h5>
              <p>{Content.text}</p>
            </div>
          </div>
          <div id="retraite_second">
            <p>{Content.text_2}</p>
            <div id="retraite_details">
              <img src={Content.icons} alt="profile personne agé" />
              <p>{Content.desc}</p>
              <img src={Content.icons_2} alt="croissance" />
              <p>{Content.desc_2}</p>
            </div>
          </div>
          <p className="spacing-top">{Content.text_3}</p>
        </div>
        <Link className="button_gold" to="/contact">
          Etre Contacté
        </Link>
      </div>
    </motion.div>
  );
}
