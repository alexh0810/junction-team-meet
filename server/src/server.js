import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const URI = process.env.DB_URI;

mongoose.connect(`${URI}`).catch((err) => {
  console.log(
    "MongoDB connection error. Please make sure MongoDB is running. " + err
  );
  process.exit(1);
});

app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("Press CTRL-C to stop\n");
});
