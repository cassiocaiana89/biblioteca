const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class cadastroController {
  async dashboard(req, res) {
    res.sendFile("index.html", { root: "./views/" });
  }

  async page(req, res) {
    res.sendFile("index.html", { root: "./views/cadastro/" });
  }

  async authentication(req, res) {
    const { nome, email, senha } = req.body;
    
    req.session.logado = true;

    res.json(nome, email, senha);
  }
}
module.exports = new cadastroController();
