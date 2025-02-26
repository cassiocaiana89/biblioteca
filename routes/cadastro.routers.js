const express = require('express');

const router = express.Router();

const cadastroController = require('../controllers/cadastroController');


router.get('/cadastro', cadastroController.index);

router.get('/cadastro/:id', cadastroController.show);

router.get('/cadastro/pesquisa/:email', cadastroController.search);

router.post('/cadastro', cadastroController.store);

router.put('/cadastro/:id', cadastroController.update);

router.delete('/cadastro/:id', cadastroController.delete);


module.exports = router;