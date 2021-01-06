import React from 'react'
import Services from './Header/Services'
import Assurance from './Layers/Assurance'
import Capital from './Layers/Capital'
import Epargne from './Layers/Epargne'
import Fisc from './Layers/Fisc'
import Invest from './Layers/Invest'
import Retraite from './Layers/Retraite'
import Transmission from './Layers/Transmission'
import Tresorerie from './Layers/Tresorerie'


export default function Main () {
    

    return (
        <div>
            <Services/>
            <Fisc/>
            <Retraite/>
            <Capital/>
            <Epargne/>
            <Invest/>
            <Assurance/>
            <Transmission/>
            <Tresorerie/>
        </div>
    )
}