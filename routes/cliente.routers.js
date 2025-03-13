const express = require("express");

const router = express.Router();

const clienteController = require("../controllers/clienteController");
const auth = require("../middleware/auth");



router.get("/page/clientes", clienteController.index);

router.get("/page/clientes/edit/", clienteController.edit);

router.get("/page/clientes/create/", clienteController.create);

router.get("/page/clientes/show/", clienteController.show);

router.get("/page/clientes/destory/", clienteController.destroy);

/// controllers

router.get("/clientes", clienteController.list);

router.get("/clientes/:id", clienteController.search);

router.post("/clientes", clienteController.store);

router.put("/clientes/:id", clienteController.update);

router.delete("/clientes/:id", clienteController.destroy);

module.exports = router;