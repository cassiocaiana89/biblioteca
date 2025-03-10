document.addEventListener("DOMContentLoaded", async () => {
    const form = document.getElementById("edit-livro-form");
    const queryParams = new URLSearchParams(window.location.search);
    const livroId = queryParams.get("id");
  
    try {
      const response = await fetch(`http://localhost:3000/livros/${livroId}`);
      const livro = await response.json();
  
      if (livro) {
        document.getElementById("titulo").value = livro.titulo;
        document.getElementById("autor").value = livro.autor;
      }
    } catch (error) {
      console.error("Erro ao buscar livro:", error);
    }
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const titulo = document.getElementById("titulo").value;
      const autor = document.getElementById("autor").value;
  
      try {
        const response = await fetch(`http://localhost:3000/livros/${livroId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ titulo, autor }),
        });
  
        const data = await response.json();
        if (data) {
          window.location.href = "http://localhost:3000/page/livros";
        } else {
          console.error("Erro ao editar livro.");
        }
      } catch (error) {
        console.error("Erro ao editar livro:", error);
      }
    });
  });
  