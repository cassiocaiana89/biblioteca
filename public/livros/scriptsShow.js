document.addEventListener("DOMContentLoaded", async () => {
  const livroDetalhes = document.getElementById("livro-detalhes");
  const queryParams = new URLSearchParams(window.location.search);
  const livroId = queryParams.get("id");

  try {
    const response = await fetch(`http://localhost:3000/livros/${livroId}`);
    const livro = await response.json();

    if (livro) {
      const lititulo = document.createElement("li");
      lititulo.textContent = `titulo: ${livro.titulo}`;
      livroDetalhes.appendChild(lititulo);

      const liautor = document.createElement("li");
      liautor.textContent = `autor: ${livro.autor}`;
      livroDetalhes.appendChild(liautor);document.addEventListener("DOMContentLoaded", async () => {
        const form = document.getElementById("edit-livro-form");
        const queryParams = new URLSearchParams(window.location.search);
        const livroId = queryParams.get("id");
        console.log(livroId);
      
        form.addEventListener("submit", async (event) => {
          event.preventDefault();
      
          const titulo = document.getElementById("titulo").value;
          const autor = document.getElementById("autor").value;
          const editora = document.getElementById("editora").value;
          const id = document.getElementById("id").value;
      
          try {
            const response = await fetch(`http://localhost:3000/livros/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ titulo, autor, editora }),
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

      const lieditora = document.createElement("li");
      lieditora.textContent = `editora: ${livro.editora}`;
      livroDetalhes.appendChild(lieditora);
    }
  } catch (error) {
    console.error("Erro ao buscar livro:", error);
  }
});