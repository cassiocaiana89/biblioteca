document.addEventListener("DOMContentLoaded", async () => {
  const livroDetalhes = document.getElementById("livro-detalhes");
  const queryParams = new URLSearchParams(window.location.search);
  const livroId = queryParams.get("id");

  try {
    const response = await fetch(`http://localhost:3000/livro/${livroId}`);
    const livro = await response.json();

    if (livro) {
      const li_titulo = document.createElement("li");
      li_livro.textContent = `titulo: ${livro.titulo}`;
      livroDetalhes.appendChild(li_livro);

      const li_autor = document.createElement("li");
      li_autor.textContent = `autor: ${cliente.email}`;
      livroDetalhes.appendChild(li_autor);document.addEventListener("DOMContentLoaded", async () => {
        const form = document.getElementById("edit-livro-form");
        const queryParams = new URLSearchParams(window.location.search);
        const livroId = queryParams.get("id");
        console.log(livroId);
      
        form.addEventListener("submit", async (event) => {
          event.preventDefault();
      
          const titulo = document.getElementById("titulo").value;
          const autor = document.getElementById("autor").value;
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
        });
      });

      const liSenha = document.createElement("li");
      liSenha.textContent = `Senha: ${cliente.senha}`;
      clienteDetalhes.appendChild(liSenha);
    }
  } catch (error) {
    console.error("Erro ao buscar cliente:", error);
  }
});