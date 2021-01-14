import React from "react";

export default function Form() {
  return (
    <div id="form">
      <div id="form_container">
        <input type="text" placeholder="Nom Prénom" />
        <input type="email" placeholder="Adresse E-mail" />
        <input type="text" placeholder="N° de téléphone" />
        <input type="text" placeholder="Sujet" />
        <textarea placeholder="Votre message" />
        <input type="button" className="button_gold" value="Envoyer" />
      </div>
    </div>
  );
}
