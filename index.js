const express = require("express");
const cors = require("cors");
const session = require("express-session");

const app = express();
const routerLivros = require("./routes/livro.routes");
const routersClientes = require("./routes/cliente.routers");
const routersCadastro = require("./routes/cadastro.routers");
const routerslogin = require("./routes/login.routers");

app.set("trust proxy", 1); 
app.use(
  session({
    secret: "s3Cur3",
    name: "sessionId",
  })
);

app.use(express.json());
app.use(express.urlencoded());
app.use("/", express.static("public"));
app.use(cors("*"));

app.use(routerLivros);
app.use(routersClientes);
app.use(routersCadastro);
app.use(routerslogin);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
