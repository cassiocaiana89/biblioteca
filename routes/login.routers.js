const express = require("express");
const auth = require("../middleware/auth.js");

const router = express.Router();

const loginController = require("../controllers/loginController");

//router.get("/login", loginController.index);

router.get("/page/login", loginController.page);

router.get("/page/dashboard", auth, loginController.dashboard);



router.post("/login", loginController.authentication);



module.exports = router;
