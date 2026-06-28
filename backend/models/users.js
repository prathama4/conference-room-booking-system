const pool = require("../config/db");

// Get all users
const getAllUsers = async () => {
    const result = await pool.query(
        "SELECT user_id, employee_id, full_name, email, role, department, default_location FROM users ORDER BY user_id"
    );
    return result.rows;
};

// Get user by email
const getUserByEmail = async (email) => {
    const result = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );
    return result.rows[0];
};

// Create new user
const createUser = async (
    employee_id,
    full_name,
    email,
    password,
    role,
    department,
    default_location
) => {
    const result = await pool.query(
        `INSERT INTO users
        (employee_id, full_name, email, password, role, department, default_location)
        VALUES ($1,$2,$3,$4,$5,$6,$7)
        RETURNING *`,
        [
            employee_id,
            full_name,
            email,
            password,
            role,
            department,
            default_location
        ]
    );

    return result.rows[0];
};

module.exports = {
    getAllUsers,
    getUserByEmail,
    createUser
};