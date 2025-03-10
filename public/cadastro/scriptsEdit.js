document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("edit-cadastro-form");
  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get("id");

  try {
    const response = await fetch(`http://localhost:3000/usuarios/${userId}`);
    const user = await response.json();

    if (user) {
      document.getElementById("nome").value = user.nome;
      document.getElementById("email").value = user.email;
      document.getElementById("senha").value = user.senha;
    }
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
      const response = await fetch(`http://localhost:3000/usuarios/${userId}`, {
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
