document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("list-usuarios");
    listLivro();
  
    async function listLivro() {
      try {
        const response = await fetch("http://localhost:3000/livros", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (data) {
          window.location.href = "http://localhost:3000/page/dashboard/livros";
        } else {
          errorMessage.textContent = "Erro ao encontrar o livro. Tente novamente.";
        }
      } catch (error) {
        console.error("Erro ao logar:", error);
        errorMessage.textContent = "Erro ao encontrar o livro. Tente novamente.";
      }
    }
  });
  
 

