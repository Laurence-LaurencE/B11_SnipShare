// import clsx from "clsx";
import logo_tbase from "../../../../public/pictures/logo_logo_tbase.png";
import { Nav } from "../nav/nav";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <img src={logo_tbase} alt="logo" />
      <h1>SnipShare</h1>
      <Nav />
    </div>
  );
};
