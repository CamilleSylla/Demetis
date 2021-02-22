import React, { useContext, useEffect} from "react";
import "../../style/ServicesCards.scss";
import Capital from "../../../assets/Icons/Capital.svg";
import Fisc from "../../../assets/Icons/Fisc.svg";
import Placement from "../../../assets/Icons/Placement.svg";
import Retraite from "../../../assets/Icons/Retraite.svg";
import Immo from "../../../assets/Icons/immobilier.svg";
import Assu from "../../../assets/Icons/assurance.svg";
import Succ from "../../../assets/Icons/succession.svg";
import Tresorerie from "../../../assets/Icons/tresorerie.svg";
import { ServicesContext } from "../../Context/ServicesContext";
import { ActiveCardContext } from "../../Context/ActiveCardContext";

export default function Cards() {
  const [show, setShow] = useContext(ServicesContext);
  const [active, setActive] = useContext(ActiveCardContext);
  const CardsContent = [
    { title: "FISCALITE", content: "Réduire mes impôts", img: Fisc },
    { title: "RETRAITE", content: "Préparer ma retraite", img: Retraite },
    { title: "CAPITAL", content: "Se constituer un capital", img: Capital },
    { title: "PLACEMENT", content: "Placer mon argent ", img: Placement },
    { title: "IMMOBILIER", content: "Investir dans l’immobilier", img: Immo },
    { title: "ASSURANCE", content: "Solutions d’assurance", img: Assu },
    { title: "SUCCESSION", content: "Préparer votre transmission", img: Succ },
    {
      title: "TRESORERIE",
      content: "Optimiser la trésorerie de votre entreprise",
      img: Tresorerie,
    },
  ];

  function Target(e, tar) {
    setShow({ ...show, component: e });
    const elmnt = document.getElementById("services_all");
    elmnt.scrollIntoView({ behavior: "smooth" });
    setActive(tar);
  }

  function Active() {
    const isActive = CardsContent.map((match, i) => {
      if (match.title !== active) {
        return (
          document.getElementById(`${match.title}`).classList.remove("active_card")
        );
      } else if (match.title === active) {
        return (
          document.getElementById(`${active}`).classList.add("active_card")
          );
      } else {
        return null;
      }
    });
    return isActive;
  }

  useEffect(() => {
    Active();
  });
  return (
    <div id="cards_menu">
      {CardsContent.map((details, i) => {
        return (
          <div
            className="services_page_cards"
            onClick={() => {
              Target(i, details.title);
            }}
            key={details.title}
            id={details.title}
          >
            <img src={details.img} alt="icons" />
            <div>
              <p className="card_title">{details.title}</p>
              <p className="card_text">{details.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
