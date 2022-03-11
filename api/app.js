const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to DB", err);
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
