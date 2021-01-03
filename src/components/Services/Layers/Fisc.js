import React from "react";
import "../../style/Fisc.scss";
import Arrow from "../../../assets/Icons/ArrowLongGold.svg"
import Building from "../../../assets/Icons/building.svg"
import Id from "../../../assets/Icons/id.svg"
import Profile from "../../../assets/Icons/profile.svg"
import { Link } from "react-router-dom";


export default function Fisc() {
  return (
    <div id="fisc">
      <div id="fisc_content">
        <div id="fisc_content_text">
          <h5>Reduire mes impôts</h5>
          <p>
            Il existe plusieurs dispositifs permettant de payer moins d’impôts.
            Cela peut se faire via l’épargne ou par l’investissement (immobilier
            par exemple). La pertinence de ses dispositifs se fera en fonction
            de certains paramètres :
          </p>
          <div id="fisc_content_text_icons">
              <div>
                  <img src={Id} alt="ID"/>
                  <p>Votre situation civile</p>
              </div>
              <div>
              <img src={Arrow} alt="ID"/>
              </div>
              <div>
                  <img src={Profile} alt="ID"/>
                  <p>Votre situation civile</p>
              </div>
              <div>
              <img src={Arrow} alt="ID"/>
              </div>
              <div>
                  <img src={Building} alt="ID"/>
                  <p>Votre situation civile</p>
              </div>
          </div>
          <p>Il est donc nécessaire de procéder à un audit en amont.</p>
          <Link className="button_gold" to="/services">
          Etre Contacter
        </Link>
        </div>
        <div id="fisc_img">
            
        </div>
      </div>
    </div>
  );
}
