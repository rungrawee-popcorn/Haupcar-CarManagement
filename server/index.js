const express = require("express");
const cors = require("cors");

const { connectDB } = require("./config/db");
const carRoutes = require("./routes/carRoutes");

const app = express();

const PORT = 3000;

// ======================
// Middleware
// ======================

app.use(cors());
app.use(express.json());

// ======================
// Test Route
// ======================

app.get("/", (req, res) => {
  res.send("Haupcar API is running");
});

// ======================
// Car Routes
// ======================

app.use("/api/cars", carRoutes);

// ======================
// Start Server
// ======================

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server start failed:", error.message);
    process.exit(1);
  }
};

startServer();
