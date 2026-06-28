const getLLMResponse = async (question) => {

    // Prevent crash if question is missing
    if (!question || typeof question !== "string") {
        return "Please enter a valid question.";
    }

    let answer = "";

    question = question.toLowerCase().trim();

    if (
        question.includes("available room") ||
        question.includes("availability")
    ) {

        answer = "Please check the Room Availability page or Vacancy Matrix to see available conference rooms.";

    }
    else if (
        question.includes("book") ||
        question.includes("booking")
    ) {

        answer = "I can help you book a conference room. Please provide the meeting date, time, and number of attendees.";

    }
    else if (
        question.includes("cancel")
    ) {

        answer = "Please provide your Booking ID to cancel the reservation.";

    }
    else if (
        question.includes("feedback")
    ) {

        answer = "You can submit your feedback after your meeting from the Feedback section.";

    }
    else if (
        question.includes("pantry")
    ) {

        answer = "Pantry services can be requested while booking a conference room.";

    }
    else if (
        question.includes("stationery")
    ) {

        answer = "Stationery requirements can be added during the booking process.";

    }
    else if (
        question.includes("guest network") ||
        question.includes("wifi")
    ) {

        answer = "Guest network access can be requested while creating a booking.";

    }
    else if (
        question.includes("teams")
    ) {

        answer = "A Microsoft Teams meeting link will be generated automatically after a successful booking.";

    }
    else if (
        question.includes("outlook")
    ) {

        answer = "Your meeting will also be added to the Outlook Calendar after booking.";

    }
    else {

        answer = "Sorry, I couldn't understand your request. Please try asking about room booking, availability, feedback, Teams, Outlook, pantry, stationery, or guest network.";

    }

    return answer;

};

module.exports = {
    getLLMResponse
};