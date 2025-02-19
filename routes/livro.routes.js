const express = require('express');

const router = express.Router();

const livroController = require('../controllers/livro.controller');


router.get('/livros', livroController.index);

router.get('/livros/:id', livroController.show);

router.get('/livros/pesquisa/:nome', livroController.search);

router.post('/livros', livroController.store);

router.put('/livros/:id', livroController.update);

router.delete('/livros/:id', livroController.delete);


module.exports = router;