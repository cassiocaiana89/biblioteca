// criar cliente controller

const { PrismaClient } = require('@prisma/client');
const prisma =  new PrismaClient();

class ClienteController {
    async index( req, res)  {
        res.sendFile("index.html", { root: "./views/cliente/" });
    }

    async show( req, res)  {
        res.sendFile("show.html", { root: "./views/cliente/" });
    }

    async create( req, res)  {
        res.sendFile("create.html", { root: "./views/cliente/" });
    }

    async edit( req, res)  {
        res.sendFile("edit.html", { root: "./views/cliente/" });
    }

    async store( req, res)  {
        const { nome, email, senha } = req.body;
        const cliente = await prisma.cliente.create({
            data: {
                nome,
                email,
                senha,
            },
        });
        res.json(cliente);
    }

    async update( req, res)  {
        const { id } = req.params;
        const { nome, email, senha } = req.body;
        const cliente = await prisma.cliente.update({
            where: {
                id: parseInt(id),
            },
            data: {
                nome,
                email,
                senha,
            },
        });
        res.json(cliente);
    }

    async destroy( req, res)  {
        const { id } = req.params;
        const cliente = await prisma.cliente.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.json(cliente);
    }

    async list( req, res)  {
        const clientes = await prisma.cliente.findMany();
        res.json(clientes);
    }

    async search( req, res)  {
        const { id } = req.params;
        const cliente = await prisma.cliente.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        res.json(cliente);
    }

}
module.exports = new ClienteController();