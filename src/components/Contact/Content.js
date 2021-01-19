import React from "react";
import { motion } from "framer-motion";

export default function Content() {
  const Content = {
    title: "Discutons de votre projet ",
    title_2:
      "Remplissez notre formulaire contact. \n Nous reviendrons vers vous dans les plus bref délais.",
    phone: "06 31 89 08 64",
    email: "navid.niktash@demetis.fr",
    adresse: {
      rue: "5 place du 117ème régiment d'infanterie",
      cp: "72000",
      ville: "Le Mans",
      pays: "France", 
    },
  };

  const pageVariant = {
    ini: {
      y: 0,
      opacity: 1,
    },
    out: {
      y: "-50vh",
      opacity: 0,
    },
    in: {
      y: "50vh",
      opacity: 0,
    },
  };
  const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 1,
  };
  return (
    <div id="contact_content">
      <div id="contact_content_text">
        <div className="motion_services">
          <motion.div
            exit="out"
            initial="in"
            animate="ini"
            variants={pageVariant}
            transition={pageTransition}
            className="motion_text"
          >
            <h4 className="page_title">{Content.title}</h4>
          </motion.div>{" "}
        </div>

        <p>{Content.title_2}</p>
      </div>
      <table>
        <th>
          <tr className="rows">
            <th className="rows_name">Telephone </th>
            <th>: {Content.phone}</th>
          </tr>
          <tr className="rows">
            <th className="rows_name">Email </th>
            <th>: {Content.email}</th>
          </tr>
          <tr className="rows">
            <th id="adresse" className="rows_name">
              {Object.keys(Content)[4]}{" "}
            </th>
            <th>
              <tr>: {Content.adresse.rue} ,</tr>
              <tr>
                {Content.adresse.cp} , {Content.adresse.ville}
              </tr>
              <tr>{Content.adresse.pays}</tr>
            </th>
          </tr>
        </th>
      </table>
    </div>
  );
}
