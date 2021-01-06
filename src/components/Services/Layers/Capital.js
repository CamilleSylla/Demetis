import React from "react";
import { Link } from "react-router-dom";
import "../../style/Capital.scss";
import CapitalImg from '../../../assets/Img/Capital.jpg'

export default function Capital() {

    const Content = {
        title: "Me constituer un capital",
        text: "Nous considérons chez DEMETIS que le conseil en gestion de patrimoine n’est pas réservé qu’a un certain type de clients. \n\n Il n’est pas nécessaire d’avoir 100 000€ à placer pour bénéficier de conseils de professionnels. \n\n Bien piloté, le fait d’épargner 100€ par mois peut permettre de se constituer un capital. Votre allocation sera faite dans le respect de vos objectifs et de votre profil risque.",
        img: CapitalImg
    }
  return (
    <div id="capital">
      <div id="capital_container">
          <img src={Content.img} alt="appartement"/>
        <h5>{Content.title}</h5>
        <p>{Content.text}</p>
        <Link className="button_gold" to="/services">
            Etre Contacté
          </Link>
      </div>
    </div>
  );
}
