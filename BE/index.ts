import cors from "cors";
import express, { Application, json } from "express";
import { dbConfig } from "./utils/dbConfig";
import { mainApp } from "./mainApp";

const app: Application = express();

const port: number = 4000;

app.use(json());
app.use(cors());

mainApp(app);

const server = app.listen(port, () => {
  dbConfig();
});
