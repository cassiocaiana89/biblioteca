const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class Cadastrocontroller {

    async index ( req, res)  {
        const cadastro = await prisma.cadastro.findMany();
        res.json(cadastro);
    }

    async show ( req, res)  {
        const id = req.params.id;
        const cadastro = await prisma.cadastro.findUnique(
            {
                where: { id: parseInt(id) },
            }
    );
        res.json(cadastro);
    }

    async search( req, res) {
        const email = req.params.email;
        const senha = req.params.senha
        const cadastro = await prisma.cadastro.findFirst(
            {
                where: { email, senha },
            }
    );
        res.json(cadastro);
    }

    async store (req, res)  {
        const { nome, email, senha } = req.body;
        const cadastro = await prisma.cadastro.create({
            data: { nome, email, senha },
        });
        res.json(cadastro);
    }
    async update (req, res)  {
        const{id} = req.params;
        const { nome, email, senha } = req.body;
        const cadastro = await prisma.cadastro.update({
            where: { id: parseInt(id) },
            data: { nome, email, senha },
        });
        res.json(cadastro);
    }
    async delete (req, res)  {
        const {id} = req.params;
        const cadastro = await prisma.cadastro.delete({
            where: { id: parseInt(id) },
        });
        res.json(cadastro);
        res.status(404).json({ error: 'Usuário não encontrada'});
    }
}
module.exports = new Cadastrocontroller();
