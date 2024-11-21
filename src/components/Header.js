import React from "react";
import "./Header.css";
import IntelliCook from "../assets/IntelliCook.png"
function Header() {
    return (
        <>
        <div className="logo">
            <nav class="navbar"/>
                <img src={IntelliCook} alt="logo" className="LogoIC"></img>
            </div>
            
            <div className="boutons">
                <ul className="navigation">
                    <li className="navAccueil">
                        <a className="acceuil" href="">Accueil</a>
                    </li>
                    <li className="navTendance">
                        <a className="tendance" href="">Tendance</a>
                    </li>
                    <li className="navFavoris">
                        <a className="favoris" href="">Favoris</a>
                    </li>
                    <li className="navSaisonnier">
                        <a className="saisonnier" href="">Saisonnier</a>
                    </li>
                    

                </ul>
            </div>
</>

    
)
}

export default Header;