import React from "react";
import "./Accueil.css";
import intellicook from "../assets/IntelliCook.png";
import Presentation from "../assets/Presentation.png";

function Accueil() {
  <>
      <img src={intellicook} alt="InteliCook" className="log" />
      <img src={Presentation} alt="Presentation" className="Pres" />
    </>;
}

export default Accueil;
