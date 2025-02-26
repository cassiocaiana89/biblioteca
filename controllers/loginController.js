const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class LoginController{

    async index ( req, res)  {
        const login = await prisma.login.findMany();
        res.json(login);
    }

    async show ( req, res)  {
        const id = req.params.id;
        const login = await prisma.login.findUnique(
            {
                where: { id: parseInt(id) },
            }
    );
        res.json(login);
    }

    async search( req, res) {
        const email = req.params.email;
        const senha = req.params.senha
        const login = await prisma.login.findFirst(
            {
                where: { email, senha },
            }
    );
        res.json(login);
    }

    async store (req, res)  {
        const { nome, email, senha } = req.body;
        const login = await prisma.login.create({
            data: { nome, email, senha },
        });
        res.json(login);
    }
    async update (req, res)  {
        const{id} = req.params;
        const {  email, senha } = req.body;
        const login = await prisma.login.update({
            where: { id: parseInt(id) },
            data: { email, senha },
        });
        res.json(login);
    }
    async delete (req, res)  {
        const {id} = req.params;
        const login = await prisma.login.delete({
            where: { id: parseInt(id) },
        });
        res.json(login);
        res.status(404).json({ error: 'Usuário não encontrada'});
    }
}
module.exports = new LoginController()