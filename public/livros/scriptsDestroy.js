document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("delete-livro-form");
  const queryParams = new URLSearchParams(window.location.search);
  const livroId = queryParams.get("id");
  document.getElementById("id").value = livroId;

  buscarDados(livroId);

  async function buscarDados(id) {
    try {
      const response = await fetch(`http://localhost:3000/clientes/${livroId}`);
      const livro = await response.json();
      document.getElementById("titilo").value = livro.titilo;
      document.getElementById("autor").value = livro.autor;
      
    } catch (error) {
      console.error("Erro ao buscar dados do livro:", error);
    }
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const titulo= document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const id = document.getElementById("id").value;

    try {
      const response = await fetch(`http://localhost:3000/livros/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo, autor }),
      });

      const data = await response.json();
      if (data) {
        window.location.href = "http://localhost:3000/page/dashboard/livros";
      } else {
        console.error("Erro ao deletar livro.");
      }
    } catch (error) {
      console.error("Erro ao deletar livro:", error);
    }
  });
});
