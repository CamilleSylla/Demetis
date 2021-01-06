import React from "react"
import '../../style/Epargne.scss'
import Bill from "../../../assets/Img/bill.jpg"
import { Link } from "react-router-dom"

export default function Epargne () {

    const Content = {
        title:"Placer mon epargne",
        text:"Dans un contexte où les placements garantis ne rémunèrent presque plus, avec des fonds euros ou des livrets tournant autour de 1% de performance par an, il est nécessaire d’être accompagné par des professionnels afin d’étudier les meilleures solutions tout en restant fidèle à vos objectifs et votre profil de risque. \n\n Vous bénéficierez d’une étude prenant en compte le contexte macroéconomique, et mettant en avant la diversification des actifs.",
        img: Bill
    }

    return (

        <div id="epargne">
            <div id="epargne_container">
                <img src={Content.img} alt="billet"/>
                <div id="epargne_content">
                    <h5>{Content.title}</h5>
                    <p>{Content.text}</p>
                    <Link className="button_gold" to="/services">
            Etre Contacté
          </Link>
                </div>
            </div>
        </div>
    )
}