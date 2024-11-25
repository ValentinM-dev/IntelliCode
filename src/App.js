import React from "react";
import './App.css';
import PageRecettes from "./src/components/PageRecettes.js";
import Footer from "./src/components/Footer.js"; 

function App() {
  return (
    <div className="App">
      <PageRecettes/>
        {/* App-footer */}{/*Rappel : dans JSX, on utilise accolades + double slash étoiles pour coms !*/}
      {/* Placer ici le composant Footer qu'on souhaite afficher, ou autre. */}
      <Footer/>
    </div>
  );
}

export default App;
