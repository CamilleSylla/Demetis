import React from "react";
import "../style/404.scss";
import Logo from "../../assets/Logos/BlueBack.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function FourOhFour() {
  const Content = {
    text: " Il semble que vous avez utilisé une mauvaise URL",
    img: Logo,
    explore: [
      { path: "/", link: "Accueil" },
      { path: "/services", link: "Nos Services" },
      { path: "/contact", link: "Contact" },
    ],
  };

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
  return (
    <motion.div
      exit="out"
      initial="in"
      animate="ini"
      variants={pageVariant}
      transition={pageTransition}
    >
      <div id="four_container">
        <img src={Content.img} alt="Demetis" />
        <span>404</span>
        <h6>Oups, La page que vous cherchez n'existe pas...</h6>
        <p>{Content.text}</p>
        <div id="four_menu">
          {Content.explore.map((infos, i) => {
            return (
              <NavLink
                exact={true}
                to={infos.path}
                activeStyle={{
                  fontWeight: "bold",
                  color: "rgba(211, 187, 140, 1)",
                }}
                className="footer_font"
              >
                {infos.link}
              </NavLink>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
