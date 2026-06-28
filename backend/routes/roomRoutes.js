const express = require("express");

const router = express.Router();

const roomController = require("../controllers/roomController");

// Get all rooms
router.get("/rooms", roomController.getRooms);

// Get room by ID
router.get("/rooms/:id", roomController.getRoom);

// Get rooms by branch
router.get("/branches/:branchId/rooms", roomController.getRoomsByBranch);

// Add room
router.post("/rooms", roomController.addRoom);

// Update room
router.put("/rooms/:id", roomController.updateRoom);

// Delete room
router.delete("/rooms/:id", roomController.deleteRoom);

module.exports = router;