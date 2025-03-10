document.addEventListener("DOMContentLoaded", async () => {
  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get("id");

  try {
    const response = await fetch(`http://localhost:3000/usuarios/${userId}`);
    const user = await response.json();

    if (user) {
      document.getElementById("nome").textContent = user.nome;
      document.getElementById("email").textContent = user.email;
      document.getElementById("senha").textContent = user.senha;
    }
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
  }
});
