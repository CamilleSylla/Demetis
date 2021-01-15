import React from "react";
import emailjs from 'emailjs-com'
export default function Form() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_a0yhol6', e.target, 'user_9Mwl1WzLHnTGVe4ZXHEMI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div id="form">
      <form id="form_container" className="input-fields" onSubmit={sendEmail}>
        <input type="text" placeholder="Nom Prénom" name="name"/>
        <input type="email" placeholder="Adresse E-mail" name="mail"/>
        <input type="text" placeholder="N° de téléphone" />
        <input type="text" placeholder="Sujet" name="Subject"/>
        <textarea placeholder="Votre message" name="msg"/>
        <button type="submit" className="button_gold" >Envoyer</button>
      </form>
    </div>
  );
}
