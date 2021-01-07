import React, { useContext, useEffect } from 'react';
import "../style/Nav.scss"
import SideBar from './SideBar';
import LogoBlueBack from '../../assets/Logos/BlueBack.svg'
import { MenuContext } from '../Context/MenuContext';

export default function Nav () {
    const [hide, setHide] = useContext(MenuContext)

        
    

    
useEffect(() => {
    if (hide === true) {
        
        document.getElementsByClassName("the-blur")[0].style.zIndex = "-1"
        document.getElementsByClassName("the-blur")[0].style.opacity = "0"
        document.getElementById("sidebar").style.transform = "translate(-20vw)"
        document.getElementById("nav").style.zIndex = "-1"
   } else {
    document.getElementsByClassName("the-blur")[0].style.zIndex = "10"
    document.getElementsByClassName("the-blur")[0].style.opacity = "1"
    document.getElementById("sidebar").style.transform = "translate(0)"
    document.getElementById("nav").style.zIndex = "1"
   }
},[hide])
    return (
        <div>
            <button onClick={() => {
                setHide(!hide)
                console.log(hide);
            }}>
                menu
            </button>
        <div id="nav">
            
        <SideBar/>
        <div className="the-blur">
            <img src={LogoBlueBack} alt="Demetis"/>
        </div>
        
        </div>
        </div>
        
    )
}