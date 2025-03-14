document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("add-livro-form");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const editora = document.getElementById("editora").value;
    

    try {
      const response = await fetch("http://localhost:3000/livros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo, autor, editora }),
      });
      const data = await response.json();
      if (data) {
        window.location.href = "http://localhost:3000/page/dashboard/livros";
      } else {
        errorMessage.textContent = "Erro ao logar. Tente novamente.";
      }
      
    } catch (error) {
      console.error("Erro ao logar:", error);
      errorMessage.textContent = "Erro ao logar. Tente novamente.";
    }
  });
});
