const express = require("express");
const cors = require("cors");
require("dotenv").config();

// PostgreSQL Connection
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const roomRoutes = require("./routes/roomRoutes");
const availabilityRoutes = require("./routes/availabilityRoutes");
const bookingRoutes=require("./routes/bookingRoutes");
const matrixRoutes=require("./routes/availabilityMatrixRoutes");
const recommendationRoutes=require("./routes/recommendationRoutes");
const chatbotRoutes=require("./routes/chatbotRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const pantryRoutes = require("./routes/pantryRoutes");
const stationeryRoutes=require("./routes/stationeryRoutes");

app.use("/api", authRoutes);
app.use("/api", roomRoutes);
app.use("/api", availabilityRoutes);
app.use("/api", bookingRoutes);
app.use("/api", matrixRoutes);
app.use("/api", recommendationRoutes);
app.use("/api", chatbotRoutes);
app.use("/api", feedbackRoutes);
app.use("/api", notificationRoutes);
app.use("/api", pantryRoutes);
app.use("/api", stationeryRoutes);
// Home Route
app.get("/", (req, res) => {
    res.send("🚀 Conference Room Booking Backend is Running!");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});