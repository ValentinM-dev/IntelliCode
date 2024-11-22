import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer.js"; 

function App() {
  return (
    <div className="App">
      <Footer className="App-footer">
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
      </Footer>
    </div>
  );
}

export default App;
