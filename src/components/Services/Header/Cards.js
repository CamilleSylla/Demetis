import React, { useContext, useEffect, useState } from "react";
import "../../style/ServicesCards.scss";
import Capital from '../../../assets/Icons/Capital.svg'
import Fisc from '../../../assets/Icons/Fisc.svg'
import Placement from '../../../assets/Icons/Placement.svg'
import Retraite from '../../../assets/Icons/Retraite.svg'
import { ServicesContext } from "../../Context/ServicesContext";

export default function Cards() {

  const [show, setShow] = useContext(ServicesContext);

  const CardsContent = [
    { title: "FISCALITE", content: "Réduire mes impôts", img: Fisc},
    { title: "RETRAITE", content: "Préparer ma retraite", img: Retraite },
    { title: "CAPITAL", content: "Se constituer un capital", img: Capital },
    { title: "PLACEMENT", content: "Placer mon argent ", img: Placement },
    { title: "IMMOBILIER", content: "Investir dans l’immobilier" },
    { title: "ASSURANCE", content: "Solutions d’assurance" },
    { title: "SUCCESSION", content: "Préparer votre transmission" },
    { title: "TRESORERIE", content: "Optimiser la trésorerie de votre entreprise" },
  ];

  function Target(e) {
    setShow({...show, component :e})
    const elmnt = document.getElementById("services_all");
    elmnt.scrollIntoView({behavior: 'smooth'});
  }

  return(
    <div id="cards_menu">
        {CardsContent.map((details, i) => {
            return (
                <div className="services_page_cards" onClick={() => Target(i)} key={details.title} >
                    <img src={details.img} alt="icons"/>
                    <h5>{details.title}</h5>
                    <p>{details.content}</p>
                    </div>
            )
        })}
    </div>

  ) ;
}
