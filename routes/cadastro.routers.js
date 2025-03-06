const express = require("express");

const router = express.Router();

const cadastroController = require("../controllers/cadastroController");
const auth = require("../middleware/auth");

// router.get('/page/cadastro', cadastroController.page);

// router.get("/page/dashboard/cadastro", cadastroController.dashboard);

// router.post('/cadastro', cadastroController.authentication);

// Rotas dos Views

router.get("/page/usuarios", cadastroController.index);

router.get("/page/usuarios/edit/:id", cadastroController.edit);

router.get("/page/usuarios/create/", cadastroController.create);

router.get("/page/usuarios/:id", cadastroController.show);

// Rotas dos Controllers

router.get("/usuarios", cadastroController.list);

router.get("/usuarios/:id", cadastroController.search);

router.post("/usuarios", cadastroController.store);

router.put("/usuarios/:id", cadastroController.update);

router.delete("/usuarios/:id", cadastroController.destroy);

module.exports = router;
