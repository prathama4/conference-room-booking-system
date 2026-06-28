const pool = require("../config/db");

// Get all bookings
const getAllBookings = async () => {

    const result = await pool.query(

        `SELECT
            b.*,
            u.full_name,
            r.room_name

        FROM bookings b

        JOIN users u
        ON b.user_id=u.user_id

        JOIN rooms r
        ON b.room_id=r.room_id

        ORDER BY booking_date,start_time`

    );

    return result.rows;

};

// Check if room is already booked

const checkRoomAvailability = async (

    room_id,
    booking_date,
    start_time,
    end_time

)=>{

    const result = await pool.query(

        `SELECT *

        FROM bookings

        WHERE room_id=$1

        AND booking_date=$2

        AND booking_status='Booked'

        AND (

            (start_time < $4)

            AND

            (end_time > $3)

        )`,

        [

            room_id,
            booking_date,
            start_time,
            end_time

        ]

    );

    return result.rows.length===0;

};
// Create Booking
const createBooking = async (

    user_id,
    room_id,
    meeting_title,
    meeting_description,
    booking_date,
    start_time,
    end_time,
    attendees,
    recording_enabled

)=>{

    const result = await pool.query(

        `INSERT INTO bookings(

            user_id,
            room_id,
            meeting_title,
            meeting_description,
            booking_date,
            start_time,
            end_time,
            attendees,
            recording_enabled

        )

        VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)

        RETURNING *`,

        [

            user_id,
            room_id,
            meeting_title,
            meeting_description,
            booking_date,
            start_time,
            end_time,
            attendees,
            recording_enabled

        ]

    );

    return result.rows[0];

};

// Cancel Booking

const cancelBooking = async(id)=>{

    const result = await pool.query(

        `UPDATE bookings

        SET
        booking_status='Cancelled'

        WHERE booking_id=$1

        RETURNING *`,

        [id]

    );

    return result.rows[0];

};

module.exports={

    getAllBookings,
    checkRoomAvailability,
    createBooking,
    cancelBooking

};