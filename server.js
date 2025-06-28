const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const app = express();

dotenv.config(); // Load environment variables from .env file

// Middleware to enable CORS
app.use(
  cors({
    origin: process.env.isLocal
      ? process.env.CLIENT_URL_LOCAL
      : process.env.CLIENT_URL_CLOUD || "*", // Allow all origins
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed HTTP methods
    allowedHeaders: "Content-Type,Authorization", // Allowed headers
  })
);
// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 5000;
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
