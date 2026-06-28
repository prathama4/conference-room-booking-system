const bookingModel = require("../models/bookings");
const emailService = require("../services/emailService");
const teamsService = require("../services/teamsService");

// =========================
// Get All Bookings
// =========================

const getBookings = async (req, res) => {

    try {

        const bookings = await bookingModel.getAllBookings();

        res.json({
            success: true,
            data: bookings
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// =========================
// Create Booking
// =========================

const createBooking = async (req, res) => {

    try {

        // Check room availability
        const available = await bookingModel.checkRoomAvailability(

            req.body.room_id,
            req.body.booking_date,
            req.body.start_time,
            req.body.end_time

        );

        if (!available) {

            return res.status(400).json({

                success: false,
                message: "Room already booked for selected time."

            });

        }

        // Generate Teams Meeting
        const teamsMeeting = await teamsService.generateTeamsMeeting(

            req.body.meeting_title

        );

        // Save Booking
        const booking = await bookingModel.createBooking(

            req.body.user_id,
            req.body.room_id,
            req.body.meeting_title,
            req.body.meeting_description,
            req.body.booking_date,
            req.body.start_time,
            req.body.end_time,
            req.body.attendees,
            req.body.recording_enabled

            // Later we'll add:
            // teamsMeeting.meetingLink
            // outlookEvent
            // pantry
            // stationery
        );

        // Send Confirmation Email
        await emailService.sendBookingConfirmation(

            req.body.email,
            req.body.meeting_title,
            req.body.room_name,
            req.body.booking_date,
            req.body.start_time,
            req.body.end_time

        );

        res.status(201).json({

            success: true,
            booking,
            teamsMeeting

        });

    } catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// =========================
// Cancel Booking
// =========================

const cancelBooking = async (req, res) => {

    try {

        const booking = await bookingModel.cancelBooking(req.params.id);

        await emailService.sendCancellationEmail(

            req.body.email,
            req.body.meeting_title

        );

        res.json({

            success: true,
            data: booking

        });

    } catch (err) {

        res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

module.exports = {

    getBookings,
    createBooking,
    cancelBooking

};