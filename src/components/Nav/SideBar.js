import React from "react";
import "../style/SideBar.scss";
import GoldBack from "../../assets/Logos/GoldBackground.svg";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const Content = {
    logo: GoldBack,
  };

  return (
    <div id="sidebar">
      <div id="sidebar_content">
        <div id="sidebar_link">
          <li>
            <NavLink
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              activeStyle={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Contact
            </NavLink>
          </li>
        </div>

        <img src={Content.logo} alt="Demetis" />
      </div>
    </div>
  );
}
