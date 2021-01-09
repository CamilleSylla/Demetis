import React, { useContext } from "react";
import "../style/SideBar.scss";
import GoldBack from "../../assets/Logos/GoldBackground.svg";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../Context/MenuContext";

export default function SideBar() {
  const [hide, setHide] = useContext(MenuContext);
  const Content = {
    logo: GoldBack,
  };

  return (
    <div id="sidebar">
      <div id="sidebar_content">
        <div id="sidebar_link" onClick={() => {
          setHide(!hide)
        }}>
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
              Nos Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeStyle={{
                fontWeight: "bold",
                color: "white",
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
