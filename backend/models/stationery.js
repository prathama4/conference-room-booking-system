const pool = require("../config/db");

// Create Request
const createRequest = async (

    booking_id,
    user_id,
    whiteboard_marker,
    notepad,
    pen,
    projector_remote,
    extension_board,
    hdmi_cable,
    laser_pointer,
    remarks

) => {

    const result = await pool.query(

        `INSERT INTO stationery(

            booking_id,
            user_id,
            whiteboard_marker,
            notepad,
            pen,
            projector_remote,
            extension_board,
            hdmi_cable,
            laser_pointer,
            remarks

        )

        VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)

        RETURNING *`,

        [

            booking_id,
            user_id,
            whiteboard_marker,
            notepad,
            pen,
            projector_remote,
            extension_board,
            hdmi_cable,
            laser_pointer,
            remarks

        ]

    );

    return result.rows[0];

};

// User Requests
const getUserRequests = async(user_id)=>{

    const result=await pool.query(

        `SELECT *

        FROM stationery

        WHERE user_id=$1

        ORDER BY requested_at DESC`,

        [user_id]

    );

    return result.rows;

};

// Admin
const getAllRequests=async()=>{

    const result=await pool.query(

        `SELECT

        s.*,
        u.full_name

        FROM stationery s

        JOIN users u

        ON s.user_id=u.user_id

        ORDER BY requested_at DESC`

    );

    return result.rows;

};

// Update Status

const updateStatus=async(id,status)=>{

    const result=await pool.query(

        `UPDATE stationery

        SET request_status=$1

        WHERE stationery_id=$2

        RETURNING *`,

        [

            status,
            id

        ]

    );

    return result.rows[0];

};

module.exports={

    createRequest,
    getUserRequests,
    getAllRequests,
    updateStatus

};