
const { PrismaClient } = require('@prisma/client');
const prisma =  new PrismaClient();

class LivroController {
    async index ( req, res)  {
        const livros = await prisma.livro.findMany();
        res.json(livros);
    }

    async show ( req, res)  {
        const id = req.params.id;
        const livros = await prisma.livro.findUnique(
            {
                where: { id: parseInt(id) },
            }
    );
        res.json(livros);
    }

    async search( req, res) {
        const nome = req.params.nome;
        const livros = await prisma.livro.findFirst(
            {
                where: { nome },
            }
    );
        res.json(livros);
    }

    async store (req, res)  {
        const {titulo, autor} = req.body;
        const livro = await prisma.livro.create({
            data: { titulo, autor },
        });
        res.json(livro);
    }
    async update (req, res)  {
        const{id} = req.params;
        const {titulo, autor} = req.body;
        const livro = await prisma.livro.update({
            where: { id: parseInt(id) },
            data: { titulo, autor },
        });
        res.json(livro);
    }
    async delete (req, res)  {
        const {id} = req.params;
        const livro = await prisma.livro.delete({
            where: { id: parseInt(id) },
        });
        res.json(livro);
        res.status(404).json({ error: 'livro não esta cadastrado'});
    }
}

module.exports = new LivroController();