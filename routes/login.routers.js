const express = require("express");
const auth = require("../middleware/auth.js");

const router = express.Router();

const loginController = require("../controllers/loginController");

//router.get("/login", loginController.index);

router.get("/page/login", loginController.page);

router.get("/page/dashboard", auth, loginController.dashboard);

//router.get("/login/:id", loginController.show);

//router.get("/login/pesquisa/:email", loginController.search);

router.post("/login", loginController.authentication);

//router.put("/login/:id", loginController.update);

//router.delete("/login/:id", loginController.delete);

module.exports = router;
