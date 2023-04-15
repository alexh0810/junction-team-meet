import express, { application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import teams from "./routes/teams.js";

const app = express();
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

// Routes
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/teams", teams);

const uri =
  "mongodb+srv://admin:QMuMUxP8w3v0nsGu@cluster0.mhrhjxq.mongodb.net/junction_meeting?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

export default app;
