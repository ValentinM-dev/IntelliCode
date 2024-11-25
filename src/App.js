import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./components/Acceuil.js";
import Search from "./components/Search.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
