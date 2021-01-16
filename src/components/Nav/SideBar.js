import React, { useContext } from "react";
import "../style/SideBar.scss";
import GoldBack from "../../assets/Logos/GoldBackground.svg";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../Context/MenuContext";
import Home_blue from "../../assets/Icons/Home_blue.svg";
import Light_blue from "../../assets/Icons/Light_blue.svg";
import Mail_blue from "../../assets/Icons/Mail_blue.svg";

export default function SideBar() {
  const [hide, setHide] = useContext(MenuContext);
  const Menu_Icon = [Home_blue, Light_blue, Mail_blue];
  const Content = {
    logo: GoldBack,
  };

  return (
    <div id="sidebar">
      <div id="sidebar_content">
        <div
          id="sidebar_link"
          onClick={() => {
            setHide(!hide);
          }}
        >
          <li>
          <img src={Menu_Icon[0]} alt="Home"/>
            <NavLink
              exact={true}
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
          <img src={Menu_Icon[1]} alt="Home"/>
            <NavLink
              exact={true}
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
          <img src={Menu_Icon[2]} alt="Home"/>
            <NavLink
              exact={true}
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

        <img id="side_logo" src={Content.logo} alt="Demetis" />
      </div>
    </div>
  );
}
