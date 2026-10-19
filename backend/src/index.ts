
import express from "express";

const app = express();
const port = Number(process.env.PORT) || 3100;

app.use(express.json());

app.get("/api/status", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
