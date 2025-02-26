const express = require('express');

const router = express.Router();

const loginController = require('../controllers/loginController');


router.get('/login', loginController.index);

router.get('/login/:id', loginController.show);

router.get('/login/pesquisa/:email', loginController.search);

router.post('/login', loginController.store);

router.put('/login/:id', loginController.update);

router.delete('/login/:id', loginController.delete);


module.exports = router;