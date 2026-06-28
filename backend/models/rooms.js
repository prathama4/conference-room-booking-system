const pool = require("../config/db");

// Get all rooms
const getAllRooms = async () => {
    const result = await pool.query(
        `SELECT r.*, b.branch_name
         FROM rooms r
         JOIN branches b
         ON r.branch_id = b.branch_id
         ORDER BY r.room_id`
    );

    return result.rows;
};

// Get room by ID
const getRoomById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM rooms WHERE room_id = $1",
        [id]
    );

    return result.rows[0];
};

// Get rooms by branch
const getRoomsByBranch = async (branchId) => {
    const result = await pool.query(
        "SELECT * FROM rooms WHERE branch_id = $1",
        [branchId]
    );

    return result.rows;
};

// Add room
const createRoom = async (
    branch_id,
    room_name,
    floor,
    capacity,
    projector,
    smart_tv,
    whiteboard,
    video_conference,
    recording_supported,
    translation_supported,
    pantry_available,
    stationery_available,
    guest_network,
    status
) => {

    const result = await pool.query(

        `INSERT INTO rooms
        (
            branch_id,
            room_name,
            floor,
            capacity,
            projector,
            smart_tv,
            whiteboard,
            video_conference,
            recording_supported,
            translation_supported,
            pantry_available,
            stationery_available,
            guest_network,
            status
        )

        VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)

        RETURNING *`,

        [
            branch_id,
            room_name,
            floor,
            capacity,
            projector,
            smart_tv,
            whiteboard,
            video_conference,
            recording_supported,
            translation_supported,
            pantry_available,
            stationery_available,
            guest_network,
            status
        ]
    );

    return result.rows[0];
};

// Update room
const updateRoom = async (
    id,
    branch_id,
    room_name,
    floor,
    capacity,
    projector,
    smart_tv,
    whiteboard,
    video_conference,
    recording_supported,
    translation_supported,
    pantry_available,
    stationery_available,
    guest_network,
    status
) => {

    const result = await pool.query(

        `UPDATE rooms
        SET
        branch_id=$1,
        room_name=$2,
        floor=$3,
        capacity=$4,
        projector=$5,
        smart_tv=$6,
        whiteboard=$7,
        video_conference=$8,
        recording_supported=$9,
        translation_supported=$10,
        pantry_available=$11,
        stationery_available=$12,
        guest_network=$13,
        status=$14

        WHERE room_id=$15

        RETURNING *`,

        [
            branch_id,
            room_name,
            floor,
            capacity,
            projector,
            smart_tv,
            whiteboard,
            video_conference,
            recording_supported,
            translation_supported,
            pantry_available,
            stationery_available,
            guest_network,
            status,
            id
        ]
    );

    return result.rows[0];
};

// Delete room
const deleteRoom = async (id) => {

    await pool.query(
        "DELETE FROM rooms WHERE room_id=$1",
        [id]
    );

};

module.exports = {
    getAllRooms,
    getRoomById,
    getRoomsByBranch,
    createRoom,
    updateRoom,
    deleteRoom
};