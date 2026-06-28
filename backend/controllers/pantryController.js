const pantryModel = require("../models/pantry");

// Create Pantry Request
const createRequest = async (req, res) => {

    try {

        const request = await pantryModel.createRequest(

            req.body.booking_id,
            req.body.user_id,
            req.body.tea,
            req.body.coffee,
            req.body.snacks,
            req.body.water,
            req.body.remarks

        );

        res.status(201).json({

            success: true,
            data: request

        });

    } catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// User Requests
const getUserRequests = async (req, res) => {

    try {

        const requests = await pantryModel.getUserRequests(
            req.params.userId
        );

        res.json({

            success: true,
            data: requests

        });

    } catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// Admin Requests
const getAllRequests = async (req, res) => {

    try {

        const requests = await pantryModel.getAllRequests();

        res.json({

            success: true,
            data: requests

        });

    } catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// Update Status
const updateStatus = async (req, res) => {

    try {

        const request = await pantryModel.updateStatus(

            req.params.pantryId,
            req.body.request_status

        );

        res.json({

            success: true,
            data: request

        });

    } catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

module.exports = {

    createRequest,
    getUserRequests,
    getAllRequests,
    updateStatus

};