const pool = require("../config/db");

// Create Pantry Request
const createRequest = async (
    booking_id,
    user_id,
    tea,
    coffee,
    snacks,
    water,
    remarks
) => {

    const result = await pool.query(

        `INSERT INTO pantry
        (
            booking_id,
            user_id,
            tea,
            coffee,
            snacks,
            water,
            remarks
        )

        VALUES($1,$2,$3,$4,$5,$6,$7)

        RETURNING *`,

        [
            booking_id,
            user_id,
            tea,
            coffee,
            snacks,
            water,
            remarks
        ]

    );

    return result.rows[0];

};

// Get User Pantry Requests
const getUserRequests = async (user_id) => {

    const result = await pool.query(

        `SELECT *

        FROM pantry

        WHERE user_id=$1

        ORDER BY requested_at DESC`,

        [user_id]

    );

    return result.rows;

};

// Admin View
const getAllRequests = async () => {

    const result = await pool.query(

        `SELECT
            p.*,
            u.full_name

        FROM pantry p

        JOIN users u

        ON p.user_id=u.user_id

        ORDER BY requested_at DESC`

    );

    return result.rows;

};

// Update Request Status
const updateStatus = async (pantry_id, status) => {

    const result = await pool.query(

        `UPDATE pantry

        SET request_status=$1

        WHERE pantry_id=$2

        RETURNING *`,

        [
            status,
            pantry_id
        ]

    );

    return result.rows[0];

};

module.exports = {

    createRequest,
    getUserRequests,
    getAllRequests,
    updateStatus

};