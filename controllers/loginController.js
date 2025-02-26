const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class LoginController {
  async dashboard(req, res) {
    res.sendFile("index.html", { root: "./views/" });
  }

  async page(req, res) {
    res.sendFile("index.html", { root: "./views/login/" });
  }

  async authentication(req, res) {
    const { email, senha } = req.body;
    /*const login = await prisma.usuario.findFirst({
      data: { email },
    });
    
    if (login.senha === senha) {
        req.session.logado = true;
      res.json(login);
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }*/
    req.session.logado = true;

    res.json(email);
  }
}
module.exports = new LoginController();
