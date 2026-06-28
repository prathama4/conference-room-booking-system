const pool=require("../config/db");

const getMatrix=async(date)=>{

    const result=await pool.query(

        `SELECT

            r.room_id,

            r.room_name,

            r.capacity,

            r.floor,

            CASE

            WHEN EXISTS(

                SELECT 1

                FROM bookings b

                WHERE

                b.room_id=r.room_id

                AND b.booking_date=$1

                AND b.booking_status='Booked'

            )

            THEN 'Booked'

            ELSE 'Available'

            END

            AS status

        FROM rooms r

        ORDER BY room_name`,

        [date]

    );

    return result.rows;

};

module.exports={

    getMatrix

};