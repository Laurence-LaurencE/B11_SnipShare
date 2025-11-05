import "./Card.css";

export interface CardProps {
  snipppetpostTitle: string;
  snippetContent: string;
  tags: string[];
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
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <p>{commentsCount} commentaires</p>
      <p>{likesCount} likes</p>

{/* back => db > reqete 
              <li>{tags = id_snippetpost + id_tag}</li> */}
      {/* <div>
        <ul>
          <li>tag1</li>
          <li>tag2</li>
          <li>tag3</li>
          <li>tag4</li>
          <li>tag5</li>
        </ul>
      </div> */}
    </div>
  );
};
