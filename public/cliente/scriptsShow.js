document.addEventListener("DOMContentLoaded", async () => {
  const clienteDetalhes = document.getElementById("cliente-detalhes");
  const queryParams = new URLSearchParams(window.location.search);
  const clienteId = queryParams.get("id");

  try {
    const response = await fetch(`http://localhost:3000/clientes/${clienteId}`);
    const cliente = await response.json();

    if (cliente) {
      const liNome = document.createElement("li");
      liNome.textContent = `Nome: ${cliente.nome}`;
      clienteDetalhes.appendChild(liNome);

      const liEmail = document.createElement("li");
      liEmail.textContent = `Email: ${cliente.email}`;
      clienteDetalhes.appendChild(liEmail);document.addEventListener("DOMContentLoaded", async () => {
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
            const response = await fetch(`http://localhost:3000/clientes/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ nome, email, senha }),
            });
      
            const data = await response.json();
            if (data) {
              window.location.href = "http://localhost:3000/page/dashboard/clientes";
            } else {
              console.error("Erro ao editar cliente.");
            }
          } catch (error) {
            console.error("Erro ao editar cliente:", error);
          }
        });
      });

      const liSenha = document.createElement("li");
      liSenha.textContent = `Senha: ${cliente.senha}`;
      clienteDetalhes.appendChild(liSenha);
    }
  } catch (error) {
    console.error("Erro ao buscar cliente:", error);
  }
});