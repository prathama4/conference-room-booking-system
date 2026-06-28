const transporter = require("../config/email");

// Booking Confirmation
const sendBookingConfirmation = async (

    email,
    meetingTitle,
    roomName,
    bookingDate,
    startTime,
    endTime

) => {

    await transporter.sendMail({

        from: process.env.EMAIL_USER,

        to: email,

        subject: "Conference Room Booking Confirmed",

        html: `

        <h2>Booking Confirmed</h2>

        <p>Your meeting room has been booked successfully.</p>

        <hr>

        <b>Meeting:</b> ${meetingTitle}<br>

        <b>Room:</b> ${roomName}<br>

        <b>Date:</b> ${bookingDate}<br>

        <b>Time:</b> ${startTime} - ${endTime}

        `

    });

};

// Cancellation
const sendCancellationEmail = async (

    email,
    meetingTitle

) => {

    await transporter.sendMail({

        from: process.env.EMAIL_USER,

        to: email,

        subject: "Conference Room Booking Cancelled",

        html: `

        <h2>Booking Cancelled</h2>

        <p>

        Your booking for

        <b>${meetingTitle}</b>

        has been cancelled.

        </p>

        `

    });

};

// Feedback Survey
const sendSurveyEmail = async (

    email

) => {

    await transporter.sendMail({

        from: process.env.EMAIL_USER,

        to: email,

        subject: "Meeting Feedback",

        html: `

        <h2>Thank You</h2>

        <p>

        Please complete the survey.

        </p>

        <a href="http://localhost:5173/feedback">

        Open Survey

        </a>

        `

    });

};

module.exports = {

    sendBookingConfirmation,
    sendCancellationEmail,
    sendSurveyEmail

};