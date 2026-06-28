require("dotenv").config();

module.exports = {
    tenantId: process.env.TEAMS_TENANT_ID,
    clientId: process.env.TEAMS_CLIENT_ID,
    clientSecret: process.env.TEAMS_CLIENT_SECRET
};