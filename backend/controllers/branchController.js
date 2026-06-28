const branchModel = require("../models/branches");

// Get all branches
const getBranches = async (req, res) => {
    try {
        const branches = await branchModel.getAllBranches();

        res.json({
            success: true,
            data: branches
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

// Get one branch
const getBranch = async (req, res) => {

    try {

        const branch = await branchModel.getBranchById(req.params.id);

        res.json({
            success: true,
            data: branch
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Add branch
const addBranch = async (req, res) => {

    try {

        const { branch_name, location } = req.body;

        const branch = await branchModel.createBranch(
            branch_name,
            location
        );

        res.status(201).json({
            success: true,
            data: branch
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Update branch
const updateBranch = async (req, res) => {

    try {

        const { branch_name, location } = req.body;

        const branch = await branchModel.updateBranch(
            req.params.id,
            branch_name,
            location
        );

        res.json({
            success: true,
            data: branch
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Delete branch
const deleteBranch = async (req, res) => {

    try {

        await branchModel.deleteBranch(req.params.id);

        res.json({
            success: true,
            message: "Branch Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    getBranches,
    getBranch,
    addBranch,
    updateBranch,
    deleteBranch
};