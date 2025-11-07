import "./Home.css";
import { Header } from "../../ui/header/Header";
import { Banner } from "../../ui/banner/Banner";
import { Card } from "../../ui/card_article/Card";
import { Footer } from "../../ui/footer/Footer";

export const Home = () => {
  //__________ datasFake en attendt fetch db_________________
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
      <Banner />

      <main>
        {/* _________Card_______ */}

        {/*____ <Card 
      snipppetpostTitle={snipppetpost_title}
      snippetContent={}
      tags={["", ""]}
      commentsCount={}
      likesCount={}
      /> */}

        {/* {snippetsFake.map((snippet, index_snippet) => (
          <Card
            key={index_snippet}
            snipppetpostTitle={snippet.snipppetpost_title}
            snippetContent={snippet.snippet}
            tags={snippet.tags}
            commentsCount={snippet.commentsCount}
            likesCount={snippet.likesCount}
          />
        ))} */}

        {snippetsFake.map((snippet) => (
          <Card
            key={snippet.id_snippetpost}
            snipppetpostTitle={snippet.snipppetpost_title}
            snippetContent={snippet.snippet}
            tags={snippet.tags}
            commentsCount={snippet.commentsCount}
            likesCount={snippet.likesCount}
          />
        ))}
      </main>

      {/* __________searchBar + son import______ => A ajouter ! */}

      <Footer />
    </>
  );
};
