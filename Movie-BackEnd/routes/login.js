const express = require("express");
const router = express.Router();
const controller = require("../controller/loginControl");

//login
router.get("/", controller.loginGet);
router.post("/", controller.loginPost);
router.post("/logout", controller.logout);


module.exports = router;
