const express = require("express");
const router = express.Router();
const managerController = require("../controllers/manager");

router.get("/", managerController.getAllManagers);
router.get("/:id", managerController.getManagerById);
router.get("/experience3", managerController.getAllManagerExperienceMoreThan3Years);
router.post("/", managerController.createManager);
router.put("/:id", managerController.updateManager);
router.delete("/:id", managerController.deleteManager);

module.exports = router;