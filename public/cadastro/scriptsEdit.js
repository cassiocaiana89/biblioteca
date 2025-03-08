document.addEventListener("DOMContentLoaded", () => {
    const editForm = document.getElementById("edit-cadastro-form");
  
    editForm.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const id = new URLSearchParams(window.location.search).get("id");
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
  
      try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, email, senha }),
        });
  
        if (response.ok) {
          // Redireciona para a página de listagem após a atualização bem-sucedida
          window.location.href = "http://localhost:3000/page/dashboard/cadastro";
        } else {
          console.error("Erro ao atualizar o cadastro");
        }
      } catch (error) {
        console.error("Erro ao atualizar o cadastro:", error);
      }
    });
  
    loadUserData();
  
    async function loadUserData() {
      const id = new URLSearchParams(window.location.search).get("id");
  
      try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
  
        if (data) {
          document.getElementById("nome").value = data.nome;
          document.getElementById("email").value = data.email;
          document.getElementById("senha").value = data.senha;
        } else {
          console.error("Erro ao carregar dados do usuário");
        }
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
      }
    }
  });
  