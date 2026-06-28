const roomModel = require("../models/rooms");

// Get all rooms
const getRooms = async (req, res) => {
    try {
        const rooms = await roomModel.getAllRooms();

        res.status(200).json({
            success: true,
            data: rooms
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Get room by ID
const getRoom = async (req, res) => {
    try {

        const room = await roomModel.getRoomById(req.params.id);

        if (!room) {
            return res.status(404).json({
                success: false,
                message: "Room not found"
            });
        }

        res.status(200).json({
            success: true,
            data: room
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Get rooms by branch
const getRoomsByBranch = async (req, res) => {
    try {

        const rooms = await roomModel.getRoomsByBranch(req.params.branchId);

        res.status(200).json({
            success: true,
            data: rooms
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Add room
const addRoom = async (req, res) => {
    try {

        const room = await roomModel.createRoom(
            req.body.branch_id,
            req.body.room_name,
            req.body.floor,
            req.body.capacity,
            req.body.projector,
            req.body.smart_tv,
            req.body.whiteboard,
            req.body.video_conference,
            req.body.recording_supported,
            req.body.translation_supported,
            req.body.pantry_available,
            req.body.stationery_available,
            req.body.guest_network,
            req.body.status
        );

        res.status(201).json({
            success: true,
            data: room
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Update room
const updateRoom = async (req, res) => {
    try {

        const room = await roomModel.updateRoom(
            req.params.id,
            req.body.branch_id,
            req.body.room_name,
            req.body.floor,
            req.body.capacity,
            req.body.projector,
            req.body.smart_tv,
            req.body.whiteboard,
            req.body.video_conference,
            req.body.recording_supported,
            req.body.translation_supported,
            req.body.pantry_available,
            req.body.stationery_available,
            req.body.guest_network,
            req.body.status
        );

        res.status(200).json({
            success: true,
            data: room
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Delete room
const deleteRoom = async (req, res) => {
    try {

        await roomModel.deleteRoom(req.params.id);

        res.status(200).json({
            success: true,
            message: "Room deleted successfully"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = {
    getRooms,
    getRoom,
    getRoomsByBranch,
    addRoom,
    updateRoom,
    deleteRoom
};