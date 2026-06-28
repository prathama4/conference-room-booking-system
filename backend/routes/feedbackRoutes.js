const express = require("express");

const router = express.Router();

const feedbackController = require("../controllers/feedbackController");

router.post(
    "/feedback",
    feedbackController.submitFeedback
);

router.get(
    "/feedback/:userId",
    feedbackController.getUserFeedback
);

router.get(
    "/admin/feedback",
    feedbackController.getAllFeedback
);

module.exports = router;