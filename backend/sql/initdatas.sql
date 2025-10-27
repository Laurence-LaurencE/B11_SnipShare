CREATE TABLE actor(
   id_actor SERIAL,
   actor_name VARCHAR(50)  NOT NULL,
   actor_email VARCHAR(150)  NOT NULL,
   password_hash_actor VARCHAR(100)  NOT NULL,
   PRIMARY KEY(id_actor),
   UNIQUE(actor_name),
   UNIQUE(actor_email)
);

CREATE TABLE snippet(
   id_snippetpost SERIAL,
   snipppetpost_title VARCHAR(150)  NOT NULL,
   language_name VARCHAR(50)  NOT NULL,
   visibility BOOLEAN NOT NULL,
   snippet VARCHAR(500)  NOT NULL,
   id_actor INTEGER NOT NULL,
   PRIMARY KEY(id_snippetpost),
   FOREIGN KEY(id_actor) REFERENCES actor(id_actor)
);

CREATE TABLE token_actor(
   id_token SERIAL,
   token VARCHAR(255)  NOT NULL,
   created_time_token TIMESTAMP NOT NULL,
   expired_time_token TIMESTAMP NOT NULL,
   id_actor INTEGER NOT NULL,
   PRIMARY KEY(id_token),
   UNIQUE(token),
   FOREIGN KEY(id_actor) REFERENCES actor(id_actor)
);

CREATE TABLE tag(
   id_tag SERIAL,
   tag_name VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_tag),
   UNIQUE(tag_name)
);

CREATE TABLE taguer(
   id_snippetpost INTEGER,
   id_tag INTEGER,
   PRIMARY KEY(id_snippetpost, id_tag),
   FOREIGN KEY(id_snippetpost) REFERENCES snippet(id_snippetpost),
   FOREIGN KEY(id_tag) REFERENCES tag(id_tag)
);

CREATE TABLE comment(
   id_actor INTEGER,
   id_snippetpost INTEGER,
   couteint_comment VARCHAR(500)  NOT NULL,
   PRIMARY KEY(id_actor, id_snippetpost),
   FOREIGN KEY(id_actor) REFERENCES actor(id_actor),
   FOREIGN KEY(id_snippetpost) REFERENCES snippet(id_snippetpost)
);

CREATE TABLE snippet_like(
   id_actor INTEGER,
   id_snippetpost INTEGER,
   PRIMARY KEY(id_actor, id_snippetpost),
   FOREIGN KEY(id_actor) REFERENCES actor(id_actor),
   FOREIGN KEY(id_snippetpost) REFERENCES snippet(id_snippetpost)
);

