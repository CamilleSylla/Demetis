import React, { useContext, useEffect, useState } from "react";
import "../style/Nav.scss";
import SideBar from "./SideBar";
import LogoBlueBack from "../../assets/Logos/BlueBack.svg";
import { MenuContext } from "../Context/MenuContext";

import LogoWhiteBG from "../../assets/Logos/LogoWhiteBG.svg";
import LogoBlueBG from "../../assets/Logos/BlueBack.svg";
import { NavContext } from "../Context/NavContext";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const [hide, setHide] = useContext(MenuContext);
  const [logoSelect, setLogoSelect] = useContext(NavContext);

  const Logos = [LogoWhiteBG, LogoBlueBG];
  const location = useLocation();
  console.log(location.pathname);
  function scrollFunction() {
    const hamburger = document.getElementById("topnav_hamburger_icon");
    if (location.pathname === "/services") {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
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
        document.getElementById("top_nav_container").style.maxHeight = "50px";
        document.getElementById("top_nav_container").style.backgroundColor =
          "#1c3661";
        document.getElementById("top_nav_logo").style.maxHeight = "50px";
        setLogoSelect(1);
      } else {
        document.getElementById("top_nav_container").style.maxHeight = "50px";
        document.getElementById("top_nav_container").style.backgroundColor =
          "transparent";
        document.getElementById("top_nav_logo").style.maxHeight = "100%";
        setLogoSelect(1);
        
      }
    }
  }

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    if (hide === true) {
      //Hamburger
      const hamburger = document.getElementById("topnav_hamburger_icon");
      hamburger.style.justifyContent = "space-evenly";
      for (let i = 0; i <= 2; i++) {
        const bar = hamburger.getElementsByTagName("span");
        if 
          (location.pathname === "/services" 
        ) {
          bar[i].style.backgroundColor = "#1c3661";
          
        } else {
          bar[i].style.backgroundColor = "white";
        }
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
    } else {
      //Hamburger
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
      document.getElementById("nav").style.zIndex = "1";
    }
  }, [hide]);
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
        <div id="top_nav_logo">
          <img src={Logos[logoSelect]} alt="Demetis" />
        </div>
      </div>

      <div id="nav">
        <SideBar />
        <div className="the-blur" onClick={() => setHide(!hide)}>
          <img src={LogoBlueBack} alt="Demetis" />
        </div>
      </div>
    </div>
  );
}
