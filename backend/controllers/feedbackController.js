const feedbackModel = require("../models/feedback");

// Submit Feedback
const submitFeedback = async (req, res) => {

    try {

        const feedback = await feedbackModel.submitFeedback(

            req.body.user_id,
            req.body.booking_id,
            req.body.room_rating,
            req.body.equipment_rating,
            req.body.overall_rating,
            req.body.comments

        );

        res.status(201).json({

            success: true,
            data: feedback

        });

    } catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// User Feedback
const getUserFeedback = async (req, res) => {

    try {

        const feedback = await feedbackModel.getUserFeedback(
            req.params.userId
        );

        res.json({
            success: true,
            data: feedback
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Admin Feedback
const getAllFeedback = async (req, res) => {

    try {

        const feedback = await feedbackModel.getAllFeedback();

        res.json({
            success: true,
            data: feedback
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    submitFeedback,
    getUserFeedback,
    getAllFeedback
};