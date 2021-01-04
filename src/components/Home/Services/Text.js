import React from "react";
import { Link } from "react-router-dom";

export default function Text() {
  const Content = {
    title: "Nos Services",
    desc:
      "Cabinet de conseil en gestion de patrimoine, nous intervenons autour des problématiques liés au patrimoine :",
  };
  return (
    <div id="service_title">
      <h4 className="banner_text_slogan">{Content.title}</h4>
      <p>{Content.desc} </p>
      <Link className="button_gold" to="/">
        Être contacté
      </Link>
    </div>
  );
}