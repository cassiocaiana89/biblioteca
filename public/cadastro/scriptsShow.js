document.addEventListener("DOMContentLoaded", async () => {
  const usuarioDetalhes = document.getElementById("usuario-detalhes");
  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get("id");

  try {
    const response = await fetch(`http://localhost:3000/usuarios/${userId}`);
    const usuario = await response.json();

    if (usuario) {
      const liNome = document.createElement("li");
      liNome.textContent = `Nome: ${usuario.nome}`;
      usuarioDetalhes.appendChild(liNome);

      const liEmail = document.createElement("li");
      liEmail.textContent = `Email: ${usuario.email}`;
      usuarioDetalhes.appendChild(liEmail);

      const liSenha = document.createElement("li");
      liSenha.textContent = `Senha: ${usuario.senha}`;
      usuarioDetalhes.appendChild(liSenha);
    }
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
  }
});