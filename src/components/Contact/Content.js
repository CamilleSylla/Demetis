import React from "react";
import { motion } from "framer-motion";

export default function Content() {
  const Content = {
    title: "Discuton de votre projet... ",
    title_2:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    phone: "06 38 74 52 98",
    email: "navid.niktash@demetis.fr",
    adresse: {
      rue: "1 rue de l'investissement",
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
            <h4 className="banner_text_slogan">{Content.title}</h4>
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
