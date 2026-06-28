const crypto = require("crypto");

// Temporary Teams Link Generator
// Replace this later with Microsoft Graph API

const generateTeamsMeeting = async (meetingTitle) => {

    const meetingId = crypto.randomUUID();

    return {
        meetingId,
        meetingLink:
            `https://teams.microsoft.com/l/meetup-join/${meetingId}`
    };

};

module.exports = {

    generateTeamsMeeting

};