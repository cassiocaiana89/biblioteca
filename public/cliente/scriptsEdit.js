document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("edit-cliente-form");
  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get("id");
  document.getElementById("id").value = userId;

  buscarDados(userId);

  async function buscarDados(id){
    try{
      const response = await fetch(`http://localhost:3000/clientes/${userId}`);
      const cliente = await response.json();
      document.getElementById("nome").value = cliente.nome;
      document.getElementById("email").value = cliente.email;
      document.getElementById("senha").value = cliente.senha;
  } catch (error) {
    console.error("Erro ao editar cliente:", error);
  }
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const id = document.getElementById("id").value;

    try {
      const response = await fetch(`http://localhost:3000/clientes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await response.json();
      if (data) {
        // Redireciona para a página de lista de livros
        window.location.href = "http://localhost:3000/page/dashboard/clientes";
      } else {
        console.error("Erro ao editar cliente.");
      }
    } catch (error) {
      console.error("Erro ao editar  cliente:", error);
    }
  });

  // Crie um novo botão de deletar
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Deletar";
  deleteButton.id = "delete-button";

  // Adicione o botão ao formulário
  form.appendChild(deleteButton);

  // Adicione um evento de clique ao botão de deletar
  deleteButton.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/clientes/${userId}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (data) {
        // Redireciona para a página de lista de livros
        window.location.href = "http://localhost:3000/page/dashboard/clientes";
      } else {
        console.error("Erro ao deletar cliente.");
      }
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
    }
  });
});