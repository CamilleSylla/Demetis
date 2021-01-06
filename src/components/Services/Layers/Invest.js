import React from "react";
import "../../style/Invest.scss";
import InvestImg from '../../../assets/Img/invest.jpg'
import { Link } from "react-router-dom";
 
export default function Invest() {
  const Content = {
    title: "Investir dans l’immobilier",
    text:
      "L’immobilier est un des investissements préférés des français, il permet un effet de levier lorsqu’il est bien piloté mais il est aussi réputé pour être un placement sûr. \n\n La fiscalité des revenus fonciers est en revanche lourde et peut fortement baisser la rentabilité de votre investissement. \n\n Il est primordial avant tout investissement immobilier de procéder à un audit permettant de cibler les dispositifs ou modes de détentions les plus adaptés à votre situation. \n\n Votre investissement peut intervenir au travers d’une SCI, d’une SARL de famille, il peut aussi se faire sous un dispositif tel que le « loueur meublé non professionnel » ou même en nue-propriété. \n\n Vous souhaitez obtenir des informations sur nos solutions immobilières ?",
    img: InvestImg,
  };

  return (
    <div id="invest">
      <div id="invest_container">
          <div id="spacer"></div>
          <img src={Content.img} alt="Maison"/>
        <div id="invest_text">
          <h5>{Content.title}</h5>
          <p>{Content.text}</p>
          <Link className="button_gold" to="/services">
            Etre Contacté
          </Link>
        </div>
      </div>
    </div>
  );
}
