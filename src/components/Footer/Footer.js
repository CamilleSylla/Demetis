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
      rue: "1 rue de l'investissement",
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
        <table>
          <tr>
            {Content.titles.map((titles, i) => {
              return (
                <th key={i}>
                  <p className="footer_title">{titles}</p>
                </th>
              );
            })}
          </tr>
          <tr>
            <th>
              {Content.explore.map((infos, i) => {
                return (
                  <tr key={i}>
                    <NavLink
                      exact={true}
                      to={infos.path}
                      activeStyle={{
                        fontWeight: "bold",
                        color: "rgba(211, 187, 140, 1)",
                      }}
                      className="footer_font"
                    >
                      {infos.link}
                    </NavLink>
                  </tr>
                );
              })}
            </th>
            <th className="footer_font">
              <tr>{Content.adresse.rue}</tr>
              <tr>
                {Content.adresse.cp}, {Content.adresse.ville}
              </tr>
              <tr>{Content.adresse.pays}</tr>
            </th>
            <th className="footer_font footer_links">
              {Content.social.map((social, i) => {
                return <a href={social.link} key={i}>{social.title}</a>;
              })}
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
}
