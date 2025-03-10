// livro controller

const { PrismaClient } = require('@prisma/client');
const prisma =  new PrismaClient();

class LivroController {
    async index(req, res) {
        res.sendFile("index.html", { root: "./views/livros/" });
    }
    async create(req, res) {
        res.sendFile("create.html", { root: "./views/livros/" });
    }
    async edit(req, res) {
        res.sendFile("edit.html", { root: "./views/livros/" });
    }
    async show(req, res) {
        res.sendFile("show.html", { root: "./views/livros/" });
    }

    async store(req, res) {
        const{titulo, autor} = req.body;

        const livro = await prisma.livro.create({
            data: {
                titulo,
                autor
            }
        });
        res.json(livro);
    }

    async update(req, res) {
        const { id } = req.params;
        const {titulo, autor} = req.body;

        const livro = await prisma.livro.update({
            where: {
                id: parseInt(id),
            },
            data: {
                titulo, 
                autor
            },
        });

        res.json(livro);
    }

    async destroy(req, res) {
        const { id } = req.params;

        const livro = await prisma.livro.delete({
            where: {
                id: parseInt(id),
            },
        });

        res.json(livro);
    }

    async list(req, res) {
        const livros = await prisma.livro.findMany();

        res.json(livros);    
    }

    async search(req, res) {    
        const { id } = req.params;

        const livro = await prisma.livro.findUnique({
            where: {
                id: parseInt(id),   
            },            
        });

        res.json(livro);
    }

}

module.exports = new LivroController();