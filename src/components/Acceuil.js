import React from 'react';
import './Acceuil.css';
import intellicook from '../assets/intellicook.png';
import presentation from '../assets/Presentation.png';

function Acceuil() {
return (
    <>
<div className="logo1">
    <img src={presentation} className="pres" />
    <img src={intellicook} className="logoName" />
</div>

<h1 className="title">Des recettes faciles pour cuisiner Simplement</h1>
<hr className="separator" />
<p className="slogan">Notre plateforme vous permettra d'avoir un choix illimité de recettes en fonction des ingrédients de votre choix</p>

<div className='cuisinons'>
    <button type="button" className='cuisine'>Cuisinons !</button>
</div>
</>
)
}
export default Acceuil;