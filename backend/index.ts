import Express from "express";

const app = Express();
const port = 3000;

app.use(Express.json());

app.get("/", (req, res) => {
  res.send("Bienvenue sur l’API SnipShare !");
});

app.listen(port, () => {
  console.log(`✅ Serveur en ligne sur http://localhost:${port}`);
});
