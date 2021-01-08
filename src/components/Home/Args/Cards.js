import React from "react";

import Conf from "../../../assets/Icons/Confiance.svg";
import Lock from "../../../assets/Icons/Lock.svg";
import Man from "../../../assets/Icons/Man.svg";

export default function Cards() {
  const Content = [
    {
      title: "Confiance",
      desc: "Lorem Ipsum blab bla elfrjir eru ee z erj zejrjjejrzrez",
      img: Conf,
    },
    {
      title: "Confidentialité",
      desc: "Lorem Ipsum blab bla elfrjir eru ee z erj zejrjjejrzrez",
      img: Lock,
    },
    {
      title: "Sur Mesure",
      desc: "Lorem Ipsum blab bla elfrjir eru ee z erj zejrjjejrzrez",
      img: Man,
    },
  ];

  return (
    <div id="args_cards_container">
      <div id="args_cards_grid">
        {Content.map((details, i) => {
          return (
            <div className="args_cards">
                <img src={details.img} alt={details.title}/>
              <div>
                <h2>{details.title}</h2>
                <p>{details.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
