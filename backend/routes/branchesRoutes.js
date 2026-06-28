const express = require("express");

const router = express.Router();

const branchController = require("../controllers/branchController");

router.get("/branches", branchController.getBranches);

router.get("/branches/:id", branchController.getBranch);

router.post("/branches", branchController.addBranch);

router.put("/branches/:id", branchController.updateBranch);

router.delete("/branches/:id", branchController.deleteBranch);

module.exports = router;