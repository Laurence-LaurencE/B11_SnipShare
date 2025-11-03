import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/views/home/Home";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
