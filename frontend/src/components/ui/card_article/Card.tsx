import "./Card.css";

export interface CardProps {
  snipppetpostTitle: string;
  snippetContent: string;
  id_tag: number;
  tags: String[];
  commentsCount: number;
  likesCount: number;
}

export const Card = ({
  snipppetpostTitle,
  snippetContent,
  tags,
  commentsCount,
  likesCount,
}: CardProps) => {
  return (
    <div className="card">
      <h3 className="crd_snippet_title">{snipppetpostTitle}</h3>

      {/*____ snippet______ */}
      {/*<pre> garde la mise en forme du code source saisi. */}
      {/*<code> = "ceci est du code" pour le nav => accessibilité*/}
      {/* --> Pour le prochain projet de ce type, prévoir un champ présentation du snippet + un champ spécifique pour le code => donc ajouter une propriété code ds ma db ! */}
      <pre>
        <code>{snippetContent}</code>
      </pre>

      {/*____ tags______ */}
      <div>
        <ul>
            {/* back => db > reqete */}
          {/* <li>{tags = id_snippetpost + id_tag}</li> */}
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
