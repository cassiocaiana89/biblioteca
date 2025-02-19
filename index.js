
const express = require('express');
const cors = require('cors');

const app = express();
const routerLivros = require('./routes/livro.routes'); 
const routersClientes = require('./routes/cliente.routers')


app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.use(routerLivros)
app.use(routersClientes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
