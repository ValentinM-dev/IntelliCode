import React from 'react';
import { Link } from "react-router-dom";
import './Acceuil.css';
import intellicook from '../assets/intellicook.png';
import presentation from '../assets/Presentation.png';
import Header from './Header'

function Acceuil() {
    return (
        <>
        <Header />
            <div className="logo1">
                <img src={presentation} className="pres" />
                <div>
                    <img src={intellicook} className="logoName" />
                    <h1 className="title">Des recettes faciles<br/> pour cuisiner Simplement</h1>
                    <hr className="separator" />
                    <p className="slogan">Notre plateforme vous permettra d'avoir un choix illimité<br/> de recettes en fonction des ingrédients de votre choix</p>
                    <div className='cuisinons'>
                        <button type="button" className='cuisine'>
                            <Link to="/search" className="cuisinons">Cuisinons !</Link>
                            </button>
                    </div>
                </div>

            </div>





        </>
    )
}
export default Acceuil;