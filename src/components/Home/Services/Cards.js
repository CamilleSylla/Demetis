import React from 'react'

import Arrow from "../../../assets/Icons/arrowBlue.svg"

export default function Cards () {
    const Content = [
        {
          categorie: "Fiscalité",
          desc: "Lorem Ipsum blab bla elfrjir eru ee z erj zejrjjejrzrez",
        },
        {
          categorie: "Epargne",
          desc: "Lorem Ipsum blab bla elfrjir eru ee z erj zejrjjejrzrez",
        },
        {
          categorie: "Retraite",
          desc: "Lorem Ipsum blab bla elfrjir eru ee z erj zejrjjejrzrez",
        },
        {
          categorie: "Immobilié",
          desc: "Lorem Ipsum blab bla elfrjir eru ee z erj zejrjjejrzrez",
        },
      ];
    return (
        <div id="services_cards_container">
            {Content.map((details, i) => {
                return (
                    <div className="services_cards">
                        <h4>{details.categorie}</h4>
                        <p>{details.desc}</p>
                        <img src={Arrow} alt="fleche"/>
                        </div>
                )
            })}
        </div>
    )
}