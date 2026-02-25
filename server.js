const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Middleware
app.use(cors({
  origin: "*",  // Allow all origins during development (fix for 127.0.0.1 vs localhost)
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true
}));
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const rideRoutes = require("./routes/rides");
const requestRoutes = require("./routes/requests");
const messageRoutes = require("./routes/messages");

app.use("/auth", authRoutes);
app.use("/rides", rideRoutes);
app.use("/requests", requestRoutes);
app.use("/messages", messageRoutes);

// MongoDB connection
mongoose.connect("", {
  dbName: "ride_share",
})
.then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(5000, () => {
    console.log("🚀 Server is running at http://localhost:5000");
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

