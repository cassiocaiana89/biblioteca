
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class Clientecontroller {

    async index ( req, res)  {
        const clientes = await prisma.cliente.findMany();
        res.json(clientes);
    }

    async show ( req, res)  {
        const id = req.params.id;
        const clientes = await prisma.cliente.findUnique(
            {
                where: { id: parseInt(id) },
            }
    );
        res.json(clientes);
    }

    async search( req, res) {
        const nome = req.params.nome;
        const clientes = await prisma.cliente.findFirst(
            {
                where: { nome },
            }
    );
        res.json(clientes);
    }

    async store (req, res)  {
        const { nome, cpf, telefone } = req.body;
        const cliente = await prisma.cliente.create({
            data: { nome, cpf, telefone },
        });
        res.json(cliente);
    }
    async update (req, res)  {
        const{id} = req.params;
        const { nome, cpf, telefone } = req.body;
        const cliente = await prisma.cliente.update({
            where: { id: parseInt(id) },
            data: { nome, cpf, telefone },
        });
        res.json(cliente);
    }
    async delete (req, res)  {
        const {id} = req.params;
        const cliente = await prisma.cliente.delete({
            where: { id: parseInt(id) },
        });
        res.json(cliente);
        res.status(404).json({ error: 'Usuário não encontrada'});
    }
}
module.exports = new Clientecontroller();
