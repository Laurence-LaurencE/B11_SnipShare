import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/views/home/Home";
import { Details } from "./components/views/details/Details";
import "./styles/App.css";

function App() {
  return (
    <>
      <p className="read-the-docs">
        hello _ ds le fichier App du Front : Rentrer les routes de chaq views !
      </p>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
