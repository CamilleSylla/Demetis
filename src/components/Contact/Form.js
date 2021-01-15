import React from "react";
export default function Form() {

  return (
    <div id="form">
      <form id="form_container" action="https://formspree.io/f/mdopyrdp"  method="POST">
        <input type="text" placeholder="Nom Prénom" name="name"/>
        <input type="email" placeholder="Adresse E-mail" name="mail"/>
        <input type="telephone" placeholder="N° de téléphone" name="telephone"/>
        <input type="text" placeholder="Sujet" name="Subject"/>
        <textarea placeholder="Votre message" name="msg"/>
        <button type="submit" className="button_gold" >Envoyer</button>
      </form>
    </div>
  );
}
