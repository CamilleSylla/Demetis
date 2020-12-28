import React from "react";

export default function BannerMenu() {
  const Content = [
    {
      categorie: "Catégorie",
      desc: "Lorem Ipsum blab bla elfrjir eru ee z erj zejrjjejrzrez",
    },
    {
      categorie: "Catégorie",
      desc: "Lorem Ipsum blab bla elfrjir eru ee z erj zejrjjejrzrez",
    },
    {
      categorie: "Catégorie",
      desc: "Lorem Ipsum blab bla elfrjir eru ee z erj zejrjjejrzrez",
    },
    {
      categorie: "Catégorie",
      desc: "Lorem Ipsum blab bla elfrjir eru ee z erj zejrjjejrzrez",
    },
  ];
  return (
    <div id="banner_menu">
      {Content.map((details, i) => {
        return (
          <div className="banner_menu_card">
            <div className="banner_menu_card_content">
              <h2>{details.categorie}</h2>
              <p>{details.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
