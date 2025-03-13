document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("add-livro-form");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    

    try {
      const response = await fetch("http://localhost:3000/livros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo, autor }),
      });
      const data = await response.json();
      if (data) {
        window.location.href = "http://localhost:3000/page/dashboard/livros";
      } else {
        errorMessage.textContent = "Erro ao cadastrar livro. Tente novamente.";
      }
      
    } catch (error) {
      console.error("Erro ao cadastrar livro:", error);
      errorMessage.textContent = "Erro ao cadastrar livro. Tente novamente.";
    }
  });
});