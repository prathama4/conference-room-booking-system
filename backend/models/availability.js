const pool = require("../config/db");

// Get availability for a particular date

const getAvailability = async (date) => {

    const result = await pool.query(

        `
        SELECT
            r.room_id,
            r.room_name,
            r.capacity,
            r.floor,
            r.status,

            b.booking_id,
            b.start_time,
            b.end_time,
            b.booking_status

        FROM rooms r

        LEFT JOIN bookings b

        ON r.room_id = b.room_id

        AND b.booking_date = $1

        ORDER BY r.room_name
        `,

        [date]

    );

    return result.rows;

};

module.exports = {
    getAvailability
};