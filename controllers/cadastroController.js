const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class cadastroController {
  async index(req, res) {
    res.sendFile("index.html", { root: "./views/cadastro/" });
  }

  async show(req, res) {
    res.sendFile("show.html", { root: "./views/cadastro/" });
  }

  async create(req, res) {
    res.sendFile("create.html", { root: "./views/cadastro/" });
  }

  async edit(req, res) {
    res.sendFile("edit.html", { root: "./views/cadastro/" });
  }

  async store(req, res) {
    const { nome, email, senha } = req.body;

    const user = await prisma.user.create({
      data: {
        nome,
        email,
        senha,
      },
    });

    res.json(user);
  }

  async update(req, res) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    const user = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nome,
        email,
        senha,
      },
    });

    res.json(user);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const user = await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json(user);
  }

  async list(req, res) {
    const users = await prisma.user.findMany();

    res.json(users);
  }

  async search(req, res) {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    res.json(user);
  }
}
module.exports = new cadastroController();
