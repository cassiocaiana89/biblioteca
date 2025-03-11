document.addEventListener("DOMContentLoaded", async () => {
    const deleteButton = document.getElementById("delete-button");
    const queryParams = new URLSearchParams(window.location.search);
    const userId = queryParams.get("id");
  
    deleteButton.addEventListener("click", async () => {
      try {
        const response = await fetch(`http://localhost:3000/usuarios/${userId}`, {
          method: "DELETE",
        });
  
        if (response.ok) {
          window.location.href = "http://localhost:3000/page/usuarios";
        } else {
          console.error("Erro ao deletar usuário:", response.status);
        }
      } catch (error) {
        console.error("Erro ao deletar usuário:", error);
      }
    });
  });