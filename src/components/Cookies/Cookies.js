import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CookieContext } from "../Context/CookieContext";
import "../style/Cookies.scss";

export default function Cookies() {
  const [hide, setHide] = useContext(CookieContext);

  const Click = () => {
      setHide(!hide)
  }

  function showCookies() {
    if (hide === true) {
      return null;
    } else {
      return (
        <div className="cookies_container">
          <p>
            {" "}
            En continuant votre navigation sur notre site, vous accepter {" "}
            <Link to="/mentionslegales"> l'utilisation de vos cookies</Link>{" "} pour analiser les statistiques de notre site.
            </p>
            <button onClick={Click}>D'accord</button>
          
        </div>
      );
    }
  }

  return showCookies();
}
