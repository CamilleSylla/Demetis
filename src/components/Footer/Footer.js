import React from "react";
import "../style/Footer.scss";
import Logo from "../../assets/Logos/BlueBack.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const Content = {
    slogan: "Ensemble, réinventons la gestion de patrimoine.",
    titles: ["Explorer", "Notre Adresse", "Suivez-nous", "Légal"],
    explore: [
      { path: "/", link: "Accueil" },
      { path: "/services", link: "Nos Services" },
      { path: "/contact", link: "Contact" },
    ],
    adresse: {
      rue: "5 place du 117ème régiment d'infanterie",
      cp: "72000",
      ville: "Le Mans",
      pays: "France", 
    },
    social: [
      { link: "https://www.instagram.com/demetisconseil/", title: "Instagram" },
      {
        link: "https://www.linkedin.com/in/navid-niktash-bb75b0179/",
        title: "LinkedIn",
      },
    ],
  };

  return (
    <div id="footer">
      <div id="footer_logo_container">
        <div>
          <img src={Logo} alt="Demetis" />
          <p className="footer_font">{Content.slogan}</p>
        </div>
      </div>
      <div id="footer_table_container">
        <div>
          <h6>{Content.titles[0]}</h6>
          <div>
          {Content.explore.map((details, i) => {
            return (<NavLink
              exact={true}
              to={details.path}
              activeStyle={{
                fontWeight: "bold",
                color: "rgba(211, 187, 140, 1)",
              }}
              className="footer_font"
            >
              {details.link}
            </NavLink>)
          })}
          </div>
        </div>
        <div>
          <h6>{Content.titles[1]}</h6>
          <div>
          <p>{Content.adresse.rue}</p>
          <p>{Content.adresse.cp}, {Content.adresse.ville}</p>
          <p>{Content.adresse.pays}</p>
          </div>
        </div>
        <div>
          <h6>{Content.titles[2]}</h6>
          <div>
          {Content.social.map((social, i) => {
                return <a href={social.link} key={i}>{social.title}</a>;
              })}
          </div>
        </div>
        <div>
          <h6>{Content.titles[3]}</h6>
          <div>
          <NavLink
              exact={true}
              to="/mentionslegales"
              activeStyle={{
                fontWeight: "bold",
                color: "rgba(211, 187, 140, 1)",
              }}
              className="footer_font"
            >
              Mentions Légales
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
