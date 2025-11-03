import "./Footer.css";
import logo_tbase from "/pictures/logo_tbase.png";
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <footer className="footer">
        <img src={logo_tbase} alt="logo SnipShare" className="footer_logo" />

        <div className="footer_buttons">
          <Button 
          label="About us" 
          onClick={() => navigate("/about")}
          />
          <Button 
          label="Legal" 
          onClick={() => navigate("/legal")}
          />
          <Button 
          label="Contact us" 
          onClick={() => navigate("/contact")}
          />
        </div>
      </footer>
    </>
  );
};
