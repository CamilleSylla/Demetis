import React from "react";
import "../../style/Transmission.scss";
import Transmi from "../../../assets/Img/Transmi.jpg";
import { Link } from "react-router-dom";

export default function Transmission() {
  const Content = {
    title: "Préparer votre transmission",
    text_1:
      "D’après un sondage Opinionway, 74% des français de plus de 45 ans n’ont pas préparé la transmission de leur patrimoine.",
    text_2:
      " Les enjeux peuvent pourtant être de dizaines de milliers d’euros.",
    text_3:
      "La législation peut permettre, au travers de différents outils, une optimisation de la transmission qui peut se traduire par le fait de payer moins de droits de succession pour vos héritiers.",
    img: Transmi,
  };

  return (
    <div id="transmission">
      <div id="transmission_container">
        <h5>{Content.title}</h5>
        <p>{Content.text_1}</p>
        <div id="transmissison_grid">
          <p>{Content.text_2}</p>
          <img src={Content.img} alt="Famille" />
          <p>{Content.text_3}</p>
        </div>
        <Link className="button_gold" to="/services">
          Etre Contacté
        </Link>
      </div>
    </div>
  );
}
