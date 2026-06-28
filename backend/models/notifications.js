const pool = require("../config/db");

// Create Notification
const createNotification = async (
    user_id,
    booking_id,
    title,
    message,
    notification_type
) => {

    const result = await pool.query(

        `INSERT INTO notifications
        (
            user_id,
            booking_id,
            title,
            message,
            notification_type
        )

        VALUES($1,$2,$3,$4,$5)

        RETURNING *`,

        [
            user_id,
            booking_id,
            title,
            message,
            notification_type
        ]

    );

    return result.rows[0];

};

// Get Notifications
const getNotifications = async (user_id) => {

    const result = await pool.query(

        `SELECT *

        FROM notifications

        WHERE user_id=$1

        ORDER BY created_at DESC`,

        [user_id]

    );

    return result.rows;

};

// Mark as Read
const markAsRead = async (notification_id) => {

    const result = await pool.query(

        `UPDATE notifications

        SET is_read=true

        WHERE notification_id=$1

        RETURNING *`,

        [notification_id]

    );

    return result.rows[0];

};

module.exports = {

    createNotification,
    getNotifications,
    markAsRead

};