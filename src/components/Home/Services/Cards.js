import React, { useContext } from "react";
import Fisc from "../../../assets/Icons/Fisc.svg";
import Capital from "../../../assets/Icons/Capital.svg";
import Retraite from "../../../assets/Icons/Retraite.svg";
import Immo from "../../../assets/Icons/immobilier.svg";
import Arrow from "../../../assets/Icons/arrowBlue.svg";
import { Link } from "react-router-dom";
import { ServicesContext } from "../../Context/ServicesContext";
import { ActiveCardContext } from "../../Context/ActiveCardContext";

export default function Cards() {
  const [show, setShow] = useContext(ServicesContext);
  const [active, setActive] = useContext(ActiveCardContext)
  const Content = [
    {
      categorie: "FISCALITE",
      desc: "Réduire mes impôts",
      img: Fisc,
      target: 0,
    },
    {
      categorie: "CAPITAL",
      desc: "Se constituer un capital",
      img: Capital,
      target: 2,
    },
    {
      categorie: "RETRAITE",
      desc: "Préparer ma retraite",
      img: Retraite,
      target: 1,
    },
    {
      categorie: "IMMOBILIER",
      desc: "Investir dans l’immobilier",
      img: Immo,
      target: 4,
    },
  ];

  return (
    <div id="services_cards_container">
      {Content.map((details, i) => {
        return (
          <Link to="/services" key={i}>
            <div
              className="services_cards"
              onClick={() => {
                setShow({ ...show, component: details.target })
                setActive(details.categorie)
              }}
            >
              <img
                className="banner_services_icons"
                src={details.img}
                alt="icons"
              />
              <p className="card_title">{details.categorie}</p>
              <p className="card_text">{details.desc}</p>
              <img id="fleche" src={Arrow} alt="fleche" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
