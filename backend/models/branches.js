const pool = require("../config/db");

// Get all branches
const getAllBranches = async () => {
    const result = await pool.query(
        "SELECT * FROM branches ORDER BY branch_id"
    );
    return result.rows;
};

// Get branch by ID
const getBranchById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM branches WHERE branch_id = $1",
        [id]
    );
    return result.rows[0];
};

// Create branch
const createBranch = async (branch_name, location) => {
    const result = await pool.query(
        `INSERT INTO branches
        (branch_name, location)
        VALUES ($1,$2)
        RETURNING *`,
        [branch_name, location]
    );

    return result.rows[0];
};

// Update branch
const updateBranch = async (id, branch_name, location) => {
    const result = await pool.query(
        `UPDATE branches
        SET branch_name=$1,
            location=$2
        WHERE branch_id=$3
        RETURNING *`,
        [branch_name, location, id]
    );

    return result.rows[0];
};

// Delete branch
const deleteBranch = async (id) => {
    await pool.query(
        "DELETE FROM branches WHERE branch_id=$1",
        [id]
    );
};

module.exports = {
    getAllBranches,
    getBranchById,
    createBranch,
    updateBranch,
    deleteBranch
};