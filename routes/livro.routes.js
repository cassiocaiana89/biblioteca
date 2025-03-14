const express = require("express");

const router = express.Router();

const livrocontroller = require("../controllers/livro.controller");
const auth = require("../middleware/auth");



router.get("/page/livros", livrocontroller.index);

router.get("/page/livros/edit/", livrocontroller.edit);

router.get("/page/livros/create/", livrocontroller.create);

router.get("/page/livros/show/", livrocontroller.show);

router.get("/page/livros/destroy/", livrocontroller.destroy);

/// controllers

router.get("//livros", livrocontroller.list);

router.get("//livros/:id", livrocontroller.search);

router.post("//livros", livrocontroller.store);

router.put("/livros/:id", livrocontroller.update);

router.delete("//livros/:id", livrocontroller.destroy);

module.exports = router;