import React, { useContext, useEffect } from "react";
import "../style/Nav.scss";
import SideBar from "./SideBar";
import LogoBlueBack from "../../assets/Logos/BlueBack.svg";
import { MenuContext } from "../Context/MenuContext";

import LogoWhiteBG from "../../assets/Logos/LogoWhiteBG.svg";
import LogoBlueBG from "../../assets/Logos/BlueBack.svg";
import { NavContext } from "../Context/NavContext";
import { Link, useLocation } from "react-router-dom";

import IgW from "../../assets/Icons/Ig_White.svg";
import LkW from "../../assets/Icons/Linkedin_white.svg";


export default function Nav() {
  const [hide, setHide] = useContext(MenuContext);
  const [logoSelect, setLogoSelect] = useContext(NavContext);

  const Logos = [LogoWhiteBG, LogoBlueBG];
  const location = useLocation();
  
  function scrollFunction() {
    const hamburger = document.getElementById("topnav_hamburger_icon");
    if (location.pathname === "/services") {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        document.getElementById("nav_contact").style.opacity = "1"
        document.getElementById("top_nav_container").style.maxHeight = "50px";
        document.getElementById("top_nav_container").style.backgroundColor =
          "#1c3661";

        document.getElementById("top_nav_logo").style.maxHeight = "50px";
        setLogoSelect(1);
        for (let i = 0; i <= 2; i++) {
          const bar = hamburger.getElementsByTagName("span");
          bar[i].style.backgroundColor = "white";
        }
      } else {
        document.getElementById("nav_contact").style.opacity = "0"
        document.getElementById("top_nav_container").style.maxHeight = "50px";
        document.getElementById("top_nav_container").style.backgroundColor =
          "transparent";
        document.getElementById("top_nav_logo").style.maxHeight = "100%";
        setLogoSelect(0);
        for (let i = 0; i <= 2; i++) {
          const bar = hamburger.getElementsByTagName("span");
          bar[i].style.backgroundColor = "#1c3661";
        }
      }
    } else {
      for (let i = 0; i <= 2; i++) {
        const bar = hamburger.getElementsByTagName("span");
        bar[i].style.backgroundColor = "white";
      }
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        document.getElementById("nav_contact").style.opacity = "1"
        document.getElementById("top_nav_container").style.maxHeight = "50px";
        document.getElementById("top_nav_container").style.backgroundColor =
          "#1c3661";
        document.getElementById("top_nav_logo").style.maxHeight = "50px";
        setLogoSelect(1);
      } else {
        document.getElementById("nav_contact").style.opacity = "0"
        document.getElementById("top_nav_container").style.maxHeight = "50px";
        document.getElementById("top_nav_container").style.backgroundColor =
          "transparent";
        document.getElementById("top_nav_logo").style.maxHeight = "100%";
        setLogoSelect(1);
      }
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  useEffect(() => {
    if (hide === true) {
      //Hamburger
      const hamburger = document.getElementById("topnav_hamburger_icon");
      hamburger.style.justifyContent = "space-evenly";
      for (let i = 0; i <= 2; i++) {
        const bar = hamburger.getElementsByTagName("span");
        if (location.pathname === "/services") {
          bar[i].style.backgroundColor = "#1c3661";
        } else {
          bar[i].style.backgroundColor = "white";
        }
        document.getElementById("nav_social").style.opacity = "1"
        bar[i].style.opacity = "1";
        bar[0].style.transform = "rotate(0deg)";
        bar[1].style.transform = "translateX(0px)";
        bar[2].style.transform = "rotate(0deg)";
        bar[i].style.position = "static";
      }
      //Logo
      document.getElementById("top_nav_logo").style.opacity = "1";

      //Menu
      document.getElementsByClassName("the-blur")[0].style.zIndex = "-1";
      document.getElementsByClassName("the-blur")[0].style.opacity = "0";
      document.getElementById("sidebar").style.transform = "translate(-20vw)";
      document.getElementById("nav").style.zIndex = "-1";
      document.getElementById("nav").style.opacity = "0";
    } else {
      //Hamburger
      document.getElementById("nav_social").style.opacity = "0"
      const hamburger = document.getElementById("topnav_hamburger_icon");
      const middle = hamburger.getElementsByTagName("span")[1];
      hamburger.style.justifyContent = "center";
      middle.style.opacity = "0";
      middle.style.transform = "translateX(-50px)";
      for (let i = 0; i <= 2; i++) {
        const bar = hamburger.getElementsByTagName("span");
        bar[i].style.backgroundColor = "#8D161B";
        bar[i].style.position = "absolute";
        bar[0].style.transform = "rotate(45deg)";
        bar[2].style.transform = "rotate(-45deg)";
        document.getElementById("top_nav_container").style.backgroundColor =
          "transparent";
      }
      //Logo
      document.getElementById("top_nav_logo").style.opacity = "0";
      //Menu
      document.getElementsByClassName("the-blur")[0].style.zIndex = "10";
      document.getElementsByClassName("the-blur")[0].style.opacity = "1";
      document.getElementById("sidebar").style.transform = "translate(0)";
      document.getElementById("nav").style.zIndex = "4";
      document.getElementById("nav").style.opacity = "1";
    }
  }, [hide]);

  const Links = [
    { icon: IgW, link: "https://www.instagram.com/demetisconseil/" },
    { icon: LkW, link: "https://www.linkedin.com/in/navid-niktash-bb75b0179/" },
  ];
  const Text = "Audit Gratuit";
  return (
    <div>
      <div id="top_nav_container">
        <a
          id="topnav_hamburger_icon"
          onClick={() => {
            setHide(!hide);
          }}
        >
          <span id="top"></span>
          <span id="mid"></span>
          <span id="bot"></span>
        </a>
        <div id="nav_social">
          {Links.map((links, i) => {
            return (
              <a href={links.link}>
                <img src={links.icon} alt={links.link}/>
              </a>
            )
          })}
        </div>
        
        <div id="top_nav_logo">
        <div></div>
        <Link id="nav_contact" className="button_gold" to="/contact">
          {Text}
        </Link>
          <img src={Logos[logoSelect]} alt="Demetis" />
        </div>
      </div>

      <div id="nav">
        <SideBar />
        <div className="the-blur" onClick={() => setHide(!hide)}>
          <Link to="/">
            <img src={LogoBlueBack} alt="Demetis" />
          </Link>
        </div>
      </div>
    </div>
  );
}
