const notificationModel = require("../models/notifications");

// Create Notification
const createNotification = async (req, res) => {

    try {

        const notification = await notificationModel.createNotification(

            req.body.user_id,
            req.body.title,
            req.body.message,
            req.body.notification_type

        );

        res.status(201).json({

            success: true,
            data: notification

        });

    } catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// Get Notifications
const getNotifications = async (req, res) => {

    try {

        const notifications = await notificationModel.getNotifications(

            req.params.userId

        );

        res.json({

            success: true,
            data: notifications

        });

    } catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// Mark Notification Read
const markAsRead = async (req, res) => {

    try {

        const notification = await notificationModel.markAsRead(

            req.params.notificationId

        );

        res.json({

            success: true,
            data: notification

        });

    } catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

module.exports = {

    createNotification,
    getNotifications,
    markAsRead

};