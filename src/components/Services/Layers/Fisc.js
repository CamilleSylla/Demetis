import React from "react";
import "../../style/Fisc.scss";
import Arrow from "../../../assets/Icons/ArrowLongGold.svg";
import Family from '../../../assets/Icons/family.svg'
// import Handshake from '../../../assets/Icons/Handshake.svg'
import Routes from '../../../assets/Icons/Routes.svg'
import Taxes from '../../../assets/Icons/taxes.svg'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Fisc() {
  const pageVariant = {
    ini: {
        y: 0,
        x: 0,
        opacity: 1
    },
    out: {
        x: "100vh",
        opacity: 0
    },
    in: {
        x: "-100vw",
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
      <div id="fisc">
        <div id="fisc_content">
          <div id="fisc_content_text">
            <h5>Reduire mes impôts</h5>
            <p>
              Il existe plusieurs dispositifs permettant de payer moins
              d’impôts. Cela peut se faire via l’épargne ou par l’investissement
              (immobilier par exemple). La pertinence de ses dispositifs se fera
              en fonction de certains paramètres :
            </p>
            <div id="fisc_content_text_icons">
              <div>
                <img src={Family} alt="ID" />
                <p>Votre situation civile</p>
              </div>
              <div>
                <img src={Arrow} alt="ID" />
              </div>
              <div>
                <img src={Taxes} alt="ID" />
                <p>Votre situation fiscale</p>
              </div>
              <div>
                <img src={Arrow} alt="ID" />
              </div>
              <div>
                <img src={Routes} alt="ID" />
                <p>Nos préconisations</p>
              </div>
              
            </div>
            <p>Il est donc nécessaire de procéder à un audit en amont.</p>
            <Link className="button_gold" to="/contact">
              Etre contacté
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
