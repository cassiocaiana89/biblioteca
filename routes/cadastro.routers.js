const express = require('express');

const router = express.Router();

const cadastroController = require('../controllers/cadastroController');
const auth = require('../middleware/auth');


router.get('/page/cadastro', cadastroController.page);

router.get("/page/dashboard/cadastro", cadastroController.dashboard);

router.post('/cadastro', cadastroController.authentication);




module.exports = router;