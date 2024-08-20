import express from "express";
import authRoutes from "./routes/authRoutes.js";
import connect from "./db/connect.js";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables

const app = express();

const PORT = process.env.PORT;

// Connect to MongoDB and then start the server
const startServer = async () => {
  try {
    await connect(); // Ensure DB connection is established before starting the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1); // Exit process if unable to connect to the database
  }
};

startServer();
app.get("/", (req, res) => {
  res.send("<h1> Running </h1>");
});

// use middleware
app.use("/api/auth", authRoutes);
