document.addEventListener("DOMContentLoaded", async () => {
  const livroList = document.getElementById("livro-list");

  try {
    const response = await fetch('http://localhost:3000/clientes');
    const livros = await response.json();

    livros.forEach(livro => {
      const li = document.createElement('li');
      li.classList.add("livro-item");

      const livroInfo = document.createElement("span");
      livroInfo.textContent = `Nome: ${livro.titulo} | Email: ${livro.autor}`;
      li.appendChild(livroInfo);

      livroList.appendChild(li);
    });
  } catch (error) {
    console.error('Erro ao carregar livros:', error);
  }
});
