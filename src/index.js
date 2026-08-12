const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route de santé (indispensable pour Coolify)
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Routes exemple
app.get("/api/items", (req, res) => {
  res.json([
    { id: 1, name: "Carpe Koï rouge", prix: 45 },
    { id: 2, name: "Carpe Koï blanche", prix: 38 },
  ]);
});

app.post("/api/items", (req, res) => {
  const { name, prix } = req.body;
  res.status(201).json({ id: Date.now(), name, prix });
});

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Le code à changé et le workflow à fonctionné !!!</h1>");
});

app.listen(PORT, () => {
  console.log(`API démarrée sur le port ${PORT}`);
});
