import { useState } from "react";
import { Button } from "../button/Button";
import "./nav.css";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav">
      <button className="burger" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>
          <Button label="Connexion" />
        </li>
        <li>
          <Button label="Publier un snippet" />
        </li>
      </ul>
    </nav>
  );
};
