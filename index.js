

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma =  new PrismaClient();

app.use(express.json());

app.use(express.static('public'));

app.get('/livros', async( req, res) => {
    const livros = await prisma.livro.findMany();
    res.json(livros);
})

app.post('/livros', async(req, res) => {
    const {titulo, autor} = req.body;
    const livro = await prisma.livro.create({
        data: { titulo, autor },
    });
    res.json(livro);
});

app.put('/livros/:id', async(req, res) => {
    const{id} = req.params;
    const {titulo, autor} = req.body;
    const livro = await prisma.livro.update({
        where: { id: parseInt(id) },
        data: { titulo, autor },
    });
    res.json(livro);
});

app.delete('/livros/:id', async (req, res) => {
    const {id} = req.params;
    const livro = await prisma.livro.delete({
        where: { id: parseInt(id) },
    });
    res.json(livro);
    res.status(404).json({ error: 'livro não esta cadastrado'});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

