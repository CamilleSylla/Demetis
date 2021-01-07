import React, { useContext } from 'react'
import { TargetContext } from '../../Context/TargerContext'
import "../../style/ServicesPage.scss"
import Cards from './Cards'
import Text from './Header'

export default function Services () {

    const [menu, setMenu] = useContext(TargetContext)

    return(

        <header id="services_page">
            <Text/>
            <Cards />
        </header>
    )
}