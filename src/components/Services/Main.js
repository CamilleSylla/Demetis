import React, { useContext } from "react";
import { ServicesContext } from "../Context/ServicesContext";
import { AnimatePresence } from "framer-motion";
import Services from "./Header/Services";
import Assurance from "./Layers/Assurance";
import Capital from "./Layers/Capital";
import Epargne from "./Layers/Epargne";
import Fisc from "./Layers/Fisc";
import Invest from "./Layers/Invest";
import Retraite from "./Layers/Retraite";
import Transmission from "./Layers/Transmission";
import Tresorerie from "./Layers/Tresorerie";
import { motion } from "framer-motion";

export default function Main() {
  const [show, setShow] = useContext(ServicesContext);
  const top = document.getElementById("top");
  const middle = document.getElementById("middle");
  const bottom = document.getElementById("bottom");
  const Components = [
    <Fisc />,
    <Retraite />,
    <Capital />,
    <Epargne />,
    <Invest />,
    <Assurance />,
    <Transmission />,
    <Tresorerie />,
  ];

  function toShow() {
    switch (show.component) {
      case 0:
        return Components[show.component];
      case 1:
        return Components[show.component];
      case 2:
        return Components[show.component];
      case 3:
        return Components[show.component];
      case 4:
        return Components[show.component];
      case 5:
        return Components[show.component];
      case 6:
        return Components[show.component];
      case 7:
        return Components[show.component];
    }
  }
  const pageVariant = {
    ini: {
        opacity: 1
    },
    out: {
        opacity: 0
    },
    in: {
        opacity: 0
    }
}
const pageTransition = {
    type: "tween",
    ease:"easeOut",
    duration: .4,
}
  return (
    <motion.div
      exit="out"
      initial="in"
      animate="ini"
      variants={pageVariant}
      transition={pageTransition}
    >
      <div>
        <Services />
        <AnimatePresence exitBeforeEnter>
          <div id="services_all">{toShow()}</div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
