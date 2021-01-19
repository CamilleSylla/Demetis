import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavContext } from "../../Context/NavContext";

export default function Text() {
  const [logoSelect, setLogoSelect] = useContext(NavContext);
  const Content = {
    title: "Nos Services",
    desc:
      "Cabinet de conseil en gestion de patrimoine, nous intervenons autour des problématiques liées au patrimoine :",
  };
  return (
    <div id="service_title">
      <h4 className="page_title">{Content.title}</h4>
      <p>{Content.desc} </p>
      <Link className="button_gold" to="/services" onClick={() => setLogoSelect(0)}>
        Tous nos services
      </Link>
    </div>
  );
}
