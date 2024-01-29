import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const { PORT } = process.env;

app.get("/", (_req, res) => {
  res.send("Futura Dental API V1");
});

ViteExpress.listen(app, Number(PORT), () =>
  console.log(`Listening on port ${PORT}`)
);
