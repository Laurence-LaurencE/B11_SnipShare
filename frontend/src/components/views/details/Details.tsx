import "./Details.css";
import { Header } from "../../ui/header/Header";
import { Footer } from "../../ui/footer/Footer";
import { Card } from "../../ui/card_article/Card";

export const Details = () => {
  const snippetsFake = [
    {
      id_snippetpost: 1,
      snipppetpost_title: "Hello World en JS",
      snippet: 'console.log("Hello World!");',
      tags: ["JavaScript", "Frontend"],
      commentsCount: 2,
      likesCount: 2,
    },
    {
      id_snippetpost: 2,
      snipppetpost_title: "Connexion à une DB avec Node",
      snippet: 'import { Pool } from "pg";',
      tags: ["Node.js", "Backend"],
      commentsCount: 1,
      likesCount: 0,
    },
    // etc...
  ];

  return (
    <>
      <Header />
      <main>
        <div>
          {/* <h2 className="details_title">{snippetpostTitle}</h2> */}
          <h2 className="details_title">snippetpostTitle</h2>

          <p>snippet</p>
          <p>tags</p>
          <p>commentsCount</p>
          <p>likesCount</p>
        </div>
      </main>

      <Footer />
    </>
  );
};
