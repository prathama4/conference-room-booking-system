const pool = require("../config/db");

// Save Chat
const saveChat = async (

    user_id,
    user_message,
    ai_response

) => {

    const result = await pool.query(

        `INSERT INTO chat_history
        (
            user_id,
            user_message,
            ai_response
        )

        VALUES($1,$2,$3)

        RETURNING *`,

        [
            user_id,
            user_message,
            ai_response
        ]

    );

    return result.rows[0];

};

// Get Chats of One User
const getUserChats = async (user_id) => {

    const result = await pool.query(

        `SELECT *

        FROM chat_history

        WHERE user_id = $1

        ORDER BY created_at DESC`,

        [user_id]

    );

    return result.rows;

};

// Admin View
const getAllChats = async () => {

    const result = await pool.query(

        `SELECT

            c.*,
            u.full_name

        FROM chat_history c

        JOIN users u

        ON c.user_id = u.user_id

        ORDER BY created_at DESC`

    );

    return result.rows;

};

module.exports = {

    saveChat,
    getUserChats,
    getAllChats

};