const pool = require("../config/db");

const recommendRoom = async (

    attendees,
    projector,
    recording,
    guest_network

) => {

    const result = await pool.query(

        `SELECT *

        FROM rooms

        WHERE

        capacity >= $1

        AND projector = $2

        AND recording_supported = $3

        AND guest_network = $4

        AND status='Available'

        ORDER BY capacity ASC

        LIMIT 1`,

        [

            attendees,

            projector,

            recording,

            guest_network

        ]

    );

    return result.rows[0];

};

module.exports = {

    recommendRoom

};