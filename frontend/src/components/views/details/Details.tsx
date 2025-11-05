import "./Details.css";
import { Header } from "../../ui/header/Header";
import { Footer } from "../../ui/footer/Footer";

export interface DetailsProps {
    snippetpostTitle: string;
}


export const Details = ({
    snippetpostTitle,

}: DetailsProps) => {

    return (
        <>
        <Header />
        <main>
            <h2 className="details_title">{snippetpostTitle}</h2>
            <div></div>

        </main>

        <Footer />
        </>
    );

};

