import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../../assets/Logos/BlueBack.svg'
export default function Text() {
  return (
    <div id="banner_title_container">
      <div id="banner_text">
        <h4 className="banner_text_slogan">
          Ensemble, <br /> réinventons la gestion <br /> de patrimoine
        </h4>
        <h1 id="banner_title">Cabinet de conseil en gestion de patrimoine</h1>
        <div id="banner_buttons">
          <Link className="button_white" to="/services">
            Services
          </Link>
          <Link className="button_gold" to="/">
            Être contacté
          </Link>
        </div>
      </div>
    </div>
  );
}
