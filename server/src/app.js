import express from "express";
import cors from "cors";
import teams from "./routes/teams.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 5500);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api/v1/teams", teams);

export default app;
