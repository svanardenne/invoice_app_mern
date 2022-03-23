// Global Imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const authRoutes = require("./routes/auth");

// Mongoose connection
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to DB", err);
});

// Models

// Middleware
app.use(express.json());

// Routing
app.use("/api", authRoutes);

// Server setup
const port = parseInt(process.env.PORT) || 8000;
app.listen(port, () => {
  console.log("Server is running on port", port);
});
