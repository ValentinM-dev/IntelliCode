import logo from './logo.svg';
import './App.css';
import Footer from "./src/components/Footer.js"; 
import PageRecettes from "./src/components/PageRecettes.js";

function App() {
  return (
    <div className="App">
      <PageRecettes className="App-pagrec">
        {/* App-footer */}{/*Rappel : dans JSX, on utilise accolades + double slash étoiles pour coms !*/}
      </PageRecettes>

      {/* Logo et txt de base de React 
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      */}
      {/* Placer ici le composant Footer qu'on souhaite afficher, ou autre. */}
      <Footer></Footer>
    </div>
  );
}

export default App;
