const pool = require("../config/db");

// Submit Feedback
const submitFeedback = async (
    user_id,
    booking_id,
    room_rating,
    equipment_rating,
    overall_rating,
    comments
) => {

    const result = await pool.query(

        `INSERT INTO feedback
        (
            user_id,
            booking_id,
            room_rating,
            equipment_rating,
            overall_rating,
            comments
        )

        VALUES($1,$2,$3,$4,$5,$6)

        RETURNING *`,

        [
            user_id,
            booking_id,
            room_rating,
            equipment_rating,
            overall_rating,
            comments
        ]

    );

    return result.rows[0];

};

// Get feedback of one user
const getUserFeedback = async (user_id) => {

    const result = await pool.query(

        `SELECT *

        FROM feedback

        WHERE user_id=$1

        ORDER BY submitted_at DESC`,

        [user_id]

    );

    return result.rows;

};

// Admin View
const getAllFeedback = async () => {

    const result = await pool.query(

        `SELECT

            f.*,
            u.full_name

        FROM feedback f

        JOIN users u

        ON f.user_id=u.user_id

        ORDER BY submitted_at DESC`

    );

    return result.rows;

};

module.exports = {

    submitFeedback,
    getUserFeedback,
    getAllFeedback

};