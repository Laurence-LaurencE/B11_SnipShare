-- Table actor
INSERT INTO actor (actor_name, actor_email, password_hash_actor) VALUES
('CodeNinja', 'codeninja@example.com', 'hash1234abcd'),
('DevQueen', 'devqueen@example.com', 'hash5678efgh'),
('BugHunter', 'bughunter@example.com', 'hash91011ijkl'),
('PixelSmith', 'pixelsmith@example.com', 'hash1213mnop'),
('ScriptWizard', 'scriptwizard@example.com', 'hash1415qrst');

-- Table snippet
INSERT INTO snippet (snipppetpost_title, language_name, visibility, snippet, id_actor) VALUES
('Hello World en JS', 'JavaScript', TRUE, 'console.log("Hello World!");', 1),
('Connexion à une DB avec Node', 'TypeScript', FALSE, 'import { Pool } from "pg";', 2),
('CSS Grid de base', 'CSS', TRUE, '.container { display: grid; grid-template-columns: 1fr 1fr; }', 3),
('Fonction de tri Python', 'Python', TRUE, 'def tri(liste): return sorted(liste)', 4),
('Fetch API POST', 'JavaScript', FALSE, 'fetch("/api", {method: "POST", body: JSON.stringify(data)});', 1);

-- Table token_actor
INSERT INTO token_actor (token, created_time_token, expired_time_token, id_actor) VALUES
('tok_abc123', '2025-10-25 10:00:00', '2025-10-26 10:00:00', 1),
('tok_def456', '2025-10-25 11:00:00', '2025-10-26 11:00:00', 2),
('tok_ghi789', '2025-10-25 12:00:00', '2025-10-26 12:00:00', 3),
('tok_jkl012', '2025-10-25 13:00:00', '2025-10-26 13:00:00', 4),
('tok_mno345', '2025-10-25 14:00:00', '2025-10-26 14:00:00', 5);


-- Table tag
INSERT INTO tag (tag_name) VALUES
('JavaScript'),
('Node.js'),
('CSS'),
('Python'),
('Frontend'),
('Backend');

-- Table taguer
INSERT INTO taguer (id_snippetpost, id_tag) VALUES
(1, 1), -- JS
(1, 5), -- Frontend
(2, 2), -- Node.js
(2, 6), -- Backend
(3, 3), -- CSS
(4, 4), -- Python
(5, 1), -- JS
(5, 6); -- Backend


-- Table comment
INSERT INTO comment (id_actor, id_snippetpost, couteint_comment) VALUES
(2, 1, 'Très clair et concis !'),
(3, 1, 'Tu pourrais ajouter une explication du console.log.'),
(1, 3, 'Super base pour comprendre Grid.'),
(5, 2, 'Bon exemple pour la connexion.'),
(4, 5, 'Jolie requête fetch, simple et efficace.');


-- Table snippet_like
INSERT INTO snippet_like (id_actor, id_snippetpost) VALUES
(2, 1),
(3, 1),
(1, 3),
(4, 3),
(5, 4),
(2, 5);

