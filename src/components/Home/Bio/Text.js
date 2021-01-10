import React from "react";
import { Link } from "react-router-dom";
import Navid from '../../../assets/Img/Navid.png'

export default function Text() {
  const Content = {
    title: "Qui sommes nous ?",
    text: "Demetis conseil est un cabinet de conseil en gestion de patrimoine basé au Mans. \n\n Nous intervenons sur les projets immobiliers, les placements financiers, l'optimisation fiscale, les solutions d assurance et les problématiques de transmission.\n\n Les préconisations se font via un audit se basant sur votre situation civile et fiscale.\n\n Ancien sportif professionnel diplômé d un master de conseil en gestion de patrimoine délivré par l'Aurep.\n\n J ai à cœur de mettre la pertinence du conseil au centre de nos échanges.\n\n Ensemble, nous ferons le maximum afin de répondre à vos besoins et vous accompagner tout au long de votre vie et ses moments clés.",
    img: Navid
  }
  return (
    <div id="bio_content">
      <div id="bio_content_text">
        <h2>{Content.title}</h2>
        <p>
         {Content.text}
        </p>
        <Link className="button_gold" to="/services">
          Nos Prestations
        </Link>
      </div>
      <div className="bio_content_img">
            <img src={Content.img} alt="Navid Niktash"/>
            <h1>Navid Niktash</h1>
            <p>Directeur Général</p>
      </div>
    </div>
  );
}
