import React from "react";
import "../../style/Args.scss";
import Cards from "./Cards";
import Logo from "../../../assets/Logos/LogoWhiteBG.svg";

export default function Args() {
  const Sentence =
    " Nous intervenons autour des problématiques liées au patrimoine.";

  return (
    <div id="args">
      <div id="args_sentence">
        <h3>{Sentence}</h3>
      </div>
      <Cards />
      <img className="_logo" src={Logo} alt="Logo" />
    </div>
  );
}
