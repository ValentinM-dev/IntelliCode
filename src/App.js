import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer.js"; 
import PageRecettes from "./components/PageRecettes.js";

function App() {
  return (
    <div className="App">
      <PageRecettes className="App-pagrec "> (//*App-footer*//)
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
      </PageRecettes>
    </div>
  );
}

export default App;
