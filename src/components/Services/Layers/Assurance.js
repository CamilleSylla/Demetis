import React from "react";
import "../../style/Assurance.scss";
import Bulle from "../../../assets/Icons/bulle.svg";
import Eye from "../../../assets/Icons/eye.svg";
import Shirt from "../../../assets/Icons/trophy.svg";
import Para from "../../../assets/Img/para.jpg";
import { Link } from "react-router-dom";

export default function Assurance() {
  const Content = {
    title: "Solutions d’assurance",
    side: Para,
    content: [
      {
        img: Bulle,
        text:
          "Vous souhaitez renégocier votre contrat d’assurance emprunteur dans le cadre de votre crédit immobilier ;",
      },
      {
        img: Eye,
        text:
          "Vous êtes profession libérale et avez besoin de conseil sur la prévoyance ;",
      },
      {
        img: Shirt,
        text:
          "Vous êtes sportif professionnel et nécessitez d’obtenir des conseils sur les assurances perte de licence ou perte de revenus.",
      },
    ],
  };

  return (
    <div id="assurance">
      <div id="assurance_container">
        <img id="parapluie" src={Content.side} alt="Parapluie" />
        <div id="assurance_content">
          <h5>{Content.title}</h5>
          {Content.content.map((details, i) => {
            return (
              <div className="assurance_cards">
                <img src={details.img} />
                <p>{details.text}</p>
              </div>
            );
          })}
          <Link className="button_gold" to="/services">
            Etre Contacté
          </Link>
        </div>
      </div>
    </div>
  );
}