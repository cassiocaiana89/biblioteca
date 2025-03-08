document.addEventListener("DOMContentLoaded", () => {
    const id = new URLSearchParams(window.location.search).get("id");
  
    async function loadUserData() {
      try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
  
        if (data) {
          document.getElementById("nome").textContent = data.nome;
          document.getElementById("email").textContent = data.email;
          document.getElementById("senha").textContent = data.senha;
        } else {
          console.error("Erro ao carregar dados do usuário");
        }
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
      }
    }
  
    loadUserData();
  });
  