import React, { useContext, useEffect } from "react";
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
import { NavContext } from "../Context/NavContext";

import UpArrow from "../../assets/Icons/arrowBlue.svg";
import { ContactContext } from "../Context/ContactContext";

export default function Main() {
  const [show, setShow] = useContext(ServicesContext);
  const [logoSelect, setLogoSelect] = useContext(NavContext);
  const [subject, setSubject] = useContext(ContactContext)
  const Components = [
    <Fisc setSubject={setSubject}/>,
    <Retraite setSubject={setSubject}/>,
    <Capital setSubject={setSubject}/>,
    <Epargne setSubject={setSubject}/>,
    <Invest setSubject={setSubject}/>,
    <Assurance setSubject={setSubject}/>,
    <Transmission setSubject={setSubject}/>,
    <Tresorerie setSubject={setSubject}/>,
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
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
    in: {
      opacity: 0,
    },
  };
  const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.4,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setLogoSelect(0);
  }, []);
  function Down() {
    const elmnt = document.getElementById("services_page");
    elmnt.scrollIntoView({ behavior: "smooth" });
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
          <img id="up_arrow" src={UpArrow} alt="Menu" onClick={Down} />
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
