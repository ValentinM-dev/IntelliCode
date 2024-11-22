import React from "react"; 
import recettesList from "./src/recettesList.json";
import './src/components/PageRecettes.css'; /*Pour import CSS, on mets pas son nom avant lien */

const Card = ({ recette, imageRecet }) => {
    return (
        <div className="recipe-card">
            <img src={require(`./src/assets/images/${imageRecet}`)} 
                alt={recette} className="recipe-image"/>
            <h2>{recette}</h2>
            <button onClick={() => { location.href = "https://www.page.de.la.recette.clicked"; }} 
                id="Button" className="cook-button">
                Cliquez-moi pour lire en détails toute la recette ! </button>
        </div>
    );
};

const PageRecettes = () => {
    return (
        <div className="recipes-container">
            {recettesList.map((recetteItem, index) => (
                <Card key={index} recette={recetteItem.recette} imageRecet={recetteItem.imageRecet} />
            ))}
        </div>
    );
};

export default PageRecettes;
    

/* Link : OnClickEvent
https://upmostly.com/tutorials/react-onclick-event-handling-with-examples 
https://stackoverflow.com/questions/16562577/how-can-i-make-a-button-redirect-my-page-to-another-page 
https://code-boxx.com/redirect-on-click-javascript/ 
https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/JavaScript_basics 
https://fr.javascript.info/dom-nodes 

On appelle l'img dans img ou assets, + le nom dans le json. 
Si on clique sur la flèche dans la carte, ça nous ramène sur la page de la recette.
Faire des boutons on-click pour chaque recette. 
Pour choix selon allergènes : un filtre, mais Valentin va le faire. 

Liste des recettes

    Ratatouille
    Soupe de légumes
    Poulet curry coco
    Quiche lorraine
    Pâtes à la carbonara
    Risotto aux champignons
    Chili sin carne/con carne
    Salade de quinoa aux légumes
    Galettes de pommes de terre
    Gâteau au yaourt
    Crêpes
    Brownies
    Salade César au poulet
    Omelette aux légumes
    Lasagnes à la bolognaise
    Poulet rôti avec légumes
    Riz cantonais
    Couscous aux légumes
    Tarte aux pommes
    Cookies au chocolat
    */