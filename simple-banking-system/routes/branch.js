const express = require("express");
const router = express.Router();
const branchController = require("../controllers/branch");

router.get("/", branchController.getAllBranches);
router.post("/", branchController.createBranchAndManager);

module.exports = router;
