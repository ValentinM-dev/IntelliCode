import './App.css';
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Acceuil from './components/Acceuil.js'
import PageRecettes from './components/pageRecettes/PageRecettes.js';

function App() {
  return (
    <div className="App">
    <Header />
    <Acceuil />
    <PageRecettes/>
    <Footer />
    </div>
  );
}



export default App;


