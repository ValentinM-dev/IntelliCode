import React, { useState } from "react";
import data from "../RecetteList.json";
import "./Search.css";

function RecetteListe() {
    const [saisie, setSaisie] = useState("");
    const [alimentGarder, setAlimentGarder] = useState([]);
    const [alimentEviter, setAlimentEviter] = useState([]);

    const rechercheChangement = (event) => {
        setSaisie(event.target.value);
    };

    const suppEviter = (ingredients) => {
        setAlimentEviter((prev) => prev.filter(item => item.aliment !== ingredients.aliment));
    };

    const suppGarder = (ingredients) => {
        setAlimentGarder((prev) => prev.filter(item => item.aliment !== ingredients.aliment));
    };

    const filteredRecipes = data.filter((recipe) => {
        // Vérifier que recipe.ingredients est défini avant de tenter de l'utiliser
        const recetteAliments = Array.isArray(recipe.ingredients) ? recipe.ingredients.map(ing => ing.aliment?.toLowerCase()) : [];
        const contientAlimentEviter = alimentEviter.some((ingredients) => recetteAliments.includes(ingredients.aliment?.toLowerCase()));
        const contientAlimentGarder = alimentGarder.some((ingredients) => recetteAliments.includes(ingredients.aliment?.toLowerCase()));
        return contientAlimentGarder && !contientAlimentEviter;
    });

    const alimentChoix = (ingredients, choix) => {
        if (ingredients?.aliment) {
            if (choix === "Garder") {
                setAlimentGarder((prev) => [...prev, ingredients]);
                setAlimentEviter((prev) => prev.filter(item => item.aliment !== ingredients.aliment));
            } else if (choix === "Eviter") {
                setAlimentEviter((prev) => [...prev, ingredients]);
                setAlimentGarder((prev) => prev.filter(item => item.aliment !== ingredients.aliment));
            }
        }
    };

    const toutAliment = data.flatMap(recipe => recipe.ingredients);
    const alimentUnique = new Set();
    const filtreAliment = [];

    toutAliment.forEach(ingredients => {
        // Vérifier si ingredients.aliment existe avant de l'utiliser
        if (ingredients?.aliment && !alimentUnique.has(ingredients.aliment) && ingredients.aliment.toLowerCase().includes(saisie.toLowerCase())) {
            filtreAliment.push(ingredients);
            alimentUnique.add(ingredients.aliment);
        }
    });

    // Composant RecipeCard
    function RecipeCard({ imageRecet, title }) {
        return (
            <div className="RecipeResults-card">
                <img src={imageRecet} className="RecipeResults-card-img" alt={title} />
                <div className="RecipeResults-card-info">
                    <div className="RecipeResults-card-title">{title}</div>
                </div>
            </div>
        );
    }

    // Composant RecipeResults
    function RecipeResults({ recipe }) {
        return (
            <div className="RecipeResults">
                <RecipeCard
                    key={recipe.id}
                    imageRecet={recipe.imageRecet}
                    title={recipe.title}
                />
            </div>
        );
    }

    return (
        <div>
            <p className="alimentSelector">Choisissez vos ingrédients</p>

            <input
                className="ingredientInput"
                value={saisie}
                onChange={rechercheChangement}
                type="text"
                placeholder="Recherche d'ingrédients"
            />

            {saisie !== '' && (
                <div className="alignementInputRecherche">
                    {filtreAliment.map((ingredients) => (
                        <div className="placementInputIngredient" key={ingredients?.aliment}>
                            <ul className='inputIngredientaliment'>
                                <li className='ingredientRechercheInput'>{ingredients?.aliment}</li>
                            </ul>
                            <button
                                className='buttonGarder'
                                onClick={() => alimentChoix(ingredients, "Garder")}
                                disabled={alimentGarder.some(item => item.aliment === ingredients?.aliment)}
                            >
                                +
                            </button>
                            <button
                                className='buttonEviter'
                                onClick={() => alimentChoix(ingredients, "Eviter")}
                                disabled={alimentEviter.some(item => item.aliment === ingredients?.aliment)}
                            >
                                -
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <div className="textIngredientSelect">
                <p className="textIngredientSelect">Ingrédients gardés</p>
                <div className="encradrementGarderIngredient">
                    {alimentGarder && alimentGarder.length > 0 && alimentGarder.map((ingredients, index) => (
                        <div className="ingredientSelectionnerGarder" key={index}>
                            <div className="cadreIngredientSelectioner">
                                <button className="buttonSuprimer" onClick={() => suppGarder(ingredients)}>
                                    Delete
                                </button>
                                <img src={ingredients?.img} alt='' className="choixIngredientImage" />
                                <p className="textIngredientSousImg">{ingredients?.aliment}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="textIngredientSelect">
                <p className="textIngredientSelect">Ingrédients évités</p>
                <div className="encradrementGarderIngredient">
                    {alimentEviter && alimentEviter.length > 0 && alimentEviter.map((ingredients, index) => (
                        <div className="ingredientSelectionnerGarder" key={index}>
                            <div className="cadreIngredientSelectioner">
                                <button className="buttonSuprimer" onClick={() => suppEviter(ingredients)}>
                                    Delete
                                </button>
                                <img src={ingredients?.img} alt='' className="choixIngredientEviterImage" />
                                <p className="textIngredientSousImg">{ingredients?.aliment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>

            <div className="resultatRecherchePlat">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe, index) => (
                        <RecipeResults key={index} recipe={recipe} />
                    ))
                ) : (
                    <p className="resultatRecherchePlat">Aucun de ces plats ne vous intérésse ? Alors pourquoi pas crée votre plat ?</p>
                )}
            </div>
        </div>
    );
}

export default RecetteListe;
