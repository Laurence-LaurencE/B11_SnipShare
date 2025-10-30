import "./Home.css";
import { Header } from "../../ui/header/Header";
import { Banner } from "../../ui/banner/Banner";
import { Footer } from "../../ui/footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />

      {/* ajouter le composant searchBar + son import ! */}

      <Footer />
    </>
  );
};
