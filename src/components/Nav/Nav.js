import React, { useEffect } from 'react';
import "../style/Nav.scss"

export default function Nav () {
    
    

    const Menu = () => {
        const top = document.getElementById("top");
        const middle = document.getElementById("middle");
        const bottom = document.getElementById("bottom");
        const hamburger = document.getElementById("hamburger");
        hamburger.style.justifyContent = "none"
        hamburger.style.alignItems = "center"
        hamburger.style.margin = "0"
        top.style.transform = "rotate(45deg)"
        middle.style.display = "none"
        bottom.style.transform = "rotate(-45deg)"
        bottom.style.width = "100%"
    }
useEffect(() => {
})
    return (
        <div id="nav">
            <div id="hamburger" onClick={Menu}>
                <div id="top">
                    
                </div>
                <div id="middle">

                </div>
                <div id="bottom">

                </div>
            </div>

        </div>
    )
}