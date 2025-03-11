document.addEventListener("DOMContentLoaded", async () => {
  const livroList = document.getElementById("livro-list");

  try {
    const response = await fetch("http://localhost:3000/livros");
    const livro = await response.json();

    if (livro) {
      livro.forEach((livro) => {
        const li = document.createElement("li");
        li.textContent = `${livro.titulo} - ${livro.autor}`;
        livroList.appendChild(li);
      });
    }
  } catch (error) {
    console.error("Erro ao buscar os livros:", error);
  }
});