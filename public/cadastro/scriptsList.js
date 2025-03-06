document.addEventListener("DOMContentLoaded", () => {
  const div = document.getElementById("list-usuarios");
  listUsers();

  async function listUsers() {
    try {
      const response = await fetch("http://localhost:3000/usuarios", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data) {
        //window.location.href = "http://localhost:3000/page/dashboard/cadastro";
      } else {
        errorMessage.textContent = "Erro ao logar. Tente novamente.";
      }
    } catch (error) {
      console.error("Erro ao logar:", error);
      errorMessage.textContent = "Erro ao logar. Tente novamente.";
    }
  }
});
