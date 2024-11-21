import React from "react";
import "./Header.css";
import IntelliCook from "../assets/IntelliCook.png";
import loupe from "../assets/loupe.png";
function Header() {
    return (
        <div className="logo">
            <nav className="navbar">
                <img src={IntelliCook} alt="logo" className="LogoIC"></img>
        
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
                  <form className="formResearch">
                    <input className="research" type="search"/>
                    <button className="iconResearch" type="submit">
                        <img src={loupe} alt="Loupe" className="iconLoupe"/>
                    </button>
                  </form>
                  </nav>
                </div>
       

    );
};

export default Header;