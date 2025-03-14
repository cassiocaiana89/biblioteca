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
      usuarioDetalhes.appendChild(liEmail);document.addEventListener("DOMContentLoaded", async () => {
        const form = document.getElementById("edit-cadastro-form");
        const queryParams = new URLSearchParams(window.location.search);
        const userId = queryParams.get("id");
        console.log(userId);
      
        form.addEventListener("submit", async (event) => {
          event.preventDefault();
      
          const nome = document.getElementById("nome").value;
          const email = document.getElementById("email").value;
          const senha = document.getElementById("senha").value;
          const id = document.getElementById("id").value;
      
          try {
            const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ nome, email, senha }),
            });
      
            const data = await response.json();
            if (data) {
              window.location.href = "http://localhost:3000/page/usuarios";
            } else {
              console.error("Erro ao editar usuário.");
            }
          } catch (error) {
            console.error("Erro ao editar usuário:", error);
          }
        });
      });

      const liSenha = document.createElement("li");
      liSenha.textContent = `Senha: ${usuario.senha}`;
      usuarioDetalhes.appendChild(liSenha);
    }
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
  }
});