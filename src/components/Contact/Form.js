import React, { useContext } from "react";
import { ContactContext } from "../Context/ContactContext";
export default function Form() {
  const [subject, setSubject ] = useContext(ContactContext)
  const onChange = (e) => {
    setSubject({...subject, value: e.target.value})
  }
  return (
    <div id="form">
      <form id="form_container" action="https://formspree.io/f/meqpnepe"  method="POST">
        <input type="text" placeholder="Nom Prénom" name="name"/>
        <input type="email" placeholder="Adresse E-mail" name="mail"/>
        <input type="telephone" placeholder="N° de téléphone" name="telephone"/>
        <input type="text" placeholder="Sujet" name="Subject" value={subject.value} onChange={onChange}/>
        <textarea placeholder="Votre message" name="msg"/>
        <button type="submit" className="button_gold" >Envoyer</button>
      </form>
    </div>
  );
}
