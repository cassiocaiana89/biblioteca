// const express = require("express");
const express = require("express");
const router = express.Router();

const livroController = require("../controllers/livro.controller");
const auth = require("../middleware/auth");



router.get("/page/livros", livroController.index);

router.get("/page/livro/edit/:id", livroController.edit);

router.get("/page/livros/create/", livroController.create);

router.get("/page/livros/:id", livroController.show);

// Rotas dos Controllers

router.get("/livros", livroController.list);

router.get("/livros/:id", livroController.search);

router.post("/livros", livroController.store);

router.post("/livros", livroController.store);

router.put("/livros/:id", livroController.update);

router.delete("/livros/:id", livroController.destroy);

module.exports = router;
