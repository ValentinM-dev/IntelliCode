import React, { useState } from "react";
import data from "../RecetteList.json";
import "./Search.css";

function RecetteListe() {
 const [saisie, setSaisie] = useState("");

 const [alimentGarder, setAlimentGarder] = useState([]);

 const [alimentEviter, setAlimentEviter] = useState([]);

 const rechercheChangement = (event) => {
    setSaisie(event.target.value)
 };

 const suppEviter = (aliment) => {
    setAlimentEviter((prev) => prev.filter(item => item.name !== aliment.name));
 };

 const suppGarder = (aliment) => {
    setAlimentGarder((prev) => prev.filter(item => item.name !== aliment.name));
 };

 const filteredRecipes = data.filter((recipe) => {
    const recetteAliments = recipe.aliment.map(ing => ing.name.toLowerCase());

    const contientAlimentEviter = alimentEviter.some((aliment) => recetteAliments.includes(aliment.name.toLowerCase())
);

    const contientAlimentGarder = alimentGarder.some((aliment) => recetteAliments.includes(aliment.name.toLowerCase())
);

    return contientAlimentGarder && !contientAlimentEviter
 });

 const alimentChoix = (aliment, choix) => {
    if (choix === "Garder") {
        setAlimentGarder((prev) => [...prev, aliment]);
        setAlimentEviter((prev) => prev.filter(item => item.name !== aliment.name));
    } else if (choix === "Eviter") {
        setAlimentEviter ((prev) => [...prev, aliment]);
        setAlimentGarder ((prev) => prev.filter(item => item.name !== aliment.name));
    }
 };

 const toutAliment = data.flatmap(recipe => recipe.aliment);

 const alimentUnique = new Set();

 const filtreAliment = [];

toutAliment.forEach(aliment => {
    if(!alimentUnique.has(aliment.name) && aliment.name.toLowerCase().includes(saisie.toLowerCase())) {
        filtreAliment.push(aliment);
        alimentUnique.add(aliment.name);
    }


})
}

export default Search;