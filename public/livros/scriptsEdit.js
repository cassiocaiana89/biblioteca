document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("edit-cadastro-form");
  const queryParams = new URLSearchParams(window.location.search);
  const livroId = queryParams.get("id");
  document.getElementById("id").value = livroId;

  buscarDados(livroId);

  async function buscarDados(id){
    try{
      const response = await fetch(`http://localhost:3000/livros/${livroId}`);
      const livro = await response.json();
      document.getElementById("Titulo").value = livro.titulo;
      document.getElementById("Autor").value = livro.autor;
    } catch (error) {
      console.error("Erro ao buscar dados do livro:", error);
    }
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const titulo = document.getElementById("Titulo").value;
    const autor = document.getElementById("Autor").value;
    const id = document.getElementById("id").value;

    try {
      const response = await fetch(`http://localhost:3000/livros/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo, autor }),
      });

      const data = await response.json();
      if (data) {
        window.location.href = "http://localhost:3000/page/dashboard/livros";
      } else {
        console.error("Erro ao editar livro.");
      }
    } catch (error) {
      console.error("Erro ao editar livro:", error);
    }
  });// criar um botão deletar
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Deletar";
  deleteButton.id = "delete-button";

  form.appendChild(deleteButton);

  deleteButton.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/livros/${livroId}`, {
        method: "DELETE",
      });

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