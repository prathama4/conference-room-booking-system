const express = require("express");

const router = express.Router();

const pantryController = require("../controllers/pantryController");

// Create Request
router.post(
    "/pantry",
    pantryController.createRequest
);

// User Requests
router.get(
    "/pantry/:userId",
    pantryController.getUserRequests
);

// Admin Requests
router.get(
    "/admin/pantry",
    pantryController.getAllRequests
);

// Update Status
router.put(
    "/pantry/:pantryId",
    pantryController.updateStatus
);

module.exports = router;