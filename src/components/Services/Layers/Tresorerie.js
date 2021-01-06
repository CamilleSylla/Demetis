import React from 'react' 
import '../../style/Tresorerie.scss'
import Grow from '../../../assets/Img/grow.jpg'
import { Link } from 'react-router-dom'

export default function Tresorerie () {
    const Content = {
        title:"Optimiser la trésorerie de votre entreprise",
        text_1:"Il existe plusieurs solutions pour investir la trésorerie dite « excédentaire » :",
        text_2: "Cela peut se faire a travers un contrat de capitalisation permettant un accès a des placements garantis type fonds euros ou a des unités de comptes (actions, obligations, monétaire ou même immobilier) pour dynamiser votre allocation ;\n\n Via des SCPI (société civile de placements immobiliers), permettant de jouir de la performance d’immobilier géré ;\n\n Ou encore un compte titre permettant l’acquisition de titres vifs",
        img: Grow
    }

    return (
        <div id="tresorerie">
            <div id="tresorerie_container">
                <h5>{Content.title}</h5>
                <p>{Content.text_1}</p>
                <p id="merge">{Content.text_2}</p>
                <img src={Content.img} alt="graphique"/>
                <Link className="button_gold" to="/services">
            Etre Contacté
          </Link>
            </div>
        </div>
    )
}