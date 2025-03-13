document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("delete-cadastro-form");
  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get("id");
  document.getElementById("id").value = userId;

  buscarDados(userId);

  async function buscarDados(id) {
    try {
      const response = await fetch(`http://localhost:3000/usuarios/${userId}`);
      const usuario = await response.json();
      document.getElementById("nome").value = usuario.nome;
      document.getElementById("email").value = usuario.email;
      document.getElementById("senha").value = usuario.senha;
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const id = document.getElementById("id").value;

    try {
      const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await response.json();
      if (data) {
        window.location.href = "http://localhost:3000/page/usuarios";
      } else {
        console.error("Erro ao deletar usuário.");
      }
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  });
});
