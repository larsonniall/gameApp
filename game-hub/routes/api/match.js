const express = require("express");
const router = express.Router();
const controller = require("../../controllers/controller");

router.route("/matchStats").get(controller.matchStats).post(controller.matchStats);
router.route("/tetrisStats").get(controller.tetrisStats).post(controller.tetrisStats);
router.route("/ticStats").get(controller.ticStats).post(controller.ticStats);

module.exports = router;