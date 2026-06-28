const express = require("express");

const router = express.Router();

const notificationController = require("../controllers/notificationController");

// Create Notification
router.post(
    "/notifications",
    notificationController.createNotification
);

// Get Notifications
router.get(
    "/notifications/:userId",
    notificationController.getNotifications
);

// Mark Notification as Read
router.put(
    "/notifications/:notificationId",
    notificationController.markAsRead
);

module.exports = router;